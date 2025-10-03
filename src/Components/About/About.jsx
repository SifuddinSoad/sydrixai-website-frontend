import React from "react";
import styles from "./About.module.css";
import {
  FaEye,
  FaBullseye,
  FaHeart,
  FaRocket,
  FaGlobe,
  FaUsers,
  FaBrain,
  FaGraduationCap,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaLightbulb,
} from "react-icons/fa";

const About = () => {
  const visionPoints = [
    "প্রতিটি শিক্ষার্থীর জন্য ব্যক্তিগতকৃত শিক্ষা",
    "কৃত্রিম বুদ্ধিমত্তার সাহায্যে শিক্ষার মান উন্নয়ন",
    "ডিজিটাল শিক্ষায় বাংলাদেশকে এগিয়ে নিয়ে যাওয়া",
  ];

  const goalPoints = [
    "শিক্ষার ক্ষেত্রে AI প্রযুক্তির সর্বোচ্চ ব্যবহার",
    "সাশ্রয়ী মূল্যে মানসম্পন্ন শিক্ষা প্রদান",
    "শিক্ষার্থীদের স্বপ্ন পূরণে সহায়তা করা",
  ];

  const missionPoints = [
    "প্রতিটি বিষয়ে বিশেষজ্ঞ AI টিউটর প্রদান",
    "ব্যক্তিগত শেখার গতি অনুযায়ী কোর্স ডিজাইন",
    "শিক্ষার মাধ্যমে দেশের ভবিষ্যৎ গড়া",
  ];

  const stats = [
    { number: "৯৫%", label: "সফলতার হার", icon: FaGraduationCap },
    { number: "২৪/৭", label: "সাপোর্ট", icon: FaBrain },
    { number: "১০০+", label: "কোর্স", icon: FaLightbulb },
  ];

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <FaStar className={styles.badgeIcon} />
            <span>আমাদের সম্পর্কে</span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.titleMain}>SydrixAI - শিক্ষার ভবিষ্যৎ</span>
            <span className={styles.titleSub}>
              বাংলাদেশের প্রথম AI চালিত শিক্ষা প্ল্যাটফর্ম
            </span>
          </h2>
          <p className={styles.description}>
            আমরা বিশ্বাস করি যে প্রতিটি শিক্ষার্থীর মধ্যে অসীম সম্ভাবনা রয়েছে।
            SydrixAI এর মাধ্যমে আমরা কৃত্রিম বুদ্ধিমত্তার শক্তি ব্যবহার করে সেই
            সম্ভাবনাকে বাস্তবায়িত করতে চাই।
          </p>
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIcon}>
                  <IconComponent />
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className={styles.contentGrid}>
          {/* Vision Card */}
          <div className={styles.contentCard}>
            <div className={styles.cardHeader}>
              <div
                className={styles.cardIcon}
                style={{
                  backgroundColor: "#3366ff15",
                  borderColor: "#3366ff30",
                }}
              >
                <FaEye style={{ color: "#3366ff" }} />
              </div>
              <h3 className={styles.cardTitle}>আমাদের দৃষ্টিভঙ্গি</h3>
            </div>
            <p className={styles.cardDescription}>
              আমাদের স্বপ্ন হলো বাংলাদেশের প্রতিটি শিক্ষার্থী যেন তাদের নিজের
              গতিতে, নিজের পছন্দ অনুযায়ী সর্বোচ্চ মানের শিক্ষা পেতে পারে। আমরা
              চাই AI প্রযুক্তির মাধ্যমে শিক্ষাকে আরও সহজ, কার্যকর এবং আনন্দদায়ক
              করে তুলতে।
            </p>
            <div className={styles.pointsList}>
              {visionPoints.map((point, index) => (
                <div key={index} className={styles.point}>
                  <FaCheckCircle className={styles.pointIcon} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Goals Card */}
          <div className={styles.contentCard}>
            <div className={styles.cardHeader}>
              <div
                className={styles.cardIcon}
                style={{
                  backgroundColor: "#2196f315",
                  borderColor: "#2196f330",
                }}
              >
                <FaBullseye style={{ color: "#2196f3" }} />
              </div>
              <h3 className={styles.cardTitle}>আমাদের লক্ষ্য</h3>
            </div>
            <p className={styles.cardDescription}>
              আমাদের প্রধান লক্ষ্য হলো শিক্ষার ক্ষেত্রে বৈপ্লবিক পরিবর্তন আনা।
              আমরা চাই প্রতিটি শিক্ষার্থী যেন তাদের স্বপ্নের পথে এগিয়ে যেতে
              পারে এবং দেশের উন্নয়নে অবদান রাখতে পারে।
            </p>
            <div className={styles.pointsList}>
              {goalPoints.map((point, index) => (
                <div key={index} className={styles.point}>
                  <FaCheckCircle className={styles.pointIcon} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Card */}
          <div className={styles.contentCard}>
            <div className={styles.cardHeader}>
              <div
                className={styles.cardIcon}
                style={{
                  backgroundColor: "#4caf5015",
                  borderColor: "#4caf5030",
                }}
              >
                <FaHeart style={{ color: "#4caf50" }} />
              </div>
              <h3 className={styles.cardTitle}>আমাদের মিশন</h3>
            </div>
            <p className={styles.cardDescription}>
              আমাদের মিশন হলো প্রতিটি শিক্ষার্থীকে তাদের সম্পূর্ণ সম্ভাবনা
              অর্জনে সহায়তা করা। আমরা AI প্রযুক্তি ব্যবহার করে শিক্ষাকে আরও
              কার্যকর, সুবিধাজনক এবং ফলপ্রসূ করতে চাই।
            </p>
            <div className={styles.pointsList}>
              {missionPoints.map((point, index) => (
                <div key={index} className={styles.point}>
                  <FaCheckCircle className={styles.pointIcon} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className={styles.storySection}>
          <div className={styles.storyContent}>
            <h3 className={styles.storyTitle}>আমাদের গল্প</h3>
            <p className={styles.storyText}>
              SydrixAI এর যাত্রা শুরু হয়েছিল একটি সাধারণ কিন্তু শক্তিশালী ধারণা
              থেকে - প্রতিটি শিক্ষার্থী অনন্য এবং তাদের শেখার পদ্ধতিও আলাদা।
              আমরা দেখেছি যে ঐতিহ্যগত শিক্ষা ব্যবস্থায় অনেক শিক্ষার্থী তাদের
              প্রকৃত সম্ভাবনা প্রকাশ করতে পারে না।
            </p>
            <p className={styles.storyText}>
              এই সমস্যার সমাধানে আমরা কৃত্রিম বুদ্ধিমত্তার শক্তি কাজে লাগিয়ে
              এমন একটি প্ল্যাটফর্ম তৈরি করেছি যা প্রতিটি শিক্ষার্থীর জন্য
              ব্যক্তিগতকৃত শিক্ষার পরিবেশ সৃষ্টি করে। আমাদের স্বপ্ন হলো
              বাংলাদেশের শিক্ষা ব্যবস্থায় একটি নতুন দিগন্ত উন্মোচন করা।
            </p>
          </div>
          <div className={styles.storyVisual}>
            <div className={styles.visualElement}>
              <div className={styles.centralIcon}>
                <FaRocket />
              </div>
              <div className={styles.orbitingIcons}>
                <div className={styles.orbitIcon1}>
                  <FaBrain />
                </div>
                <div className={styles.orbitIcon2}>
                  <FaGraduationCap />
                </div>
                <div className={styles.orbitIcon3}>
                  <FaGlobe />
                </div>
                <div className={styles.orbitIcon4}>
                  <FaUsers />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>আমাদের সাথে যুক্ত হন</h3>
          <p className={styles.ctaDescription}>
            আপনিও হয়ে উঠুন এই শিক্ষা বিপ্লবের অংশ। SydrixAI এর সাথে শুরু করুন
            আপনার নতুন শিক্ষার যাত্রা।
          </p>
          <button className={styles.ctaButton}>
            আজই শুরু করুন
            <FaArrowRight className={styles.ctaIcon} />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default About;

