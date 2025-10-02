import React from "react";
import { Link } from "react-router-dom";
import styles from "./AIRevisionSuggestions.module.css";

const AIRevisionSuggestions = () => {
  return (
    <div className={styles.aiRevision}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>🔄</span>
              AI রিভিশন সাজেশন
            </div>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>AI দিয়ে</span>
              <span className={styles.titleSub}>স্মার্ট রিভিশন</span>
            </h1>
            <p className={styles.description}>
              Advanced AI algorithm দিয়ে personalized revision plan তৈরি করুন।
              Spaced repetition, forgetting curve analysis এবং adaptive
              scheduling এর মাধ্যমে optimal retention নিশ্চিত করুন।
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
            <div className={styles.revisionPanel}>
              <div className={styles.panelHeader}>
                <h3>আজকের রিভিশন পরিকল্পনা</h3>
                <div className={styles.aiIndicator}>
                  <span className={styles.aiIcon}>🤖</span>
                  AI উৎপন্ন
                </div>
              </div>

              <div className={styles.revisionItems}>
                <div className={`${styles.revisionItem} ${styles.urgent}`}>
                  <div className={styles.priority}>🔴 উচ্চ অগ্রাধিকার</div>
                  <div className={styles.topic}>ক্যালকুলাস - ডেরিভেটিভ</div>
                  <div className={styles.lastStudied}>শেষ পড়া: ৩ দিন আগে</div>
                  <div className={styles.forgettingCurve}>মনে রাখা: ৪৫%</div>
                </div>

                <div className={`${styles.revisionItem} ${styles.medium}`}>
                  <div className={styles.priority}>🟡 মধ্যম অগ্রাধিকার</div>
                  <div className={styles.topic}>
                    পদার্থবিজ্ঞান - তাপগতিবিদ্যা
                  </div>
                  <div className={styles.lastStudied}>
                    শেষ পড়া: ১ সপ্তাহ আগে
                  </div>
                  <div className={styles.forgettingCurve}>মনে রাখা: ৬২%</div>
                </div>

                <div className={`${styles.revisionItem} ${styles.low}`}>
                  <div className={styles.priority}>🟢 নিম্ন অগ্রাধিকার</div>
                  <div className={styles.topic}>রসায়ন - পর্যায় সারণি</div>
                  <div className={styles.lastStudied}>শেষ পড়া: ২ দিন আগে</div>
                  <div className={styles.forgettingCurve}>মনে রাখা: ৭৮%</div>
                </div>
              </div>

              <div className={styles.revisionStats}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>১২</div>
                  <div className={styles.statLabel}>বিষয় বাকি</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>৪৫মি</div>
                  <div className={styles.statLabel}>আনুমানিক সময়</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>৮৫%</div>
                  <div className={styles.statLabel}>গড় মনে রাখা</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>স্মার্ট রিভিশন ফিচারসমূহ</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🧠</div>
              <h3 className={styles.featureTitle}>
                ভুলে যাওয়ার কার্ভ বিশ্লেষণ
              </h3>
              <p className={styles.featureDesc}>
                AI আপনার মেমরি ধরে রাখার ক্ষমতা ট্র্যাক করে এবং কখন আপনি প্রতিটি
                বিষয় ভুলে যাবেন তা পূর্বাভাস দেয়
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📅</div>
              <h3 className={styles.featureTitle}>স্পেসড রিপিটিশন</h3>
              <p className={styles.featureDesc}>
                বৈজ্ঞানিকভাবে প্রমাণিত স্পেসড রিপিটিশন পদ্ধতির উপর ভিত্তি করে
                রিভিশনের জন্য সর্বোত্তম সময়
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3 className={styles.featureTitle}>
                অগ্রাধিকার-ভিত্তিক সময়সূচী
              </h3>
              <p className={styles.featureDesc}>
                সর্বোচ্চ ভুলে যাওয়ার ঝুঁকি এবং সর্বনিম্ন মনে রাখার হার সহ
                বিষয়গুলিতে ফোকাস করুন
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3 className={styles.featureTitle}>ধরে রাখার অ্যানালিটিক্স</h3>
              <p className={styles.featureDesc}>
                আপনার মেমরি ধরে রাখার প্যাটার্ন ট্র্যাক করুন এবং অধ্যয়নের কৌশল
                অপ্টিমাইজ করুন
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3 className={styles.featureTitle}>অভিযোজনযোগ্য ব্যবধান</h3>
              <p className={styles.featureDesc}>
                AI আপনার পারফরম্যান্স এবং অসুবিধার স্তরের উপর ভিত্তি করে রিভিশন
                ব্যবধান সামঞ্জস্য করে
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔔</div>
              <h3 className={styles.featureTitle}>স্মার্ট রিমাইন্ডার</h3>
              <p className={styles.featureDesc}>
                নির্দিষ্ট বিষয়গুলি পুনর্বিবেচনা করার সর্বোত্তম সময় হলে সময়মত
                বিজ্ঞপ্তি পান
              </p>
            </div>
          </div>
        </section>

        {/* Revision Methods Section */}
        <section className={styles.methodsSection}>
          <h2 className={styles.sectionTitle}>AI রিভিশন পদ্ধতি</h2>
          <div className={styles.methodsGrid}>
            <div className={styles.methodCard}>
              <div className={styles.methodIcon}>🔄</div>
              <h3 className={styles.methodTitle}>স্পেসড রিপিটিশন</h3>
              <p className={styles.methodDesc}>
                দীর্ঘমেয়াদী মনে রাখার ক্ষমতা সর্বাধিক করতে বর্ধিত ব্যবধানে
                বিষয়গুলি পর্যালোচনা করুন
              </p>
              <div className={styles.methodFeatures}>
                <span className={styles.featureTag}>১ম দিন</span>
                <span className={styles.featureTag}>৩য় দিন</span>
                <span className={styles.featureTag}>৭ম দিন</span>
                <span className={styles.featureTag}>১৫তম দিন</span>
              </div>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodIcon}>🎯</div>
              <h3 className={styles.methodTitle}>সক্রিয় স্মরণ</h3>
              <p className={styles.methodDesc}>
                মেমরি পথ শক্তিশালী করতে AI-উত্পন্ন প্রশ্ন দিয়ে নিজেকে পরীক্ষা
                করুন
              </p>
              <div className={styles.methodFeatures}>
                <span className={styles.featureTag}>কুইজ মোড</span>
                <span className={styles.featureTag}>ফ্ল্যাশকার্ড</span>
                <span className={styles.featureTag}>অনুশীলন পরীক্ষা</span>
              </div>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodIcon}>🔗</div>
              <h3 className={styles.methodTitle}>ইন্টারলিভিং</h3>
              <p className={styles.methodDesc}>
                আরও ভাল বৈষম্য এবং ধরে রাখার জন্য রিভিশন সেশনে বিভিন্ন বিষয়
                মিশ্রিত করুন
              </p>
              <div className={styles.methodFeatures}>
                <span className={styles.featureTag}>মিশ্র বিষয়</span>
                <span className={styles.featureTag}>এলোমেলো ক্রম</span>
                <span className={styles.featureTag}>প্রসঙ্গ পরিবর্তন</span>
              </div>
            </div>
          </div>
        </section>

        {/* Forgetting Curve Visualization */}
        <section className={styles.curveSection}>
          <h2 className={styles.sectionTitle}>ভুলে যাওয়ার কার্ভ বিশ্লেষণ</h2>
          <div className={styles.curveVisualization}>
            <div className={styles.curveChart}>
              <div className={styles.chartHeader}>
                <h4>সময়ের সাথে মেমরি ধরে রাখা</h4>
                <div className={styles.chartLegend}>
                  <span className={styles.legendItem}>
                    <span
                      className={styles.legendColor}
                      style={{ "--color": "#ef4444" }}
                    ></span>
                    রিভিশন ছাড়া
                  </span>
                  <span className={styles.legendItem}>
                    <span
                      className={styles.legendColor}
                      style={{ "--color": "#22c55e" }}
                    ></span>
                    AI রিভিশন সহ
                  </span>
                </div>
              </div>

              <div className={styles.chartArea}>
                <div className={styles.yAxis}>
                  <span>১০০%</span>
                  <span>৭৫%</span>
                  <span>৫০%</span>
                  <span>২৫%</span>
                  <span>০%</span>
                </div>

                <div className={styles.chartGraph}>
                  <svg className={styles.curveSvg} viewBox="0 0 300 200">
                    {/* Without Revision Curve */}
                    <path
                      d="M 0 20 Q 75 60 150 120 Q 225 160 300 180"
                      stroke="#ef4444"
                      strokeWidth="3"
                      fill="none"
                      className={styles.forgettingLine}
                    />
                    {/* With AI Revision Curve */}
                    <path
                      d="M 0 20 Q 75 40 150 35 Q 225 30 300 25"
                      stroke="#22c55e"
                      strokeWidth="3"
                      fill="none"
                      className={styles.revisionLine}
                    />
                  </svg>
                </div>

                <div className={styles.xAxis}>
                  <span>১ম দিন</span>
                  <span>৭ম দিন</span>
                  <span>১৪তম দিন</span>
                  <span>৩০তম দিন</span>
                </div>
              </div>
            </div>

            <div className={styles.curveInsights}>
              <h4>মূল অন্তর্দৃষ্টি</h4>
              <div className={styles.insightList}>
                <div className={styles.insightItem}>
                  <div className={styles.insightIcon}>📉</div>
                  <div className={styles.insightText}>
                    রিভিশন ছাড়া, আপনি ২৪ ঘন্টার মধ্যে ৫০% ভুলে যান
                  </div>
                </div>
                <div className={styles.insightItem}>
                  <div className={styles.insightIcon}>📈</div>
                  <div className={styles.insightText}>
                    AI-সময়কৃত রিভিশন ৯০%+ ধরে রাখা বজায় রাখে
                  </div>
                </div>
                <div className={styles.insightItem}>
                  <div className={styles.insightIcon}>⏰</div>
                  <div className={styles.insightText}>
                    সর্বোত্তম রিভিশন সময় অধ্যয়নের সময় ৪০% কমিয়ে দেয়
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>রিভিশনের সুবিধা</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>দীর্ঘমেয়াদী মনে রাখার ক্ষমতা ৬০% বৃদ্ধি করুন</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>সর্বোত্তম সময়সূচীর সাথে অধ্যয়নের সময় কমান</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>গুরুত্বপূর্ণ বিষয়গুলি আর কখনও ভুলে যাবেন না</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>বিজ্ঞান-ভিত্তিক শেখার পদ্ধতি</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>আপনার শেখার প্যাটার্নের সাথে ব্যক্তিগতকৃত</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>স্বয়ংক্রিয় অগ্রগতি ট্র্যাকিং</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIRevisionSuggestions;
