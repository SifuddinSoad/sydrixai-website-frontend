import React from "react";
import styles from "./StudyReports.module.css";
import {
  FaChartBar,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaGraduationCap,
  FaClock,
  FaBrain,
  FaChartLine,
  FaUsers,
  FaTrophy,
  FaCalendarAlt,
  FaEye,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const StudyReports = () => {
  const features = [
    {
      icon: FaChartLine,
      title: "বিস্তারিত বিশ্লেষণ",
      description:
        "আপনার পড়াশোনার প্রতিটি দিক নিয়ে গভীর বিশ্লেষণ এবং পরিসংখ্যান",
    },
    {
      icon: FaClock,
      title: "সময়ভিত্তিক ট্র্যাকিং",
      description: "দৈনিক, সাপ্তাহিক, মাসিক অগ্রগতি ট্র্যাক করুন",
    },
    {
      icon: FaTrophy,
      title: "পারফরমেন্স মেট্রিক্স",
      description: "স্কোর, র‌্যাঙ্কিং এবং উন্নতির হার পর্যবেক্ষণ",
    },
    {
      icon: FaEye,
      title: "ভিজুয়াল রিপোর্ট",
      description: "গ্রাফ, চার্ট এবং ইনফোগ্রাফিক্সের মাধ্যমে ডেটা প্রদর্শন",
    },
  ];

  const reportTypes = [
    {
      title: "দৈনিক অগ্রগতি রিপোর্ট",
      description: "প্রতিদিনের পড়াশোনার সময়, সম্পন্ন কাজ এবং অর্জিত স্কোর",
      icon: "📊",
      metrics: [
        "পড়াশোনার সময়",
        "সম্পন্ন লেসন",
        "অর্জিত পয়েন্ট",
        "প্রশ্ন সমাধান",
      ],
    },
    {
      title: "সাপ্তাহিক পারফরমেন্স",
      description: "সপ্তাহের সামগ্রিক পারফরমেন্স এবং তুলনামূলক বিশ্লেষণ",
      icon: "📈",
      metrics: ["গড় স্কোর", "উন্নতির হার", "দুর্বল বিষয়", "শক্তিশালী দিক"],
    },
    {
      title: "মাসিক ট্রেন্ড অ্যানালাইসিস",
      description: "মাসিক পারফরমেন্স ট্রেন্ড এবং দীর্ঘমেয়াদী অগ্রগতি",
      icon: "📋",
      metrics: [
        "ট্রেন্ড অ্যানালাইসিস",
        "মাসিক লক্ষ্য",
        "সামগ্রিক র‌্যাঙ্ক",
        "উন্নতির পরামর্শ",
      ],
    },
    {
      title: "বিষয়ভিত্তিক রিপোর্ট",
      description: "প্রতিটি বিষয়ে আলাদা আলাদা পারফরমেন্স এবং দক্ষতা মূল্যায়ন",
      icon: "📚",
      metrics: [
        "বিষয়ওয়ারি স্কোর",
        "চ্যাপ্টার অগ্রগতি",
        "দুর্বলতা চিহ্নিত",
        "উন্নতির উপায়",
      ],
    },
  ];

  const benefits = [
    "রিয়েল-টাইম ডেটা ট্র্যাকিং এবং আপডেট",
    "পার্সোনালাইজড ইনসাইট এবং পরামর্শ",
    "তুলনামূলক বিশ্লেষণ এবং বেঞ্চমার্কিং",
    "পিতা-মাতার সাথে শেয়ার করার সুবিধা",
    "এক্সপোর্ট এবং প্রিন্ট অপশন",
    "মোবাইল এবং ডেস্কটপ উভয়ে অ্যাক্সেস",
  ];

  return (
    <section className={styles.studyReports}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <FaChartBar className={styles.badgeIcon} />
              <span>Study Reports</span>
            </div>

            <h1 className={styles.title}>
              <span className={styles.titleMain}>বিস্তারিত অধ্যয়ন</span>
              <span className={styles.titleSub}>রিপোর্ট সিস্টেম</span>
            </h1>

            <p className={styles.description}>
              আপনার শিক্ষার অগ্রগতি নিয়ে বিস্তারিত এবং বিজ্ঞানভিত্তিক রিপোর্ট
              পান। ডেটা-চালিত ইনসাইটের মাধ্যমে আপনার দুর্বলতা চিহ্নিত করুন এবং
              উন্নতির সুনির্দিষ্ট পথ খুঁজে নিন।
            </p>

            <div className={styles.heroButtons}>
              <NavLink to="/join-waitlist" className={styles.primaryBtn}>
                <FaChartBar className={styles.btnIcon} />
                রিপোর্ট দেখুন
              </NavLink>
              <button className={styles.secondaryBtn}>
                <FaEye className={styles.btnIcon} />
                ডেমো রিপোর্ট
              </button>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.reportDashboard}>
              <div className={styles.dashboardHeader}>
                <div className={styles.headerTitle}>আপনার অগ্রগতি</div>
                <div className={styles.headerDate}>সেপ্টেম্বর ২০২৫</div>
              </div>
              <div className={styles.dashboardCharts}>
                <div className={styles.chart1}></div>
                <div className={styles.chart2}></div>
                <div className={styles.statsGrid}>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>85%</div>
                    <div className={styles.statLabel}>সামগ্রিক স্কোর</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>12</div>
                    <div className={styles.statLabel}>সম্পন্ন লেসন</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>রিপোর্টের বৈশিষ্ট্যসমূহ</h2>
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

        {/* Report Types Section */}
        <div className={styles.reportTypesSection}>
          <h2 className={styles.sectionTitle}>রিপোর্টের ধরন</h2>
          <div className={styles.reportTypesGrid}>
            {reportTypes.map((report, index) => (
              <div key={index} className={styles.reportCard}>
                <div className={styles.reportIcon}>{report.icon}</div>
                <h3 className={styles.reportTitle}>{report.title}</h3>
                <p className={styles.reportDesc}>{report.description}</p>
                <div className={styles.metricsGrid}>
                  {report.metrics.map((metric, idx) => (
                    <div key={idx} className={styles.metricTag}>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>Study Reports এর সুবিধাসমূহ</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                <FaCheckCircle className={styles.checkIcon} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Report Preview */}
        <div className={styles.sampleSection}>
          <h2 className={styles.sectionTitle}>নমুনা রিপোর্ট প্রিভিউ</h2>
          <div className={styles.sampleReport}>
            <div className={styles.sampleHeader}>
              <h3>সাপ্তাহিক পারফরমেন্স রিপোর্ট</h3>
              <span className={styles.sampleDate}>২২-২৮ সেপ্টেম্বর, ২০২৫</span>
            </div>
            <div className={styles.sampleContent}>
              <div className={styles.sampleChart}>
                <div className={styles.chartTitle}>দৈনিক অগ্রগতি</div>
                <div className={styles.chartBars}>
                  <div className={styles.bar} style={{ height: "60%" }}></div>
                  <div className={styles.bar} style={{ height: "80%" }}></div>
                  <div className={styles.bar} style={{ height: "45%" }}></div>
                  <div className={styles.bar} style={{ height: "90%" }}></div>
                  <div className={styles.bar} style={{ height: "75%" }}></div>
                  <div className={styles.bar} style={{ height: "65%" }}></div>
                  <div className={styles.bar} style={{ height: "85%" }}></div>
                </div>
              </div>
              <div className={styles.sampleStats}>
                <div className={styles.sampleStat}>
                  <div className={styles.sampleStatNumber}>78%</div>
                  <div className={styles.sampleStatLabel}>গড় স্কোর</div>
                </div>
                <div className={styles.sampleStat}>
                  <div className={styles.sampleStatNumber}>+15%</div>
                  <div className={styles.sampleStatLabel}>উন্নতি</div>
                </div>
                <div className={styles.sampleStat}>
                  <div className={styles.sampleStatNumber}>42</div>
                  <div className={styles.sampleStatLabel}>প্রশ্ন সমাধান</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyReports;
