import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Features.module.css";
import {
  FaRobot,
  FaChartBar,
  FaClock,
  FaUsers,
  FaGraduationCap,
  FaLightbulb,
  FaBrain,
  FaQuestionCircle,
  FaCalendarAlt,
  FaStickyNote,
  FaArrowRight,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

const featuresData = [
  {
    id: 1,
    title: "AI Tutor",
    route: "/features/ai-tutor",
    description:
      "আপনার ব্যক্তিগত AI শিক্ষক যা ২৪/৭ আপনার সাথে থাকবে এবং যেকোনো বিষয়ে সাহায্য করবে।",
    icon: FaRobot,
    color: "#3366ff",
    featured: true,
    benefits: [
      "ব্যক্তিগত শিক্ষা পরিকল্পনা",
      "তাৎক্ষণিক সমাধান",
      "অভিযোজিত শেখার পদ্ধতি",
    ],
  },
  {
    id: 2,
    title: "Comprehensive Study Reports",
    route: "/features/comprehensive-study-reports",
    description:
      "বিস্তারিত অধ্যয়ন রিপোর্ট যা আপনার অগ্রগতি ট্র্যাক করে এবং উন্নতির পথ দেখায়।",
    icon: FaChartBar,
    color: "#2196f3",
    benefits: [
      "বিস্তারিত বিশ্লেষণ",
      "অগ্রগতি ট্র্যাকিং",
      "পারফরমেন্স মেট্রিক্স",
    ],
  },
  {
    id: 3,
    title: "Study Time Tracker",
    route: "/features/study-time-tracker",
    description:
      "স্মার্ট টাইম ট্র্যাকিং সিস্টেম যা আপনার অধ্যয়নের সময় এবং অনুশীলন পর্যবেক্ষণ করে।",
    icon: FaClock,
    color: "#4caf50",
    benefits: ["সময় ব্যবস্থাপনা", "অনুশীলন ট্র্যাকিং", "উৎপাদনশীলতা বৃদ্ধি"],
  },
  {
    id: 4,
    title: "Peer Comparison Tool",
    route: "/features/peer-comparison-tool",
    description:
      "সমবয়সীদের সাথে তুলনা করুন এবং প্রতিযোগিতামূলক শিক্ষার পরিবেশ তৈরি করুন।",
    icon: FaUsers,
    color: "#ff9800",
    benefits: [
      "প্রতিযোগিতামূলক শিক্ষা",
      "র‌্যাঙ্কিং সিস্টেম",
      "সামাজিক শিক্ষা",
    ],
  },
  {
    id: 5,
    title: "AI Exam System",
    route: "/features/ai-exam-system",
    description:
      "বুদ্ধিমান পরীক্ষা সিস্টেম যা আপনার দক্ষতা অনুযায়ী প্রশ্ন তৈরি করে।",
    icon: FaGraduationCap,
    color: "#9c27b0",
    benefits: ["অভিযোজিত প্রশ্ন", "তাৎক্ষণিক ফলাফল", "দুর্বলতা চিহ্নিতকরণ"],
  },
  {
    id: 6,
    title: "AI Revision Suggestions",
    route: "/features/ai-revision-suggestions",
    description:
      "স্মার্ট পুনর্বিবেচনা পরামর্শ যা আপনার শেখার প্যাটার্ন বিশ্লেষণ করে।",
    icon: FaLightbulb,
    color: "#ffd700",
    benefits: [
      "ব্যক্তিগতকৃত পরামর্শ",
      "সময়োপযোগী রিভিশন",
      "কার্যকর পুনরাবৃত্তি",
    ],
  },
  {
    id: 7,
    title: "AI Memory Booster",
    route: "/features/ai-memory-booster",
    description:
      "মেমরি বৃদ্ধির জন্য বিশেষ AI কৌশল এবং স্মৃতিশক্তি উন্নয়ন সিস্টেম।",
    icon: FaBrain,
    color: "#e91e63",
    benefits: ["স্মৃতিশক্তি বৃদ্ধি", "মনে রাখার কৌশল", "দীর্ঘমেয়াদী শিক্ষা"],
  },
  {
    id: 8,
    title: "AI Doubt Solver",
    route: "/features/ai-doubt-solver",
    description: "তাৎক্ষণিক সন্দেহ নিরসন। প্রয়োজনে মানব শিক্ষকের সাহায্য নিন।",
    icon: FaQuestionCircle,
    color: "#00bcd4",
    benefits: ["২৪/৭ সহায়তা", "তাৎক্ষণিক সমাধান", "মানব শিক্ষক সংযোগ"],
  },
  {
    id: 9,
    title: "Routine Management",
    route: "/features/routine-management",
    description:
      "AI চালিত রুটিন ব্যবস্থাপনা যা আপনার জীবনযাত্রা অনুযায়ী পরিকল্পনা তৈরি করে।",
    icon: FaCalendarAlt,
    color: "#795548",
    benefits: ["স্মার্ট সময়সূচী", "স্বয়ংক্রিয় পরিকল্পনা", "নমনীয় রুটিন"],
  },
  {
    id: 10,
    title: "AI Notes Maker",
    route: "/features/ai-notes-maker",
    description: "স্বয়ংক্রিয় নোট তৈরি এবং সংগঠিত করার বুদ্ধিমান সিস্টেম।",
    icon: FaStickyNote,
    color: "#607d8b",
    benefits: ["স্বয়ংক্রিয় নোট", "স্মার্ট সংগঠন", "দ্রুত অনুসন্ধান"],
  },
];

const Features = () => {
  const navigate = useNavigate();

  const handleLearnMore = (route) => {
    navigate(route);
  };

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <FaStar className={styles.badgeIcon} />
            <span>আমাদের বৈশিষ্ট্য</span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.titleMain}>শক্তিশালী AI বৈশিষ্ট্য</span>
            <span className={styles.titleSub}>
              যা আপনার শিক্ষাকে এগিয়ে নিয়ে যাবে
            </span>
          </h2>
          <p className={styles.description}>
            SydrixAI এর অত্যাধুনিক কৃত্রিম বুদ্ধিমত্তা প্রযুক্তি দিয়ে আপনার
            শিক্ষার অভিজ্ঞতাকে সম্পূর্ণ নতুন মাত্রায় নিয়ে যান। প্রতিটি
            বৈশিষ্ট্য আপনার সফলতার জন্য ডিজাইন করা।
          </p>
        </div>

        {/* Featured Card - AI Tutor */}
        <div className={styles.featuredCard}>
          <div className={styles.featuredContent}>
            <div className={styles.featuredIcon}>
              <FaRobot />
            </div>
            <div className={styles.featuredText}>
              <h3>AI Tutor - আপনার ব্যক্তিগত শিক্ষক</h3>
              <p>
                ২৪/৭ উপলব্ধ আপনার ব্যক্তিগত AI শিক্ষক। যেকোনো বিষয়ে তাৎক্ষণিক
                সাহায্য পান, ব্যক্তিগতকৃত শিক্ষা পরিকল্পনা তৈরি করুন এবং আপনার
                শেখার গতি বাড়ান।
              </p>
              <div className={styles.featuredBenefits}>
                {featuresData[0].benefits.map((benefit, index) => (
                  <div key={index} className={styles.benefit}>
                    <FaCheckCircle className={styles.benefitIcon} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <button
                className={styles.featuredLearnMore}
                onClick={() => handleLearnMore(featuresData[0].route)}
              >
                <span>আরও জানুন</span>
                <FaArrowRight className={styles.arrowIcon} />
              </button>
            </div>
          </div>
          <div className={styles.featuredVisual}>
            <div className={styles.tutorAnimation}>
              <div className={styles.tutorCore}>
                <FaRobot />
              </div>
              <div className={styles.tutorRings}>
                <div className={styles.ring1}></div>
                <div className={styles.ring2}></div>
                <div className={styles.ring3}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {featuresData.slice(1).map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className={styles.featureCard}>
                <div
                  className={styles.iconWrapper}
                  style={{
                    backgroundColor: `${feature.color}15`,
                    borderColor: `${feature.color}30`,
                  }}
                >
                  <IconComponent
                    className={styles.icon}
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
                <div className={styles.benefitsList}>
                  {feature.benefits.map((benefit, index) => (
                    <div key={index} className={styles.benefitItem}>
                      <FaCheckCircle className={styles.checkIcon} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={styles.learnMore}
                  style={{ borderColor: feature.color, color: feature.color }}
                  onClick={() => handleLearnMore(feature.route)}
                >
                  <span>আরও জানুন</span>
                  <FaArrowRight className={styles.arrowIcon} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
