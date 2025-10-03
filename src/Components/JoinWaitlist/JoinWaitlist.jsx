import React, { useState } from "react";
import styles from "./JoinWaitlist.module.css";
import {
  FaRocket,
  FaBell,
  FaCheckCircle,
  FaUserPlus,
  FaGift,
  FaStar,
  FaUsers,
  FaCrown,
  FaExclamationTriangle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { apiServices } from "../../services/api";

const JoinWaitlist = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "student",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitErrors, setSubmitErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear previous errors when user starts typing
    if (submitError) {
      setSubmitError("");
      setSubmitErrors([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError("");
    setSubmitErrors([]);

    try {
      // Validate form data
      if (!formData.name.trim()) {
        throw new Error("নাম প্রয়োজন");
      }
      if (!formData.email.trim()) {
        throw new Error("ইমেইল প্রয়োজন");
      }
      if (!formData.phone.trim()) {
        throw new Error("ফোন নম্বর প্রয়োজন");
      }

      

      // Submit to API
      const result = await apiServices.registerUser(formData);

      if (result.success) {
        setIsSubmitted(true);
        
      }
    } catch (error) {
      console.error("Registration error:", error);

      // Handle different types of errors
      if (error.response?.status === 409) {
        // User already exists
        setSubmitError(
          "এই ইমেইল ঠিকানা দিয়ে ইতিমধ্যে রেজিস্ট্রেশন করা হয়েছে।"
        );
      } else if (error.response?.status === 400) {
        // Validation error from server
        if (
          error.response.data?.errors &&
          Array.isArray(error.response.data.errors)
        ) {
          setSubmitErrors(error.response.data.errors);
          setSubmitError("দয়া করে নিচের ত্রুটিগুলো সংশোধন করুন:");
        } else {
          setSubmitError(
            error.response.data?.message ||
              "ভ্যালিডেশন ত্রুটি। দয়া করে তথ্য পরীক্ষা করুন।"
          );
        }
      } else if (error.response?.status >= 500) {
        // Server error
        setSubmitError("সার্ভার ত্রুটি। দয়া করে পরে আবার চেষ্টা করুন।");
      } else if (!error.response) {
        // Network error
        setSubmitError(
          "ইন্টারনেট সংযোগ সমস্যা। দয়া করে আপনার সংযোগ পরীক্ষা করুন।"
        );
      } else if (error.errors && Array.isArray(error.errors)) {
        // Custom validation errors
        setSubmitErrors(error.errors);
        setSubmitError("দয়া করে নিচের ত্রুটিগুলো সংশোধন করুন:");
      } else {
        // Generic error
        setSubmitError(
          error.message ||
            error.response?.data?.message ||
            "একটি ত্রুটি ঘটেছে। দয়া করে আবার চেষ্টা করুন।"
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: FaCrown,
      title: "Early Access",
      description: "লঞ্চের আগেই প্ল্যাটফর্মে বিনামূল্যে প্রবেশাধিকার পান",
    },
    {
      icon: FaGift,
      title: "Special Discount",
      description: "প্রিমিয়াম ফিচারে ৫০% পর্যন্ত ছাড়",
    },
    {
      icon: FaBell,
      title: "Priority Notification",
      description: "সবার আগে নতুন ফিচার ও আপডেটের খবর পান",
    },
    {
      icon: FaStar,
      title: "Beta Features",
      description: "এক্সক্লুসিভ বেটা ফিচার ট্রায়াল করার সুযোগ",
    },
  ];

  if (isSubmitted) {
    return (
      <section className={styles.waitlist}>
        <div className={styles.container}>
          <div className={styles.successContent}>
            <div className={styles.successIcon}>
              <FaCheckCircle />
            </div>
            <h1 className={styles.successTitle}>
              স্বাগতম! আপনি সফলভাবে Waitlist এ যুক্ত হয়েছেন
            </h1>
            <p className={styles.successDescription}>
              আমরা শীঘ্রই আপনার ইমেইলে লঞ্চের বিস্তারিত তথ্য পাঠাবো। আমাদের এই
              যাত্রায় সাথে থাকার জন্য ধন্যবাদ!
            </p>
            <div className={styles.successActions}>
              <NavLink to="/" className={styles.homeButton}>
                হোমে ফিরে যান
              </NavLink>
           
            </div>
          </div>
        </div>

        <div className={styles.backgroundPattern}>
          <div className={styles.patternOverlay}></div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.waitlist}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <FaRocket className={styles.badgeIcon} />
            <span>Pre-Launch Registration</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleMain}>SydrixAI Waitlist এ</span>
            <span className={styles.titleSub}>যুক্ত হোন</span>
          </h1>

          <p className={styles.description}>
            বাংলাদেশের প্রথম AI-চালিত শিক্ষা প্ল্যাটফর্মে প্রাথমিক প্রবেশাধিকার
            পান। লঞ্চের সাথে সাথেই বিশেষ সুবিধা ও ছাড় উপভোগ করুন।
          </p>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Left Side - Form */}
          <div className={styles.formSection}>
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>
                <FaUserPlus className={styles.formIcon} />
                আজই রেজিস্ট্রেশন করুন
              </h2>

              {submitError && (
                <div className={styles.errorMessage}>
                  <FaExclamationTriangle className={styles.errorIcon} />
                  <div>
                    <p>{submitError}</p>
                    {submitErrors.length > 0 && (
                      <ul className={styles.errorList}>
                        {submitErrors.map((error, index) => (
                          <li key={index}>{error}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.waitlistForm}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>সম্পূর্ণ নাম *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="আপনার সম্পূর্ণ নাম লিখুন"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>ইমেইল ঠিকানা *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="আপনার ইমেইল ঠিকানা"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>ফোন নম্বর *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="আপনার ফোন নম্বর"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    আপনি কোন ক্যাটাগরিতে? *
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className={styles.select}
                    required
                  >
                    <option value="student">শিক্ষার্থী</option>
                    <option value="parent">অভিভাবক</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className={styles.loading}>
                      <div className={styles.spinner}></div>
                      প্রসেসিং...
                    </div>
                  ) : (
                    <>
                      <FaRocket className={styles.buttonIcon} />
                      Waitlist এ যুক্ত হোন
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className={styles.benefitsSection}>
            <h3 className={styles.benefitsTitle}>Early Access সুবিধাসমূহ</h3>
            <div className={styles.benefitsList}>
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>
                      <IconComponent />
                    </div>
                    <div className={styles.benefitContent}>
                      <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                      <p className={styles.benefitDescription}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Community Info */}
            <div className={styles.communityInfo}>
              <div className={styles.communityIcon}>
                <FaUsers />
              </div>
              <div className={styles.communityContent}>
                <h4>Join Our Community</h4>
                <p>
                  ২৫০০+ এর বেশি শিক্ষার্থী ইতিমধ্যে আমাদের কমিউনিটিতে যুক্ত
                  হয়েছে
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className={styles.backgroundPattern}>
        <div className={styles.patternOverlay}></div>
      </div>
    </section>
  );
};

export default JoinWaitlist;


