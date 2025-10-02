import React from "react";
import styles from "./AITutor.module.css";
import {
  FaRobot,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaGraduationCap,
  FaComments,
  FaClock,
  FaBrain,
  FaChartLine,
  FaUsers,
  FaRocket,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AITutor = () => {
  const features = [
    {
      icon: FaBrain,
      title: "স্মার্ট প্রশ্ন-উত্তর",
      description: "যেকোনো বিষয়ে জটিল প্রশ্নের সহজ এবং বিস্তারিত উত্তর পান",
    },
    {
      icon: FaGraduationCap,
      title: "ব্যক্তিগত শিক্ষা পরিকল্পনা",
      description: "আপনার দক্ষতা অনুযায়ী কাস্টমাইজড শিক্ষা পরিকল্পনা তৈরি",
    },
    {
      icon: FaComments,
      title: "ইন্টারঅ্যাক্টিভ কথোপকথন",
      description: "প্রাকৃতিক ভাষায় কথোপকথনের মাধ্যমে শিক্ষা গ্রহণ",
    },
    {
      icon: FaChartLine,
      title: "অগ্রগতি পর্যবেক্ষণ",
      description: "আপনার শেখার অগ্রগতি রিয়েল-টাইমে ট্র্যাক এবং বিশ্লেষণ",
    },
  ];

  const benefits = [
    "২৪/৭ উপলব্ধতা - যেকোনো সময় সাহায্য নিন",
    "মাল্টিমিডিয়া সাপোর্ট - টেক্সট, ইমেজ, ভিডিও",
    "বাংলা ভাষা সাপোর্ট - সম্পূর্ণ বাংলায় শিক্ষা",
    "অভিযোজিত শিক্ষা - আপনার গতি অনুযায়ী",
    "ব্যক্তিগত মেন্টরিং - একটু একটু করে উন্নতি",
    "পরীক্ষার প্রস্তুতি - লক্ষ্যভিত্তিক শিক্ষা",
  ];

  const useCases = [
    {
      title: "গণিত সমাধান",
      description: "জটিল গণিতের সমস্যা ধাপে ধাপে সমাধান",
      icon: "🧮",
    },
    {
      title: "ভাষা শিক্ষা",
      description: "ইংরেজি এবং অন্যান্য ভাষায় দক্ষতা বৃদ্ধি",
      icon: "🗣️",
    },
    {
      title: "বিজ্ঞান ব্যাখ্যা",
      description: "পদার্থ, রসায়ন, জীববিজ্ঞানের সহজ ব্যাখ্যা",
      icon: "🔬",
    },
    {
      title: "পরীক্ষার প্রস্তুতি",
      description: "এইচএসসি, বিসিএস, বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি",
      icon: "📚",
    },
  ];

  return (
    <section className={styles.aiTutor}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <FaRobot className={styles.badgeIcon} />
              <span>AI Tutor</span>
            </div>

            <h1 className={styles.title}>
              <span className={styles.titleMain}>আপনার ব্যক্তিগত</span>
              <span className={styles.titleSub}>AI শিক্ষক</span>
            </h1>

            <p className={styles.description}>
              ২৪/৭ উপলব্ধ আপনার ব্যক্তিগত AI শিক্ষক যা আপনার শেখার গতি, পছন্দ
              এবং লক্ষ্য অনুযায়ী ব্যক্তিগতকৃত শিক্ষা প্রদান করে। যেকোনো বিষয়ে
              তাৎক্ষণিক সাহায্য এবং গাইডেন্স পান।
            </p>

            <div className={styles.heroButtons}>
              <NavLink to="/join-waitlist" className={styles.primaryBtn}>
                <FaRocket className={styles.btnIcon} />
                এখনই ব্যবহার শুরু করুন
              </NavLink>
              <button className={styles.secondaryBtn}>
                <FaUsers className={styles.btnIcon} />
                ডেমো দেখুন
              </button>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.tutorBot}>
              <div className={styles.botCore}>
                <FaRobot />
              </div>
              <div className={styles.orbits}>
                <div className={styles.orbit1}></div>
                <div className={styles.orbit2}></div>
                <div className={styles.orbit3}></div>
              </div>
              <div className={styles.floatingIcons}>
                <div className={styles.floatingIcon}>📚</div>
                <div className={styles.floatingIcon}>🧠</div>
                <div className={styles.floatingIcon}>💡</div>
                <div className={styles.floatingIcon}>📝</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>প্রধান বৈশিষ্ট্যসমূহ</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <IconComponent />
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDesc}>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>AI Tutor এর সুবিধাসমূহ</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                <FaCheckCircle className={styles.checkIcon} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className={styles.useCasesSection}>
          <h2 className={styles.sectionTitle}>ব্যবহারের ক্ষেত্রসমূহ</h2>
          <div className={styles.useCasesGrid}>
            {useCases.map((useCase, index) => (
              <div key={index} className={styles.useCaseCard}>
                <div className={styles.useCaseIcon}>{useCase.icon}</div>
                <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                <p className={styles.useCaseDesc}>{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITutor;
