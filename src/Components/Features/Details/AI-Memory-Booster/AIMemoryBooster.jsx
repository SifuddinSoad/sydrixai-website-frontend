import React from "react";
import { Link } from "react-router-dom";
import styles from "./AIMemoryBooster.module.css";

const AIMemoryBooster = () => {
  return (
    <div className={styles.aiMemory}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>🧠</span>
              এআই মেমরি বুস্টার
            </div>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>মেমরি পাওয়ার</span>
              <span className={styles.titleSub}>বুস্ট করুন</span>
            </h1>
            <p className={styles.description}>
              উন্নত এআই কৌশল দিয়ে আপনার স্মৃতিশক্তি বৃদ্ধি করুন। মেমরি প্যালেস,
              ভিজ্যুয়াল সংযোগ, এবং জ্ঞানীয় উন্নতি অনুশীলনের মাধ্যমে উৎকৃষ্ট
              স্মরণ ক্ষমতা অর্জন করুন।
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
            <div className={styles.memoryInterface}>
              <div className={styles.brainVisualization}>
                <div className={styles.brainIcon}>🧠</div>
                <div className={styles.memoryNodes}>
                  <div className={styles.node} style={{ "--delay": "0s" }}>
                    💡
                  </div>
                  <div className={styles.node} style={{ "--delay": "0.5s" }}>
                    🔗
                  </div>
                  <div className={styles.node} style={{ "--delay": "1s" }}>
                    ⚡
                  </div>
                  <div className={styles.node} style={{ "--delay": "1.5s" }}>
                    🎯
                  </div>
                </div>
              </div>

              <div className={styles.memoryTechniques}>
                <h4>সক্রিয় কৌশলসমূহ</h4>
                <div className={styles.techniqueList}>
                  <div className={styles.techniqueItem}>
                    <span className={styles.techniqueIcon}>🏰</span>
                    <span>মেমরি প্যালেস</span>
                  </div>
                  <div className={styles.techniqueItem}>
                    <span className={styles.techniqueIcon}>🖼️</span>
                    <span>ভিজ্যুয়াল সংযোগ</span>
                  </div>
                  <div className={styles.techniqueItem}>
                    <span className={styles.techniqueIcon}>🔄</span>
                    <span>ব্যবধান পুনরাবৃত্তি</span>
                  </div>
                </div>
              </div>

              <div className={styles.memoryStats}>
                <div className={styles.statBox}>
                  <div className={styles.statValue}>+৪৫%</div>
                  <div className={styles.statLabel}>মেমরি বৃদ্ধি</div>
                </div>
                <div className={styles.statBox}>
                  <div className={styles.statValue}>৯২%</div>
                  <div className={styles.statLabel}>স্মরণ হার</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>মেমরি উন্নতির বৈশিষ্ট্য</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏰</div>
              <h3 className={styles.featureTitle}>মেমরি প্যালেস নির্মাতা</h3>
              <p className={styles.featureDesc}>
                স্থানিক স্মৃতি ব্যবহার করে তথ্য সংরক্ষণ এবং স্মরণের জন্য
                ভার্চুয়াল মেমরি প্যালেস তৈরি করুন
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎨</div>
              <h3 className={styles.featureTitle}>ভিজ্যুয়াল সংযোগ</h3>
              <p className={styles.featureDesc}>
                বিমূর্ত ধারণাগুলিকে স্মরণীয় ভিজ্যুয়াল গল্প এবং সংযোগে রূপান্তর
                করুন
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔗</div>
              <h3 className={styles.featureTitle}>মাইন্ড ম্যাপিং</h3>
              <p className={styles.featureDesc}>
                ভাল বোঝার জন্য সম্পর্কিত ধারণাগুলি সংযুক্ত করে এআই-উৎপন্ন মাইন্ড
                ম্যাপ
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎵</div>
              <h3 className={styles.featureTitle}>ছন্দ ও তাল</h3>
              <p className={styles.featureDesc}>
                সহজ স্মরণের জন্য তথ্যকে গান, ছড়া এবং তালবদ্ধ প্যাটার্নে
                রূপান্তর করুন
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🧩</div>
              <h3 className={styles.featureTitle}>মেমরি গেমস</h3>
              <p className={styles.featureDesc}>
                বিভিন্ন ধরনের স্মৃতিশক্তি শক্তিশালী করার জন্য ইন্টারঅ্যাক্টিভ
                গেম এবং অনুশীলন
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📈</div>
              <h3 className={styles.featureTitle}>অগ্রগতি ট্র্যাকিং</h3>
              <p className={styles.featureDesc}>
                বিস্তারিত বিশ্লেষণ এবং বেঞ্চমার্ক সহ আপনার স্মৃতিশক্তির উন্নতি
                পর্যবেক্ষণ করুন
              </p>
            </div>
          </div>
        </section>

        {/* Memory Techniques Section */}
        <section className={styles.techniquesSection}>
          <h2 className={styles.sectionTitle}>প্রমাণিত মেমরি কৌশল</h2>
          <div className={styles.techniquesGrid}>
            <div className={styles.techniqueCard}>
              <div className={styles.techniqueHeader}>
                <div className={styles.techniqueIcon}>🏰</div>
                <h3>লোকাই পদ্ধতি (মেমরি প্যালেস)</h3>
              </div>
              <p className={styles.techniqueDesc}>
                পরিচিত স্থানের নির্দিষ্ট অবস্থানের সাথে তথ্য সংযুক্ত করুন।
                সংরক্ষিত স্মৃতি স্মরণ করতে আপনার মানসিক প্রাসাদে হাঁটুন।
              </p>
              <div className={styles.techniqueSteps}>
                <div className={styles.step}>১. একটি পরিচিত পথ বেছে নিন</div>
                <div className={styles.step}>২. অবস্থানে তথ্য স্থাপন করুন</div>
                <div className={styles.step}>
                  ৩. মানসিক যাত্রার অনুশীলন করুন
                </div>
              </div>
            </div>

            <div className={styles.techniqueCard}>
              <div className={styles.techniqueHeader}>
                <div className={styles.techniqueIcon}>🖼️</div>
                <h3>ভিজ্যুয়াল সংযোগ</h3>
              </div>
              <p className={styles.techniqueDesc}>
                তথ্যকে আরও স্মরণীয় এবং স্মরণ করা সহজ করতে প্রাণবন্ত, অস্বাভাবিক
                এবং অতিরঞ্জিত মানসিক চিত্র তৈরি করুন।
              </p>
              <div className={styles.techniqueSteps}>
                <div className={styles.step}>
                  ১. প্রাণবন্ত মানসিক চিত্র তৈরি করুন
                </div>
                <div className={styles.step}>২. সংযোগ অস্বাভাবিক করুন</div>
                <div className={styles.step}>৩. কর্ম এবং আবেগ ব্যবহার করুন</div>
              </div>
            </div>

            <div className={styles.techniqueCard}>
              <div className={styles.techniqueHeader}>
                <div className={styles.techniqueIcon}>🔤</div>
                <h3>সংক্ষিপ্ত রূপ ও স্মৃতিসহায়ক</h3>
              </div>
              <p className={styles.techniqueDesc}>
                তাৎক্ষণিক স্মরণের জন্য জটিল তথ্যকে স্মরণীয় বাক্যাংশ, সংক্ষিপ্ত
                রূপ বা বাক্য প্যাটার্নে রূপান্তর করুন।
              </p>
              <div className={styles.techniqueSteps}>
                <div className={styles.step}>১. মূল বিষয়গুলি চিহ্নিত করুন</div>
                <div className={styles.step}>
                  ২. স্মরণীয় বাক্যাংশ তৈরি করুন
                </div>
                <div className={styles.step}>৩. নিয়মিত অনুশীলন করুন</div>
              </div>
            </div>
          </div>
        </section>

        {/* Memory Training Games */}
        <section className={styles.gamesSection}>
          <h2 className={styles.sectionTitle}>মেমরি প্রশিক্ষণ গেমস</h2>
          <div className={styles.gamesList}>
            <div className={styles.gameCard}>
              <div className={styles.gameIcon}>🃏</div>
              <h4>কার্ড মেমরি চ্যালেঞ্জ</h4>
              <p>কার্যকর স্মৃতি উন্নত করতে কার্ডের ক্রম মনে রাখুন</p>
            </div>
            <div className={styles.gameCard}>
              <div className={styles.gameIcon}>🔢</div>
              <h4>সংখ্যার ক্রম</h4>
              <p>
                সংখ্যাগত স্মৃতির জন্য ক্রমবর্ধমান সংখ্যার ক্রম নিয়ে অনুশীলন
                করুন
              </p>
            </div>
            <div className={styles.gameCard}>
              <div className={styles.gameIcon}>📝</div>
              <h4>শব্দ সংযোগ</h4>
              <p>শব্দভান্ডার বৃদ্ধির জন্য শব্দ এবং ধারণা সংযুক্ত করুন</p>
            </div>
            <div className={styles.gameCard}>
              <div className={styles.gameIcon}>🎨</div>
              <h4>ভিজ্যুয়াল প্যাটার্ন</h4>
              <p>জটিল ভিজ্যুয়াল প্যাটার্ন চিনুন এবং মনে রাখুন</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>মেমরি বুস্টারের সুবিধা</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>স্মৃতিশক্তি ৪০-৬০% বৃদ্ধি করুন</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>স্মরণের গতি এবং নির্ভুলতা উন্নত করুন</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>প্রমাণিত কৌশল দিয়ে ভুলে যাওয়া কমান</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>উন্নত মনোযোগ এবং একাগ্রতা</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>ভাল পরীক্ষার পারফরমেন্স</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>আজীবন জ্ঞানীয় উন্নতি</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>আপনার মেমরি পাওয়ার বাড়ান</h2>
            <p className={styles.ctaDesc}>
              এআই-চালিত মেমরি কৌশল দিয়ে আপনার শেখার ক্ষমতা এবং স্মরণ ক্ষমতা
              উন্নত করুন
            </p>
            <Link to="/join-waitlist" className={styles.ctaBtn}>
              <span>ওয়েটলিস্টে যোগ দিন</span>
              <span className={styles.arrowIcon}>→</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIMemoryBooster;
