import React from "react";
import { Link } from "react-router-dom";
import styles from "./AIExamSystem.module.css";

const AIExamSystem = () => {
  return (
    <div className={styles.aiExamSystem}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>📝</span>
              এআই পরীক্ষা সিস্টেম
            </div>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>AI দিয়ে</span>
              <span className={styles.titleSub}>পরীক্ষার প্রস্তুতি</span>
            </h1>
            <p className={styles.description}>
              উন্নত এআই পরীক্ষা সিস্টেম দিয়ে বাস্তবসম্মত অনুশীলন পরীক্ষা নিন,
              তাৎক্ষণিক প্রতিক্রিয়া পান এবং দুর্বল এলাকাগুলি চিহ্নিত করুন।
              অভিযোজিত প্রশ্ন তৈরি এবং বিস্তারিত কর্মক্ষমতা বিশ্লেষণ সহ।
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
            <div className={styles.examInterface}>
              <div className={styles.examHeader}>
                <div className={styles.examTitle}>গণিত অনুশীলন পরীক্ষা</div>
                <div className={styles.examTimer}>
                  <span className={styles.timeIcon}>⏱️</span>
                  <span className={styles.timeRemaining}>৪৫:৩২</span>
                </div>
              </div>

              <div className={styles.questionCard}>
                <div className={styles.questionNumber}>
                  প্রশ্ন ১৫ টির মধ্যে ৪০
                </div>
                <div className={styles.questionText}>
                  যদি f(x) = 2x² + 3x - 1 হয়, তাহলে f'(2) এর মান কত?
                </div>
                <div className={styles.options}>
                  <div className={styles.option}>ক) ৫</div>
                  <div className={`${styles.option} ${styles.selected}`}>
                    খ) ১১
                  </div>
                  <div className={styles.option}>গ) ৭</div>
                  <div className={styles.option}>ঘ) ৯</div>
                </div>
              </div>

              <div className={styles.examProgress}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill}></div>
                </div>
                <div className={styles.progressText}>৩৭.৫% সম্পূর্ণ</div>
              </div>

              <div className={styles.examControls}>
                <button className={styles.controlBtn}>পূর্ববর্তী</button>
                <button className={styles.controlBtn}>
                  পর্যালোচনার জন্য চিহ্নিত করুন
                </button>
                <button className={`${styles.controlBtn} ${styles.nextBtn}`}>
                  পরবর্তী
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>
            এআই পরীক্ষা সিস্টেমের বৈশিষ্ট্য
          </h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🤖</div>
              <h3 className={styles.featureTitle}>অভিযোজিত প্রশ্ন তৈরি</h3>
              <p className={styles.featureDesc}>
                এআই আপনার দক্ষতার স্তরের উপর ভিত্তি করে প্রশ্ন তৈরি করে এবং
                রিয়েল-টাইমে কঠিনতা সামঞ্জস্য করে
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3 className={styles.featureTitle}>
                তাৎক্ষণিক বিস্তারিত বিশ্লেষণ
              </h3>
              <p className={styles.featureDesc}>
                ধাপে ধাপে সমাধান এবং কর্মক্ষমতার অন্তর্দৃষ্টি সহ তাৎক্ষণিক
                প্রতিক্রিয়া পান
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3 className={styles.featureTitle}>দুর্বলতা সনাক্তকরণ</h3>
              <p className={styles.featureDesc}>
                এআই আপনার দুর্বল এলাকাগুলি চিহ্নিত করে এবং লক্ষ্যবদ্ধ অনুশীলন
                সেশনের পরামর্শ দেয়
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📚</div>
              <h3 className={styles.featureTitle}>বিষয়ভিত্তিক পরীক্ষা</h3>
              <p className={styles.featureDesc}>
                সিলেবাস-ভিত্তিক প্রশ্ন ব্যাংক সহ সমস্ত বিষয়ের জন্য ব্যাপক
                পরীক্ষা
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⏰</div>
              <h3 className={styles.featureTitle}>সময়সীমা অনুশীলন</h3>
              <p className={styles.featureDesc}>
                গতি এবং নির্ভুলতা উন্নত করতে প্রকৃত পরীক্ষার সময় সীমাবদ্ধতার
                সাথে অনুশীলন করুন
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📈</div>
              <h3 className={styles.featureTitle}>অগ্রগতি ট্র্যাকিং</h3>
              <p className={styles.featureDesc}>
                বিস্তারিত কর্মক্ষমতা বিশ্লেষণের সাথে সময়ের সাথে আপনার উন্নতি
                পর্যবেক্ষণ করুন
              </p>
            </div>
          </div>
        </section>

        {/* Exam Types Section */}
        <section className={styles.examTypesSection}>
          <h2 className={styles.sectionTitle}>উপলব্ধ পরীক্ষার ধরন</h2>
          <div className={styles.examTypesGrid}>
            <div className={styles.examTypeCard}>
              <div className={styles.examTypeIcon}>🎓</div>
              <h3 className={styles.examTypeTitle}>মক পরীক্ষা</h3>
              <p className={styles.examTypeDesc}>
                সঠিক সময় এবং কঠিনতা সহ প্রকৃত পরীক্ষার পরিস্থিতি অনুকরণ করে
                পূর্ণ দৈর্ঘ্যের অনুশীলন পরীক্ষা
              </p>
              <div className={styles.examFeatures}>
                <span className={styles.featureTag}>সময়সীমা</span>
                <span className={styles.featureTag}>পূর্ণ দৈর্ঘ্য</span>
                <span className={styles.featureTag}>বাস্তবসম্মত</span>
              </div>
            </div>

            <div className={styles.examTypeCard}>
              <div className={styles.examTypeIcon}>⚡</div>
              <h3 className={styles.examTypeTitle}>দ্রুত অনুশীলন</h3>
              <p className={styles.examTypeDesc}>
                দৈনিক দক্ষতা বৃদ্ধি এবং ধারণা শক্তিশালীকরণের জন্য ১০-১৫ মিনিটের
                ছোট অনুশীলন সেশন
              </p>
              <div className={styles.examFeatures}>
                <span className={styles.featureTag}>দ্রুত</span>
                <span className={styles.featureTag}>দৈনিক</span>
                <span className={styles.featureTag}>লক্ষ্যবদ্ধ</span>
              </div>
            </div>

            <div className={styles.examTypeCard}>
              <div className={styles.examTypeIcon}>🔍</div>
              <h3 className={styles.examTypeTitle}>বিষয়ভিত্তিক পরীক্ষা</h3>
              <p className={styles.examTypeDesc}>
                নির্দিষ্ট বিষয় এবং অধ্যায়ের উপর ফোকাসড পরীক্ষা যা পৃথক
                ধারণাগুলি পুঙ্খানুপুঙ্খভাবে আয়ত্ত করতে সাহায্য করে
              </p>
              <div className={styles.examFeatures}>
                <span className={styles.featureTag}>লক্ষ্যবদ্ধ</span>
                <span className={styles.featureTag}>অধ্যায়ভিত্তিক</span>
                <span className={styles.featureTag}>দক্ষতা</span>
              </div>
            </div>
          </div>
        </section>

        {/* AI Analysis Preview */}
        <section className={styles.analysisSection}>
          <h2 className={styles.sectionTitle}>এআই কর্মক্ষমতা বিশ্লেষণ</h2>
          <div className={styles.analysisPreview}>
            <div className={styles.analysisMain}>
              <div className={styles.scoreCard}>
                <div className={styles.overallScore}>
                  <div className={styles.scoreNumber}>৭৮</div>
                  <div className={styles.scoreLabel}>সামগ্রিক স্কোর</div>
                </div>
                <div className={styles.scoreBreakdown}>
                  <div className={styles.subjectScore}>
                    <span className={styles.subject}>গণিত</span>
                    <span className={styles.score}>৮৫%</span>
                  </div>
                  <div className={styles.subjectScore}>
                    <span className={styles.subject}>পদার্থবিজ্ঞান</span>
                    <span className={styles.score}>৭২%</span>
                  </div>
                  <div className={styles.subjectScore}>
                    <span className={styles.subject}>রসায়ন</span>
                    <span className={styles.score}>৭৬%</span>
                  </div>
                </div>
              </div>

              <div className={styles.weaknessAnalysis}>
                <h4>উন্নতির জন্য ক্ষেত্রসমূহ</h4>
                <div className={styles.weaknessList}>
                  <div className={styles.weaknessItem}>
                    <div className={styles.weaknessTitle}>
                      ক্যালকুলাস - অন্তরীকরণ
                    </div>
                    <div className={styles.weaknessPercentage}>
                      ৪৫% নির্ভুলতা
                    </div>
                  </div>
                  <div className={styles.weaknessItem}>
                    <div className={styles.weaknessTitle}>
                      পদার্থবিজ্ঞান - আলোকবিজ্ঞান
                    </div>
                    <div className={styles.weaknessPercentage}>
                      ৫২% নির্ভুলতা
                    </div>
                  </div>
                  <div className={styles.weaknessItem}>
                    <div className={styles.weaknessTitle}>
                      রসায়ন - জৈব রসায়ন
                    </div>
                    <div className={styles.weaknessPercentage}>
                      ৬১% নির্ভুলতা
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.recommendations}>
              <h4>এআই সুপারিশসমূহ</h4>
              <div className={styles.recommendationList}>
                <div className={styles.recommendationItem}>
                  <div className={styles.recommendationIcon}>📚</div>
                  <div className={styles.recommendationText}>
                    অন্তরীকরণের নিয়মাবলীর অনুশীলনে ফোকাস করুন - প্রতিদিন ৩০
                    মিনিট সময় দিন
                  </div>
                </div>
                <div className={styles.recommendationItem}>
                  <div className={styles.recommendationIcon}>🎯</div>
                  <div className={styles.recommendationText}>
                    পরবর্তী মক পরীক্ষার আগে আলোকবিজ্ঞানের উপর বিষয়ভিত্তিক
                    পরীক্ষা নিন
                  </div>
                </div>
                <div className={styles.recommendationItem}>
                  <div className={styles.recommendationIcon}>⚡</div>
                  <div className={styles.recommendationText}>
                    গণনার গতি বাড়ান - সময়সীমা সহ প্রশ্নের অনুশীলন করুন
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>
            কেন আমাদের এআই পরীক্ষা সিস্টেম বেছে নেবেন
          </h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>গড়ে ২৫% পরীক্ষার নম্বর উন্নতি করুন</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>নিয়মিত অনুশীলনের মাধ্যমে পরীক্ষার উদ্বেগ কমান</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>ব্যক্তিগতকৃত অধ্যয়নের সুপারিশ পান</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>সমস্ত বিষয়ে অগ্রগতি ট্র্যাক করুন</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>সীমাহীন অনুশীলনের প্রশ্নে অ্যাক্সেস পান</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>তাৎক্ষণিক প্রতিক্রিয়া এবং ব্যাখ্যা পান</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
      </div>
    </div>
  );
};

export default AIExamSystem;
