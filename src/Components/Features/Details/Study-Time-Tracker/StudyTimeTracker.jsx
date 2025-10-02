import React from "react";
import { Link } from "react-router-dom";
import styles from "./StudyTimeTracker.module.css";

const StudyTimeTracker = () => {
  return (
    <div className={styles.studyTracker}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>⏱️</span>
              Study Time Tracker
            </div>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>পড়াশোনার সময়</span>
              <span className={styles.titleSub}>ট্র্যাক করুন</span>
            </h1>
            <p className={styles.description}>
              AI দিয়ে আপনার পড়াশোনার সময় ট্র্যাক করুন, productive habits
              বানান এবং study goals অর্জন করুন। বিস্তারিত analytics এবং
              personalized insights পান।
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
            <div className={styles.timerInterface}>
              <div className={styles.timerDisplay}>
                <div className={styles.timeCircle}>
                  <div className={styles.timeText}>02:45:32</div>
                  <div className={styles.timeLabel}>আজকের অধ্যয়ন</div>
                </div>
                <div className={styles.progressRing}>
                  <svg className={styles.progressSvg} viewBox="0 0 180 180">
                    <circle
                      className={styles.progressBackground}
                      cx="90"
                      cy="90"
                      r="85"
                    />
                    <circle
                      className={styles.progressBar}
                      cx="90"
                      cy="90"
                      r="85"
                    />
                  </svg>
                </div>
              </div>

              <div className={styles.timerControls}>
                <button className={styles.controlBtn}>
                  <span>⏸️</span>
                </button>
                <button className={styles.controlBtn}>
                  <span>⏹️</span>
                </button>
                <button className={styles.controlBtn}>
                  <span>🔄</span>
                </button>
              </div>

              <div className={styles.quickStats}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>৭</div>
                  <div className={styles.statLabel}>দিনের ধারাবাহিকতা</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>১৮ঘ</div>
                  <div className={styles.statLabel}>এই সপ্তাহ</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>৯২%</div>
                  <div className={styles.statLabel}>লক্ষ্য অগ্রগতি</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Smart Time Tracking Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⏰</div>
              <h3 className={styles.featureTitle}>Automatic Time Detection</h3>
              <p className={styles.featureDesc}>
                AI automatically detects when you're studying and tracks time
                without manual input
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3 className={styles.featureTitle}>Detailed Analytics</h3>
              <p className={styles.featureDesc}>
                Comprehensive reports showing your study patterns, peak hours,
                and productivity trends
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3 className={styles.featureTitle}>Goal Setting & Tracking</h3>
              <p className={styles.featureDesc}>
                Set daily, weekly, monthly study goals and track your progress
                with visual indicators
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3 className={styles.featureTitle}>Focus Sessions</h3>
              <p className={styles.featureDesc}>
                Pomodoro technique integration with customizable break reminders
                and session tracking
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3 className={styles.featureTitle}>Cross-Device Sync</h3>
              <p className={styles.featureDesc}>
                Track study time across all your devices with real-time
                synchronization
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏆</div>
              <h3 className={styles.featureTitle}>Achievement System</h3>
              <p className={styles.featureDesc}>
                Earn badges, maintain streaks, and unlock achievements to stay
                motivated
              </p>
            </div>
          </div>
        </section>

        {/* Study Habits Section */}
        <section className={styles.habitsSection}>
          <h2 className={styles.sectionTitle}>Build Better Study Habits</h2>
          <div className={styles.habitsGrid}>
            <div className={styles.habitCard}>
              <div className={styles.habitIcon}>📈</div>
              <h3 className={styles.habitTitle}>Study Pattern Analysis</h3>
              <p className={styles.habitDesc}>
                AI analyzes your study patterns to identify your most productive
                hours and suggests optimal study schedules
              </p>
              <div className={styles.habitFeatures}>
                <span className={styles.featureTag}>Peak Hour Detection</span>
                <span className={styles.featureTag}>Pattern Recognition</span>
                <span className={styles.featureTag}>Schedule Optimization</span>
              </div>
            </div>

            <div className={styles.habitCard}>
              <div className={styles.habitIcon}>🔥</div>
              <h3 className={styles.habitTitle}>Streak Maintenance</h3>
              <p className={styles.habitDesc}>
                Keep track of your study streaks and get reminders to maintain
                consistency in your learning journey
              </p>
              <div className={styles.habitFeatures}>
                <span className={styles.featureTag}>Daily Streaks</span>
                <span className={styles.featureTag}>Smart Reminders</span>
                <span className={styles.featureTag}>Motivation Boost</span>
              </div>
            </div>

            <div className={styles.habitCard}>
              <div className={styles.habitIcon}>⚖️</div>
              <h3 className={styles.habitTitle}>Work-Life Balance</h3>
              <p className={styles.habitDesc}>
                Monitor study-break ratios and ensure healthy study habits with
                burnout prevention alerts
              </p>
              <div className={styles.habitFeatures}>
                <span className={styles.featureTag}>Break Reminders</span>
                <span className={styles.featureTag}>Burnout Prevention</span>
                <span className={styles.featureTag}>Balance Tracking</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>Key Benefits</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>Increase study productivity by 40% on average</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>Build consistent study habits that last</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>Get detailed insights into your learning patterns</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>Stay motivated with achievements and streaks</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>Prevent burnout with smart break reminders</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>Track progress across multiple subjects</span>
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className={styles.dashboardSection}>
          <h2 className={styles.sectionTitle}>Study Dashboard Preview</h2>
          <div className={styles.dashboardPreview}>
            <div className={styles.dashboardMain}>
              <div className={styles.dashboardHeader}>
                <h3>Today's Study Overview</h3>
                <div className={styles.todayDate}>December 15, 2024</div>
              </div>

              <div className={styles.dashboardContent}>
                <div className={styles.timeDisplay}>
                  <div className={styles.totalTime}>
                    <div className={styles.timeNumber}>4h 23m</div>
                    <div className={styles.timeLabel}>Total Study Time</div>
                  </div>
                  <div className={styles.goalProgress}>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill}></div>
                    </div>
                    <div className={styles.progressText}>87% of daily goal</div>
                  </div>
                </div>

                <div className={styles.subjectBreakdown}>
                  <h4>Subject Breakdown</h4>
                  <div className={styles.subjectList}>
                    <div className={styles.subjectItem}>
                      <span className={styles.subjectName}>Mathematics</span>
                      <span className={styles.subjectTime}>1h 45m</span>
                    </div>
                    <div className={styles.subjectItem}>
                      <span className={styles.subjectName}>Physics</span>
                      <span className={styles.subjectTime}>1h 20m</span>
                    </div>
                    <div className={styles.subjectItem}>
                      <span className={styles.subjectName}>Chemistry</span>
                      <span className={styles.subjectTime}>1h 18m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.statsPanel}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>🔥</div>
                <div className={styles.statInfo}>
                  <div className={styles.statNumber}>12</div>
                  <div className={styles.statTitle}>Day Streak</div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>📊</div>
                <div className={styles.statInfo}>
                  <div className={styles.statNumber}>28h</div>
                  <div className={styles.statTitle}>This Week</div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>🎯</div>
                <div className={styles.statInfo}>
                  <div className={styles.statNumber}>94%</div>
                  <div className={styles.statTitle}>Goal Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudyTimeTracker;
