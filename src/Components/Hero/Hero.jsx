import React from "react";
import styles from "./Hero.module.css";
import {
  FaPlay,
  FaArrowRight,
  FaGraduationCap,
  FaBrain,
  FaRocket,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Left Content */}
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <FaBrain className={styles.badgeIcon} />
            <span>AI-Powered Learning Platform</span>
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.titleMain}>উন্নত করুন আপনার পড়াশোনা</span>
            <span className={styles.titleSub}>ভিন্ন পদ্ধতিতে</span>
          </h1>

          <p className={styles.heroDescription}>
            SydrixAI একটি বিপ্লবী AI-চালিত শিক্ষা ব্যবস্থা যা আপনার শেখার
            অভিজ্ঞতাকে ব্যক্তিগতকৃত, কার্যকর এবং আনন্দদায়ক করে তোলে। আমাদের
            উন্নত কৃত্রিম বুদ্ধিমত্তা প্রযুক্তির সাথে আপনার শিক্ষার যাত্রা শুরু
            করুন।
          </p>

          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <FaGraduationCap className={styles.statIcon} />
              <div className={styles.statInfo}>
                <span className={styles.statNumber}>10K+</span>
                <span className={styles.statLabel}>শিক্ষার্থী</span>
              </div>
            </div>
            <div className={styles.stat}>
              <FaBrain className={styles.statIcon} />
              <div className={styles.statInfo}>
                <span className={styles.statNumber}>95%</span>
                <span className={styles.statLabel}>সাফল্যের হার</span>
              </div>
            </div>
            <div className={styles.stat}>
              <FaRocket className={styles.statIcon} />
              <div className={styles.statInfo}>
                <span className={styles.statNumber}>3x</span>
                <span className={styles.statLabel}>দ্রুত শেখা</span>
              </div>
            </div>
          </div>

          <div className={styles.heroActions}>
            <NavLink to="/join-waitlist" className={styles.ctaPrimary}>
              <span>Join Waitlist</span>
              <FaArrowRight className={styles.ctaIcon} />
            </NavLink>
          </div>
        </div>

        {/* Right Visual */}
        <div className={styles.heroVisual}>
          <div className={styles.visualContainer}>
            {/* AI Brain Illustration */}
            <div className={styles.aiIllustration}>
              <div className={styles.brainCore}>
                <FaBrain className={styles.brainIcon} />
              </div>

              {/* Floating Elements */}
              <div className={`${styles.floatingElement} ${styles.element1}`}>
                <FaGraduationCap />
              </div>
              <div className={`${styles.floatingElement} ${styles.element2}`}>
                📚
              </div>
              <div className={`${styles.floatingElement} ${styles.element3}`}>
                🤖
              </div>
              <div className={`${styles.floatingElement} ${styles.element4}`}>
                💡
              </div>
              <div className={`${styles.floatingElement} ${styles.element5}`}>
                🎯
              </div>
              <div className={`${styles.floatingElement} ${styles.element6}`}>
                📊
              </div>

              {/* Connection Lines */}
              <div className={styles.connectionLines}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
                <div className={styles.line4}></div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className={styles.backgroundDecoration}>
              <div className={styles.circle1}></div>
              <div className={styles.circle2}></div>
              <div className={styles.circle3}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className={styles.backgroundPattern}>
        <div className={styles.patternGrid}></div>
        <div className={styles.gradientOverlay}></div>
      </div>
    </section>
  );
};

export default Hero;
