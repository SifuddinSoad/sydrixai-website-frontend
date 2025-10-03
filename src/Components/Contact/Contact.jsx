import React, { useState } from "react";
import styles from "./Contact.module.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaComments,
  FaPaperPlane,
  FaStar,
  FaCheckCircle,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaExclamationTriangle,
} from "react-icons/fa";
import { apiServices } from "../../services/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitErrors, setSubmitErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear previous errors when user starts typing
    if (submitStatus === "error") {
      setSubmitStatus("");
      setSubmitErrors([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");
    setSubmitMessage("");
    setSubmitErrors([]);

    try {
      // Validate form data
      if (!formData.fullName.trim()) {
        throw new Error("পূর্ণ নাম প্রয়োজন");
      }
      if (!formData.email.trim()) {
        throw new Error("ইমেইল প্রয়োজন");
      }
      if (!formData.phone.trim()) {
        throw new Error("ফোন নম্বর প্রয়োজন");
      }
      if (!formData.message.trim()) {
        throw new Error("বার্তা প্রয়োজন");
      }

      // Submit to API
      const result = await apiServices.submitContactForm(formData);

      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage(
          "আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।"
        );

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("");
          setSubmitMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error("Contact form submission error:", error);

      setSubmitStatus("error");

      if (error.errors && Array.isArray(error.errors)) {
        setSubmitErrors(error.errors);
        setSubmitMessage("দয়া করে নিচের ত্রুটিগুলো সংশোধন করুন:");
      } else {
        setSubmitMessage(
          error.message || "একটি ত্রুটি ঘটেছে। দয়া করে আবার চেষ্টা করুন।"
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "ইমেইল",
      value: "contract.us@sydrixai.com",
      description: "যেকোনো প্রশ্নের জন্য আমাদের ইমেইল করুন",
    },
    {
      icon: FaPhone,
      title: "ফোন",
      value: "+88017 96313920",
      description: "সরাসরি কথা বলতে আমাদের কল করুন",
    },
    {
      icon: FaMapMarkerAlt,
      title: "ঠিকানা",
      value: "ঢাকা, বাংলাদেশ",
      description: "আমাদের অফিসে আসতে পারেন",
    },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61580432654894",
    },
    { icon: FaLinkedinIn, name: "LinkedIn", url: "#" },
  ];

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <FaStar className={styles.badgeIcon} />
            <span>যোগাযোগ</span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.titleMain}>আমাদের সাথে যোগাযোগ করুন</span>
            <span className={styles.titleSub}>
              আপনার মতামত আমাদের কাছে গুরুত্বপূর্ণ
            </span>
          </h2>
          <p className={styles.description}>
            যেকোনো প্রশ্ন, পরামর্শ বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন।
            আমরা আপনার প্রতিটি মেসেজের উত্তর দিতে প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        {/* Main Content */}
        <div className={styles.contentGrid}>
          {/* Contact Form */}
          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>মেসেজ পাঠান</h3>
              <p className={styles.formSubtitle}>
                নিচের ফর্মটি পূরণ করে আমাদের কাছে আপনার মেসেজ পাঠান
              </p>
            </div>

            {submitStatus === "success" && (
              <div className={styles.successMessage}>
                <FaCheckCircle className={styles.successIcon} />
                <span>{submitMessage}</span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className={styles.errorMessage}>
                <FaExclamationTriangle className={styles.errorIcon} />
                <div>
                  <p>{submitMessage}</p>
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

            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="fullName" className={styles.label}>
                  <FaUser className={styles.labelIcon} />
                  পূর্ণ নাম *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                  required
                />
              </div>

              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>
                    <FaEnvelope className={styles.labelIcon} />
                    ইমেইল ঠিকানা *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    <FaPhone className={styles.labelIcon} />
                    ফোন নম্বর
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="০১৭ ১২ৃৃৃৃ ৫৬৭৮"
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>
                  <FaComments className={styles.labelIcon} />
                  বার্তা *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  placeholder="আপনার বার্তা এখানে লিখুন..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.spinner}></div>
                    পাঠানো হচ্ছে...
                  </>
                ) : (
                  <>
                    মেসেজ পাঠান
                    <FaPaperPlane className={styles.submitIcon} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={styles.infoSection}>
            <div className={styles.infoHeader}>
              <h3 className={styles.infoTitle}>যোগাযোগের তথ্য</h3>
              <p className={styles.infoSubtitle}>
                নিচের মাধ্যমেও আমাদের সাথে যোগাযোগ করতে পারেন
              </p>
            </div>

            <div className={styles.contactCards}>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className={styles.contactCard}>
                    <div className={styles.cardIcon}>
                      <IconComponent />
                    </div>
                    <div className={styles.cardContent}>
                      <h4 className={styles.cardTitle}>{info.title}</h4>
                      <p className={styles.cardValue}>{info.value}</p>
                      <p className={styles.cardDescription}>
                        {info.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>সোশ্যাল মিডিয়া</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className={styles.socialLink}
                      aria-label={social.name}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className={styles.responsePromise}>
              <div className={styles.promiseIcon}>
                <FaCheckCircle />
              </div>
              <div className={styles.promiseText}>
                <h4>দ্রুত উত্তরের প্রতিশ্রুতি</h4>
                <p>
                  আমরা ২৪ ঘন্টার মধ্যে আপনার মেসেজের উত্তর দেওয়ার চেষ্টা করি
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

