import React from "react";
import { Link } from "react-router-dom";
import styles from "./AINotesMaker.module.css";

const AINotesMaker = () => {
  return (
    <div className={styles.aiNotesMaker}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>📝</span>
              AI Notes Maker
            </div>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>AI দিয়ে</span>
              <span className={styles.titleSub}>স্মার্ট নোটস</span>
            </h1>
            <p className={styles.description}>
              Advanced AI technology দিয়ে automatic note generation, smart
              summarization এবং interactive study materials তৈরি করুন। Lectures,
              textbooks এবং videos থেকে perfect notes বানান।
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
            <div className={styles.notesInterface}>
              <div className={styles.notesHeader}>
                <div className={styles.documentTitle}>
                  অধ্যায় ৫: তাপগতিবিদ্যা
                </div>
                <div className={styles.aiIndicator}>
                  <span className={styles.aiIcon}>🤖</span>
                  AI উৎপন্ন
                </div>
              </div>

              <div className={styles.notesContent}>
                <div className={styles.noteSection}>
                  <h4>🔥 মূল ধারণা</h4>
                  <ul className={styles.conceptList}>
                    <li>তাপগতিবিদ্যার প্রথম সূত্র</li>
                    <li>তাপ ইঞ্জিনের দক্ষতা</li>
                    <li>এনট্রপি ও দ্বিতীয় সূত্র</li>
                  </ul>
                </div>

                <div className={styles.noteSection}>
                  <h4>📊 গুরুত্বপূর্ণ সূত্র</h4>
                  <div className={styles.formulaBox}>
                    <div className={styles.formula}>ΔU = Q - W</div>
                    <div className={styles.formula}>η = 1 - T₂/T₁</div>
                  </div>
                </div>

                <div className={styles.noteSection}>
                  <h4>💡 দ্রুত সারাংশ</h4>
                  <p className={styles.summary}>
                    শক্তি সৃষ্টি বা ধ্বংস করা যায় না, শুধুমাত্র স্থানান্তর করা
                    যায়। তাপ ইঞ্জিন তাপীয় শক্তিকে কাজে রূপান্তরিত করে যার
                    দক্ষতা কার্নট চক্র দ্বারা সীমিত...
                  </p>
                </div>
              </div>

              <div className={styles.notesTools}>
                <button className={styles.toolBtn}>🎨 হাইলাইট</button>
                <button className={styles.toolBtn}>📌 বুকমার্ক</button>
                <button className={styles.toolBtn}>💾 এক্সপোর্ট</button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>AI নোটস তৈরির ফিচারসমূহ</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3 className={styles.featureTitle}>অটো নোট তৈরি</h3>
              <p className={styles.featureDesc}>
                AI স্বয়ংক্রিয়ভাবে লেকচার, PDF এবং ভিডিও কন্টেন্ট থেকে বিস্তৃত
                নোট তৈরি করে
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📋</div>
              <h3 className={styles.featureTitle}>স্মার্ট সারসংক্ষেপ</h3>
              <p className={styles.featureDesc}>
                দীর্ঘ অধ্যয়ন উপকরণ থেকে মূল বিষয়গুলো বের করে সংক্ষিপ্ত সারাংশ
                তৈরি করুন
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎨</div>
              <h3 className={styles.featureTitle}>ভিজ্যুয়াল সংগঠন</h3>
              <p className={styles.featureDesc}>
                বোঝাপড়া বৃদ্ধির জন্য মাইন্ড ম্যাপ, ফ্লোচার্ট এবং ভিজ্যুয়াল
                ডায়াগ্রাম তৈরি করুন
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔗</div>
              <h3 className={styles.featureTitle}>ধারণা সংযোগ</h3>
              <p className={styles.featureDesc}>
                AI বিভিন্ন বিষয় ও অধ্যায়ে সম্পর্কিত ধারণাগুলো চিহ্নিত করে ও
                সংযুক্ত করে
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3 className={styles.featureTitle}>মাল্টি-ডিভাইস সিঙ্ক</h3>
              <p className={styles.featureDesc}>
                রিয়েল-টাইম সিঙ্ক্রোনাইজেশনের সাথে সব ডিভাইসে আপনার নোট দেখুন ও
                সম্পাদনা করুন
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔍</div>
              <h3 className={styles.featureTitle}>স্মার্ট অনুসন্ধান</h3>
              <p className={styles.featureDesc}>
                AI-চালিত সিমান্টিক অনুসন্ধান ক্ষমতা দিয়ে যেকোনো তথ্য তৎক্ষণাৎ
                খুঁজে পান
              </p>
            </div>
          </div>
        </section>

        {/* Note Types Section */}
        <section className={styles.noteTypesSection}>
          <h2 className={styles.sectionTitle}>AI-উৎপন্ন নোটের ধরন</h2>
          <div className={styles.noteTypesGrid}>
            <div className={styles.noteTypeCard}>
              <div className={styles.noteTypeIcon}>📚</div>
              <h3 className={styles.noteTypeTitle}>লেকচার নোটস</h3>
              <p className={styles.noteTypeDesc}>
                মূল বিষয় চিহ্নিতকরণ সহ লাইভ লেকচারের স্বয়ংক্রিয়
                ট্রান্সক্রিপশন ও সংগঠন
              </p>
              <div className={styles.noteFeatures}>
                <span>রিয়েল-টাইম ট্রান্সক্রিপশন</span>
                <span>মূল পয়েন্ট নিষ্কাশন</span>
                <span>প্রশ্ন তৈরি</span>
              </div>
            </div>

            <div className={styles.noteTypeCard}>
              <div className={styles.noteTypeIcon}>📖</div>
              <h3 className={styles.noteTypeTitle}>পাঠ্যবই সারাংশ</h3>
              <p className={styles.noteTypeDesc}>
                ঘন পাঠ্যবইয়ের অধ্যায়গুলোকে উদাহরণ সহ সংক্ষিপ্ত, সুসংগঠিত
                অধ্যয়ন নোটে রূপান্তর করুন
              </p>
              <div className={styles.noteFeatures}>
                <span>অধ্যায় সারাংশ</span>
                <span>সূত্র নিষ্কাশন</span>
                <span>উদাহরণ সমস্যা</span>
              </div>
            </div>

            <div className={styles.noteTypeCard}>
              <div className={styles.noteTypeIcon}>🎥</div>
              <h3 className={styles.noteTypeTitle}>ভিডিও নোটস</h3>
              <p className={styles.noteTypeDesc}>
                শিক্ষামূলক ভিডিও থেকে মূল তথ্য নিষ্কাশন করে কাঠামোবদ্ধ নোট তৈরি
                করুন
              </p>
              <div className={styles.noteFeatures}>
                <span>ভিডিও ট্রান্সক্রিপশন</span>
                <span>টাইমস্ট্যাম্প লিংক</span>
                <span>ভিজ্যুয়াল নিষ্কাশন</span>
              </div>
            </div>
          </div>
        </section>

        {/* Notes Templates Section */}
        <section className={styles.templatesSection}>
          <h2 className={styles.sectionTitle}>স্মার্ট নোট টেমপ্লেট</h2>
          <div className={styles.templatesGrid}>
            <div className={styles.templateCard}>
              <div className={styles.templatePreview}>
                <div className={styles.templateHeader}>কর্নেল নোটস</div>
                <div className={styles.templateLayout}>
                  <div className={styles.cueColumn}>সূত্র</div>
                  <div className={styles.notesColumn}>নোটস</div>
                  <div className={styles.summarySection}>সারাংশ</div>
                </div>
              </div>
              <h4>কর্নেল নোট-টেকিং</h4>
              <p>সূত্র, নোট এবং সারাংশ বিভাগ সহ কাঠামোবদ্ধ ফরম্যাট</p>
            </div>

            <div className={styles.templateCard}>
              <div className={styles.templatePreview}>
                <div className={styles.templateHeader}>মাইন্ড ম্যাপ</div>
                <div className={styles.mindMapLayout}>
                  <div className={styles.centralTopic}>কেন্দ্রীয় বিষয়</div>
                  <div className={styles.branches}>
                    <div className={styles.branch}>শাখা ১</div>
                    <div className={styles.branch}>শাখা ২</div>
                    <div className={styles.branch}>শাখা ৩</div>
                  </div>
                </div>
              </div>
              <h4>মাইন্ড ম্যাপিং</h4>
              <p>আন্তঃসংযুক্ত ধারণা সহ ধারণাগুলোর ভিজ্যুয়াল উপস্থাপনা</p>
            </div>

            <div className={styles.templateCard}>
              <div className={styles.templatePreview}>
                <div className={styles.templateHeader}>আউটলাইন ফরম্যাট</div>
                <div className={styles.outlineLayout}>
                  <div className={styles.outlineLevel}>I. প্রধান বিষয়</div>
                  <div className={styles.outlineLevel}> A. উপবিষয়</div>
                  <div className={styles.outlineLevel}> 1. বিস্তারিত</div>
                </div>
              </div>
              <h4>শ্রেণীবদ্ধ আউটলাইন</h4>
              <p>প্রধান বিষয় ও সহায়ক বিস্তারিত সহ সুসংগঠিত কাঠামো</p>
            </div>
          </div>
        </section>

        {/* Collaboration Features */}
        <section className={styles.collaborationSection}>
          <h2 className={styles.sectionTitle}>সহযোগিতা ও শেয়ারিং</h2>
          <div className={styles.collaborationFeatures}>
            <div className={styles.collabCard}>
              <div className={styles.collabIcon}>👥</div>
              <h4>গ্রুপ স্টাডি নোটস</h4>
              <p>সহপাঠীদের সাথে শেয়ার্ড নোট কালেকশনে সহযোগিতা করুন</p>
            </div>

            <div className={styles.collabCard}>
              <div className={styles.collabIcon}>📤</div>
              <h4>সহজ শেয়ারিং</h4>
              <p>লিংক, এক্সপোর্ট বা সরাসরি সহযোগিতার মাধ্যমে নোট শেয়ার করুন</p>
            </div>

            <div className={styles.collabCard}>
              <div className={styles.collabIcon}>💬</div>
              <h4>নোট মন্তব্য</h4>
              <p>নির্দিষ্ট নোট অংশে মন্তব্য ও আলোচনা যোগ করুন</p>
            </div>

            <div className={styles.collabCard}>
              <div className={styles.collabIcon}>🔄</div>
              <h4>সংস্করণ নিয়ন্ত্রণ</h4>
              <p>পরিবর্তন ট্র্যাক করুন এবং নোটের সংস্করণ ইতিহাস বজায় রাখুন</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>AI নোটস মেকার এর সুবিধা</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>নোট-টেকিংয়ে ৫০% সময় সাশ্রয়</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>কখনো গুরুত্বপূর্ণ তথ্য মিস করবেন না</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>সুসংগঠিত ও অনুসন্ধানযোগ্য নোট</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>একাধিক এক্সপোর্ট ফরম্যাট উপলব্ধ</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>ভিজ্যুয়ালের মাধ্যমে উন্নত বোধগম্যতা</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkIcon}>✅</span>
              <span>সহযোগিতামূলক অধ্যয়ন পরিবেশ</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AINotesMaker;
