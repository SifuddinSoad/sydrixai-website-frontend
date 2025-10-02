import React from "react";
import { Link } from "react-router-dom";
import styles from "./PeerComparison.module.css";

const PeerComparison = () => {
  return (
    <div className={styles.peerComparison}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>🏆</span>
              সহপাঠী তুলনা
            </div>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>সহপাঠীদের সাথে</span>
              <span className={styles.titleSub}>তুলনা করুন</span>
            </h1>
            <p className={styles.description}>
              AI-চালিত সহপাঠী তুলনা সিস্টেম দিয়ে আপনার অগ্রগতি ট্র্যাক করুন,
              প্রতিযোগিতামূলক পরিবেশ তৈরি করুন এবং অনুপ্রেরণা বৃদ্ধি করুন।
              বেনামী লিডারবোর্ড এবং ব্যক্তিগত অন্তর্দৃষ্টি পান।
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
            <div className={styles.leaderboard}>
              <div className={styles.leaderboardHeader}>
                <h3>সাপ্তাহিক লিডারবোর্ড</h3>
                <div className={styles.period}>এই সপ্তাহ</div>
              </div>

              <div className={styles.rankings}>
                <div className={`${styles.rankItem} ${styles.rank1}`}>
                  <div className={styles.rank}>🥇</div>
                  <div className={styles.avatar}>👤</div>
                  <div className={styles.userInfo}>
                    <div className={styles.username}>তুমি</div>
                    <div className={styles.score}>২,৪৫০ পয়েন্ট</div>
                  </div>
                  <div className={styles.trend}>📈</div>
                </div>

                <div className={`${styles.rankItem} ${styles.rank2}`}>
                  <div className={styles.rank}>🥈</div>
                  <div className={styles.avatar}>👤</div>
                  <div className={styles.userInfo}>
                    <div className={styles.username}>শিক্ষার্থী ক</div>
                    <div className={styles.score}>২,৩৮০ পয়েন্ট</div>
                  </div>
                  <div className={styles.trend}>📊</div>
                </div>

                <div className={`${styles.rankItem} ${styles.rank3}`}>
                  <div className={styles.rank}>🥉</div>
                  <div className={styles.avatar}>👤</div>
                  <div className={styles.userInfo}>
                    <div className={styles.username}>শিক্ষার্থী খ</div>
                    <div className={styles.score}>২,২৫০ পয়েন্ট</div>
                  </div>
                  <div className={styles.trend}>📉</div>
                </div>
              </div>

              <div className={styles.myStats}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>শীর্ষ ৫%</div>
                  <div className={styles.statLabel}>র‌্যাঙ্ক</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>+১২০</div>
                  <div className={styles.statLabel}>এই সপ্তাহ</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>১৫</div>
                  <div className={styles.statLabel}>ধারাবাহিকতা</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>স্মার্ট তুলনা বৈশিষ্ট্য</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3 className={styles.featureTitle}>কর্মক্ষমতা বিশ্লেষণ</h3>
              <p className={styles.featureDesc}>
                বেনামী সহপাঠী গ্রুপের সাথে আপনার অধ্যয়নের সময়, কুইজের স্কোর
                এবং উন্নতির হার তুলনা করুন
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏆</div>
              <h3 className={styles.featureTitle}>লিডারবোর্ড</h3>
              <p className={styles.featureDesc}>
                সম্পূর্ণ গোপনীয়তা বজায় রেখে দৈনিক, সাপ্তাহিক এবং মাসিক
                লিডারবোর্ডে প্রতিযোগিতা করুন
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3 className={styles.featureTitle}>লক্ষ্যভিত্তিক মিল</h3>
              <p className={styles.featureDesc}>
                একই ধরনের একাডেমিক লক্ষ্য এবং অধ্যয়নের ধরনের সহপাঠীদের সাথে
                মিলিত হন
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔥</div>
              <h3 className={styles.featureTitle}>অধ্যয়ন চ্যালেঞ্জ</h3>
              <p className={styles.featureDesc}>
                আপনার সহপাঠী গ্রুপের সাথে বন্ধুত্বপূর্ণ প্রতিযোগিতা এবং অধ্যয়ন
                চ্যালেঞ্জে অংশগ্রহণ করুন
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📈</div>
              <h3 className={styles.featureTitle}>অগ্রগতির অন্তর্দৃষ্টি</h3>
              <p className={styles.featureDesc}>
                অনুরূপ শিক্ষার্থীদের সাথে আপনার শেখার গতি কেমন তার বিস্তারিত
                অন্তর্দৃষ্টি পান
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3 className={styles.featureTitle}>গোপনীয়তা সুরক্ষিত</h3>
              <p className={styles.featureDesc}>
                সব তুলনা বেনামী এবং নিরাপদ, আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখে
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Dashboard */}
        <section className={styles.dashboardSection}>
          <h2 className={styles.sectionTitle}>কর্মক্ষমতা ড্যাশবোর্ড</h2>
          <div className={styles.dashboardGrid}>
            <div className={styles.performanceCard}>
              <h3>অধ্যয়নের সময় তুলনা</h3>
              <div className={styles.comparisonChart}>
                <div className={styles.chartBars}>
                  <div className={styles.barGroup}>
                    <div className={styles.bar} style={{ "--height": "80%" }}>
                      <div className={styles.barValue}>৬.৫ঘ</div>
                    </div>
                    <div className={styles.barLabel}>আপনি</div>
                  </div>
                  <div className={styles.barGroup}>
                    <div className={styles.bar} style={{ "--height": "65%" }}>
                      <div className={styles.barValue}>৫.২ঘ</div>
                    </div>
                    <div className={styles.barLabel}>সহপাঠীরা</div>
                  </div>
                  <div className={styles.barGroup}>
                    <div className={styles.bar} style={{ "--height": "90%" }}>
                      <div className={styles.barValue}>৭.১ঘ</div>
                    </div>
                    <div className={styles.barLabel}>শীর্ষ ১০%</div>
                  </div>
                </div>
              </div>
              <div className={styles.insight}>
                আপনি গড় সহপাঠীদের চেয়ে ২৫% বেশি অধ্যয়ন করছেন! 🎉
              </div>
            </div>

            <div className={styles.progressCard}>
              <h3>কুইজ কর্মক্ষমতা</h3>
              <div className={styles.scoreComparison}>
                <div className={styles.scoreItem}>
                  <div className={styles.scoreLabel}>আপনার গড়</div>
                  <div className={styles.scoreValue}>৮৭%</div>
                  <div className={styles.scoreBar}>
                    <div
                      className={styles.scoreFill}
                      style={{ "--width": "87%" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.scoreItem}>
                  <div className={styles.scoreLabel}>সহপাঠীদের গড়</div>
                  <div className={styles.scoreValue}>৭৮%</div>
                  <div className={styles.scoreBar}>
                    <div
                      className={styles.scoreFill}
                      style={{ "--width": "78%" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.scoreItem}>
                  <div className={styles.scoreLabel}>ক্লাসের গড়</div>
                  <div className={styles.scoreValue}>৭২%</div>
                  <div className={styles.scoreBar}>
                    <div
                      className={styles.scoreFill}
                      style={{ "--width": "72%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.rankingCard}>
              <h3>আপনার র‌্যাঙ্কিং</h3>
              <div className={styles.rankingList}>
                <div className={styles.rankingItem}>
                  <span className={styles.subject}>গণিত</span>
                  <span className={styles.position}>#৩</span>
                  <span className={styles.percentile}>শীর্ষ ৫%</span>
                </div>
                <div className={styles.rankingItem}>
                  <span className={styles.subject}>পদার্থবিদ্যা</span>
                  <span className={styles.position}>#১</span>
                  <span className={styles.percentile}>শীর্ষ ২%</span>
                </div>
                <div className={styles.rankingItem}>
                  <span className={styles.subject}>রসায়ন</span>
                  <span className={styles.position}>#৭</span>
                  <span className={styles.percentile}>শীর্ষ ১৫%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>কেন সহপাঠী তুলনা কাজ করে</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>💪</div>
              <h3 className={styles.benefitTitle}>বর্ধিত অনুপ্রেরণা</h3>
              <p className={styles.benefitDesc}>
                সহপাঠীদের সাথে স্বাস্থ্যকর প্রতিযোগিতা অনুপ্রেরণা বৃদ্ধি করে এবং
                আপনাকে অধ্যয়নে নিয়োজিত রাখে
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>📊</div>
              <h3 className={styles.benefitTitle}>উন্নত আত্ম-মূল্যায়ন</h3>
              <p className={styles.benefitDesc}>
                অনুরূপ শিক্ষার্থীদের সাথে তুলনা করে আপনার শক্তি এবং দুর্বলতা
                বুঝুন
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🎯</div>
              <h3 className={styles.benefitTitle}>লক্ষ্য নির্ধারণ</h3>
              <p className={styles.benefitDesc}>
                সহপাঠীদের কর্মক্ষমতা এবং অর্জনের ভিত্তিতে বাস্তবসম্মত এবং
                চ্যালেঞ্জিং লক্ষ্য নির্ধারণ করুন
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🚀</div>
              <h3 className={styles.benefitTitle}>অবিরাম উন্নতি</h3>
              <p className={styles.benefitDesc}>
                ক্রমাগত উন্নতি এবং পরবর্তী স্তরের অর্জনে পৌঁছানোর জন্য
                অনুপ্রাণিত থাকুন
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section className={styles.privacySection}>
          <div className={styles.privacyContent}>
            <div className={styles.privacyText}>
              <h2>আপনার গোপনীয়তা আমাদের অগ্রাধিকার</h2>
              <p>
                আমরা আপনার গোপনীয়তা সম্পূর্ণভাবে সুরক্ষিত রাখি। সব তুলনা বেনামী
                এবং নিরাপদ। কেউ আপনার ব্যক্তিগত তথ্য বা প্রকৃত কর্মক্ষমতা দেখতে
                পারবে না।
              </p>
              <ul className={styles.privacyFeatures}>
                <li>✅ তুলনায় সম্পূর্ণ বেনামিত্ব</li>
                <li>✅ কোন ব্যক্তিগত তথ্য শেয়ারিং নেই</li>
                <li>✅ নিরাপদ ডেটা এনক্রিপশন</li>
                <li>✅ ঐচ্ছিক অংশগ্রহণ</li>
              </ul>
            </div>
            <div className={styles.privacyVisual}>
              <div className={styles.shieldIcon}>🛡️</div>
              <div className={styles.privacyBadges}>
                <span className={styles.badge}>বেনামী</span>
                <span className={styles.badge}>এনক্রিপ্টেড</span>
                <span className={styles.badge}>নিরাপদ</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PeerComparison;
