import React from "react";
import { Link } from "react-router-dom";
import styles from "./RoutineManagement.module.css";

const RoutineManagement = () => {
  return (
    <div className={styles.routineManagement}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>📅</span>
              রুটিন ব্যবস্থাপনা
            </div>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>AI দিয়ে</span>
              <span className={styles.titleSub}>পারফেক্ট রুটিন</span>
            </h1>
            <p className={styles.description}>
              স্মার্ট AI অ্যালগরিদম দিয়ে ব্যক্তিগত অধ্যয়নের রুটিন তৈরি করুন।
              স্বয়ংক্রিয় সময়সূচী, অগ্রাধিকার ব্যবস্থাপনা এবং অভিযোজনশীল সময়
              বরাদ্দ সহ সর্বোচ্চ উৎপাদনশীলতা নিশ্চিত করুন।
            </p>
            <div className={styles.heroButtons}>
              <Link to="/join-waitlist" className={styles.primaryBtn}>
                <span className={styles.btnIcon}>🚀</span>
                এখনই শুরু করুন
              </Link>
              <button className={styles.secondaryBtn}>
                <span className={styles.btnIcon}>▶️</span>
                ডেমো দেখুন
              </button>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.scheduleInterface}>
              <div className={styles.calendarHeader}>
                <h3>আজকের সময়সূচী</h3>
                <div className={styles.dateInfo}>১৫ ডিসেম্বর, ২০২৪</div>
              </div>

              <div className={styles.timeSlots}>
                <div className={`${styles.timeSlot} ${styles.completed}`}>
                  <div className={styles.time}>সকাল ৬:০০</div>
                  <div className={styles.activity}>
                    <div className={styles.activityName}>সকালের পর্যালোচনা</div>
                    <div className={styles.subject}>গণিত</div>
                  </div>
                  <div className={styles.status}>✅</div>
                </div>

                <div className={`${styles.timeSlot} ${styles.current}`}>
                  <div className={styles.time}>সকাল ৮:০০</div>
                  <div className={styles.activity}>
                    <div className={styles.activityName}>নতুন অধ্যায়</div>
                    <div className={styles.subject}>
                      পদার্থবিদ্যা - আলোকবিদ্যা
                    </div>
                  </div>
                  <div className={styles.status}>📖</div>
                </div>

                <div className={styles.timeSlot}>
                  <div className={styles.time}>সকাল ১০:৩০</div>
                  <div className={styles.activity}>
                    <div className={styles.activityName}>অনুশীলন সমস্যা</div>
                    <div className={styles.subject}>রসায়ন</div>
                  </div>
                  <div className={styles.status}>⏰</div>
                </div>

                <div className={styles.timeSlot}>
                  <div className={styles.time}>দুপুর ২:০০</div>
                  <div className={styles.activity}>
                    <div className={styles.activityName}>রিভিশন সেশন</div>
                    <div className={styles.subject}>পূর্ববর্তী বিষয়সমূহ</div>
                  </div>
                  <div className={styles.status}>🔄</div>
                </div>
              </div>

              <div className={styles.dailyStats}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>৫ঘ ৩০ম</div>
                  <div className={styles.statLabel}>পরিকল্পিত অধ্যয়ন</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>৭৫%</div>
                  <div className={styles.statLabel}>সম্পন্ন</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>স্মার্ট রুটিন বৈশিষ্ট্য</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🤖</div>
              <h3 className={styles.featureTitle}>AI-চালিত সময়সূচী</h3>
              <p className={styles.featureDesc}>
                বুদ্ধিমান অ্যালগরিদম আপনার লক্ষ্য এবং পছন্দের ভিত্তিতে সর্বোত্তম
                অধ্যয়নের সময়সূচী তৈরি করে
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚖️</div>
              <h3 className={styles.featureTitle}>স্মার্ট সময় বরাদ্দ</h3>
              <p className={styles.featureDesc}>
                বিষয়ের কঠিনতা এবং আপনার কর্মক্ষমতার ভিত্তিতে স্বয়ংক্রিয়ভাবে
                অধ্যয়নের সময় বিতরণ করে
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔄</div>
              <h3 className={styles.featureTitle}>অভিযোজনশীল সমন্বয়</h3>
              <p className={styles.featureDesc}>
                আপনার অগ্রগতি এবং পরিবর্তনশীল অগ্রাধিকারের ভিত্তিতে সময়সূচী
                স্বয়ংক্রিয়ভাবে সমন্বিত হয়
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⏰</div>
              <h3 className={styles.featureTitle}>বিরতি অপ্টিমাইজেশন</h3>
              <p className={styles.featureDesc}>
                সর্বোচ্চ উৎপাদনশীলতা বজায় রাখতে বৈজ্ঞানিকভাবে নির্ধারিত বিরতি
                এবং বিশ্রামের সময়
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3 className={styles.featureTitle}>কর্মক্ষমতা ট্র্যাকিং</h3>
              <p className={styles.featureDesc}>
                বিস্তারিত বিশ্লেষণের সাথে রুটিন অনুসরণ এবং অধ্যয়নের কার্যকারিতা
                পর্যবেক্ষণ করুন
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔔</div>
              <h3 className={styles.featureTitle}>স্মার্ট রিমাইন্ডার</h3>
              <p className={styles.featureDesc}>
                বিরক্তিকর না হয়ে আপনাকে ট্র্যাকে রাখতে সাহায্য করে প্রসঙ্গিক
                বিজ্ঞপ্তি
              </p>
            </div>
          </div>
        </section>

        {/* Routine Types Section */}
        <section className={styles.routineTypesSection}>
          <h2 className={styles.sectionTitle}>কাস্টমাইজেবল রুটিন প্রকার</h2>
          <div className={styles.routineTypesGrid}>
            <div className={styles.routineCard}>
              <div className={styles.routineIcon}>🌅</div>
              <h3 className={styles.routineTitle}>প্রভাতী সময়সূচী</h3>
              <p className={styles.routineDesc}>
                সকালের শিক্ষার্থীদের জন্য অপ্টিমাইজড প্রারম্ভিক ঘন্টায় সর্বোচ্চ
                অধ্যয়ন সেশন সহ
              </p>
              <div className={styles.routineTime}>সকাল ৫:০০ - রাত ১০:০০</div>
              <div className={styles.routineFeatures}>
                <span>সকালের ফোকাস</span>
                <span>বিকেলের পর্যালোচনা</span>
                <span>সন্ধ্যার বিশ্রাম</span>
              </div>
            </div>

            <div className={styles.routineCard}>
              <div className={styles.routineIcon}>🌙</div>
              <h3 className={styles.routineTitle}>নিশাচর সময়সূচী</h3>
              <p className={styles.routineDesc}>
                সন্ধ্যার শিক্ষার্থীদের জন্য নিখুঁত সূর্যাস্তের পর ঘনীভূত অধ্যয়ন
                সেশন সহ
              </p>
              <div className={styles.routineTime}>সকাল ৮:০০ - রাত ১২:০০</div>
              <div className={styles.routineFeatures}>
                <span>দেরিতে শুরু</span>
                <span>সন্ধ্যার সর্বোচ্চ</span>
                <span>রাতের অধ্যয়ন</span>
              </div>
            </div>

            <div className={styles.routineCard}>
              <div className={styles.routineIcon}>⚖️</div>
              <h3 className={styles.routineTitle}>সুষম সময়সূচী</h3>
              <p className={styles.routineDesc}>
                নিয়মিত বিরতি সহ সারাদিন ধরে সমানভাবে বিতরণ করা অধ্যয়ন সেশন
              </p>
              <div className={styles.routineTime}>সকাল ৭:০০ - রাত ১১:০০</div>
              <div className={styles.routineFeatures}>
                <span>বিতরণকৃত শিক্ষা</span>
                <span>নিয়মিত বিরতি</span>
                <span>নমনীয় সময়</span>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly View */}
        <section className={styles.weeklySection}>
          <h2 className={styles.sectionTitle}>
            সাপ্তাহিক সময়সূচী সংক্ষিপ্ত বিবরণ
          </h2>
          <div className={styles.weeklyCalendar}>
            <div className={styles.weekDays}>
              {["সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্র", "শনি", "রবি"].map(
                (day, index) => (
                  <div key={day} className={styles.dayColumn}>
                    <div className={styles.dayHeader}>{day}</div>
                    <div className={styles.dayContent}>
                      <div className={`${styles.studyBlock} ${styles.math}`}>
                        গণিত
                      </div>
                      <div className={`${styles.studyBlock} ${styles.physics}`}>
                        পদার্থবিদ্যা
                      </div>
                      <div
                        className={`${styles.studyBlock} ${styles.chemistry}`}
                      >
                        রসায়ন
                      </div>
                      {index < 5 && (
                        <div
                          className={`${styles.studyBlock} ${styles.revision}`}
                        >
                          রিভিশন
                        </div>
                      )}
                      {index >= 5 && (
                        <div className={`${styles.studyBlock} ${styles.test}`}>
                          মক টেস্ট
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>রুটিন ব্যবস্থাপনার সুবিধা</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>অধ্যয়নের দক্ষতা ৩৫% বৃদ্ধি</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>উন্নত কর্ম-জীবনের সমতা</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>স্ট্রেস এবং অভিভূততা হ্রাস</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>ধারাবাহিক দৈনিক অগ্রগতি</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>সর্বোত্তম সময় ব্যবহার</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>আপনার জীবনযাত্রার সাথে ব্যক্তিগতকৃত</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RoutineManagement;
