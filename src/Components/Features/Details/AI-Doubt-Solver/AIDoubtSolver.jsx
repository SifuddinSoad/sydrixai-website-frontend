import React from "react";
import { Link } from "react-router-dom";
import styles from "./AIDoubtSolver.module.css";

const AIDoubtSolver = () => {
  return (
    <div className={styles.aiDoubtSolver}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>❓</span>
              AI সন্দেহ সমাধানকারী
            </div>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>যেকোনো সন্দেহ</span>
              <span className={styles.titleSub}>তৎক্ষণাত সমাধান</span>
            </h1>
            <p className={styles.description}>
              ২৪/৭ উপলব্ধ AI সন্দেহ সমাধানকারী যা তাৎক্ষণিক ব্যাখ্যা, ধাপে ধাপে
              সমাধান এবং ধারণা স্পষ্টীকরণ প্রদান করে। গণিত, পদার্থবিজ্ঞান,
              রসায়ন সহ সব বিষয়ের জটিল সমস্যা সমাধান করুন।
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
            <div className={styles.chatInterface}>
              <div className={styles.chatHeader}>
                <div className={styles.aiAvatar}>🤖</div>
                <div className={styles.aiInfo}>
                  <div className={styles.aiName}>SydrixAI শিক্ষক</div>
                  <div className={styles.aiStatus}>● অনলাইন</div>
                </div>
              </div>

              <div className={styles.chatMessages}>
                <div className={styles.userMessage}>
                  <div className={styles.messageContent}>
                    এই ইন্টিগ্রালটি কীভাবে সমাধান করবো: ∫x²e^x dx?
                  </div>
                </div>

                <div className={styles.aiMessage}>
                  <div className={styles.messageContent}>
                    আমি এটি ইন্টিগ্রেশন বাই পার্টস ব্যবহার করে সমাধান করব! আসুন
                    ধাপে ধাপে ভেঙে দেখি:
                    <div className={styles.solutionSteps}>
                      <div className={styles.step}>
                        ১. ইন্টিগ্রেশন বাই পার্টস ব্যবহার করুন: ∫u dv = uv - ∫v
                        du
                      </div>
                      <div className={styles.step}>
                        ২. ধরি u = x², dv = e^x dx
                      </div>
                      <div className={styles.step}>
                        ৩. তাহলে du = 2x dx, v = e^x
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.userMessage}>
                  <div className={styles.messageContent}>
                    হ্যাঁ, দয়া করে সম্পূর্ণ সমাধানটি দেখান!
                  </div>
                </div>
              </div>

              <div className={styles.chatInput}>
                <input
                  type="text"
                  placeholder="এখানে আপনার প্রশ্ন লিখুন..."
                  className={styles.inputField}
                />
                <button className={styles.sendBtn}>📤</button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>
            AI সন্দেহ সমাধানকারীর বৈশিষ্ট্য
          </h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3 className={styles.featureTitle}>তাৎক্ষণিক সমাধান</h3>
              <p className={styles.featureDesc}>
                বিস্তারিত ধাপে ধাপে ব্যাখ্যা সহ আপনার প্রশ্নের তাৎক্ষণিক উত্তর
                পান
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📚</div>
              <h3 className={styles.featureTitle}>বহু-বিষয়ক সহায়তা</h3>
              <p className={styles.featureDesc}>
                গণিত, পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান - সব প্রধান বিষয়ের
                প্রশ্নের উত্তর দেয় AI
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔍</div>
              <h3 className={styles.featureTitle}>ধারণা স্পষ্টীকরণ</h3>
              <p className={styles.featureDesc}>
                শক্তিশালী ভিত্তিগত বোঝাপড়া তৈরি করতে মূল ধারণাগুলির গভীর
                ব্যাখ্যা
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📸</div>
              <h3 className={styles.featureTitle}>ছবি চিনতে পারে</h3>
              <p className={styles.featureDesc}>
                সমস্যার ছবি আপলোড করুন এবং সমাধান পান - হাতে লেখা প্রশ্নের সাথেও
                কাজ করে
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌐</div>
              <h3 className={styles.featureTitle}>একাধিক ভাষা</h3>
              <p className={styles.featureDesc}>
                বাংলা বা ইংরেজিতে প্রশ্ন করুন এবং আপনার পছন্দের ভাষায় ব্যাখ্যা
                পান
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📝</div>
              <h3 className={styles.featureTitle}>সমাধানের ইতিহাস</h3>
              <p className={styles.featureDesc}>
                আপনার সমাধান করা সব সন্দেহ ট্র্যাক রাখুন এবং রিভিশনের জন্য
                যেকোনো সময় দেখুন
              </p>
            </div>
          </div>
        </section>

        {/* Solution Types Section */}
        <section className={styles.solutionTypesSection}>
          <h2 className={styles.sectionTitle}>
            আমরা যে ধরনের সমাধান প্রদান করি
          </h2>
          <div className={styles.solutionTypesGrid}>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>🔢</div>
              <h3 className={styles.solutionTitle}>গাণিতিক সমস্যা</h3>
              <div className={styles.solutionExamples}>
                <span>ক্যালকুলাস</span>
                <span>বীজগণিত</span>
                <span>জ্যামিতি</span>
                <span>পরিসংখ্যান</span>
              </div>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>⚗️</div>
              <h3 className={styles.solutionTitle}>রসায়ন প্রশ্ন</h3>
              <div className={styles.solutionExamples}>
                <span>জৈব রসায়ন</span>
                <span>রাসায়নিক সমীকরণ</span>
                <span>পর্যায় সারণি</span>
                <span>স্টয়কিওমেট্রি</span>
              </div>
            </div>

            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>🔬</div>
              <h3 className={styles.solutionTitle}>পদার্থবিজ্ঞান ধারণা</h3>
              <div className={styles.solutionExamples}>
                <span>বলবিজ্ঞান</span>
                <span>তড়িৎচুম্বকত্ব</span>
                <span>তাপগতিবিজ্ঞান</span>
                <span>আলোকবিজ্ঞান</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.howItWorksSection}>
          <h2 className={styles.sectionTitle}>
            AI সন্দেহ সমাধানকারী কীভাবে কাজ করে
          </h2>
          <div className={styles.stepsContainer}>
            <div className={`${styles.step} ${styles.stepsize}`}>
              <div className={styles.stepNumber}>১</div>
              <div className={styles.stepContent}>
                <h4>আপনার প্রশ্ন করুন</h4>
                <p>আপনার সন্দেহ টাইপ করুন বা সমস্যার ছবি আপলোড করুন</p>
              </div>
            </div>

            <div className={styles.stepArrow}>→</div>

            <div className={`${styles.step} ${styles.stepsize}`}>
              <div className={styles.stepNumber}>২</div>
              <div className={styles.stepContent}>
                <h4>AI বিশ্লেষণ</h4>
                <p>উন্নত AI আপনার প্রশ্ন বিশ্লেষণ করে এবং বুঝে নেয়</p>
              </div>
            </div>

            <div className={styles.stepArrow}>→</div>

            <div className={`${styles.step} ${styles.stepsize}`}>
              <div className={styles.stepNumber}>৩</div>
              <div className={styles.stepContent}>
                <h4>ধাপে ধাপে সমাধান</h4>
                <p>একাধিক সমাধান পদ্ধতি সহ বিস্তারিত ব্যাখ্যা পান</p>
              </div>
            </div>

            <div className={styles.stepArrow}>→</div>

            <div className={`${styles.step} ${styles.stepsize}`}>
              <div className={styles.stepNumber}>৪</div>
              <div className={styles.stepContent}>
                <h4>ফলো-আপ সাহায্য</h4>
                <p>গভীর বোঝার জন্য স্পষ্টীকরণমূলক প্রশ্ন করুন</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Interaction */}
        <section className={styles.sampleSection}>
          <h2 className={styles.sectionTitle}>নমুনা সন্দেহ সমাধান</h2>
          <div className={styles.sampleChat}>
            <div className={styles.sampleQuestion}>
              <div className={styles.questionHeader}>
                <span className={styles.studentIcon}>👤</span>
                <span>শিক্ষার্থীর প্রশ্ন</span>
              </div>
              <div className={styles.questionText}>
                "আমি বুঝতে পারছি না কেন sin(x) এর ডেরিভেটিভ cos(x) হয়। আপনি কি
                ধারণাটি ব্যাখ্যা করে প্রমাণ করতে পারেন?"
              </div>
            </div>

            <div className={styles.sampleAnswer}>
              <div className={styles.answerHeader}>
                <span className={styles.aiIcon}>🤖</span>
                <span>AI সমাধান</span>
              </div>
              <div className={styles.answerText}>
                <p>
                  <strong>
                    চমৎকার প্রশ্ন! আমি এটি ধাপে ধাপে ব্যাখ্যা এবং প্রমাণ করি:
                  </strong>
                </p>

                <div className={styles.answerSection}>
                  <h5>🔍 ধারণা বোঝা:</h5>
                  <p>
                    ডেরিভেটিভ পরিবর্তনের হার প্রতিনিধিত্ব করে। sin(x) এর জন্য,
                    আমরা সাইন মানটি x এর সাপেক্ষে কত দ্রুত পরিবর্তিত হয় তা
                    খুঁজে বের করছি।
                  </p>
                </div>

                <div className={styles.answerSection}>
                  <h5>📐 জ্যামিতিক ধারণা:</h5>
                  <p>
                    যদি আপনি একক বৃত্ত কল্পনা করেন, sin(x) y-স্থানাঙ্ক দেয়। এই
                    y-স্থানাঙ্কের পরিবর্তনের হার x-স্থানাঙ্কের সাথে সম্পর্কিত,
                    যা cos(x)।
                  </p>
                </div>

                <div className={styles.answerSection}>
                  <h5>🧮 গাণিতিক প্রমাণ:</h5>
                  <p>ডেরিভেটিভের লিমিট সংজ্ঞা ব্যবহার করে...</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>
            কেন AI সন্দেহ সমাধানকারী বেছে নেবেন
          </h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>২৪/৭ উপলব্ধ - শিক্ষকদের জন্য অপেক্ষা নেই</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>অতিরিক্ত খরচ ছাড়াই সীমাহীন প্রশ্ন</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>ভাল বোঝার জন্য একাধিক সমাধান পদ্ধতি</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>ধৈর্যশীল ব্যাখ্যা - অবাধে ফলো-আপ প্রশ্ন করুন</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>শুধু উত্তর নয়, ধারণাগত বোঝাপড়া তৈরি করে</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>হাতে লেখা এবং টাইপ করা উভয় সমস্যার সাথে কাজ করে</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIDoubtSolver;
