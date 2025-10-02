import React, { useState } from "react";
import styles from "./Blog.module.css";
import {
  FaCalendarAlt,
  FaUser,
  FaClock,
  FaTag,
  FaSearch,
  FaArrowRight,
  FaBookOpen,
  FaChartLine,
  FaGraduationCap,
  FaBrain,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "সব পোস্ট", icon: FaBookOpen },
    { id: "ai-education", name: "AI শিক্ষা", icon: FaBrain },
    { id: "study-tips", name: "পড়াশোনার টিপস", icon: FaGraduationCap },
    { id: "technology", name: "প্রযুক্তি", icon: FaRocket },
    { id: "success-stories", name: "সফলতার গল্প", icon: FaChartLine },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "AI কিভাবে আধুনিক শিক্ষায় বিপ্লব আনছে",
      excerpt:
        "কৃত্রিম বুদ্ধিমত্তা শিক্ষাক্ষেত্রে যেভাবে নতুন দিগন্ত উন্মোচন করছে এবং শিক্ষার্থীদের শেখার অভিজ্ঞতা উন্নত করছে তার বিস্তারিত আলোচনা।",
      content:
        "আধুনিক যুগে কৃত্রিম বুদ্ধিমত্তা বা AI শিক্ষাক্ষেত্রে এক অভূতপূর্ব পরিবর্তন এনেছে। এই প্রযুক্তি শিক্ষার্থীদের ব্যক্তিগতকৃত শিক্ষার সুযোগ প্রদান করছে...",
      author: "ড. রাহুল আহমেদ",
      date: "২৮ সেপ্টেম্বর, ২০২৫",
      readTime: "৮ মিনিট",
      category: "ai-education",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&crop=center",
      featured: true,
      tags: ["AI", "শিক্ষা", "প্রযুক্তি"],
    },
    {
      id: 2,
      title: "কার্যকর পড়াশোনার ১০টি কৌশল",
      excerpt:
        "পড়াশোনায় সাফল্য অর্জনের জন্য বৈজ্ঞানিকভাবে প্রমাণিত কৌশলগুলো যা আপনার শেখার দক্ষতা বৃদ্ধি করবে।",
      content:
        "কার্যকর পড়াশোনার জন্য প্রয়োজন সঠিক কৌশল এবং পরিকল্পনা। এই আর্টিকেলে আমরা আলোচনা করব দশটি প্রমাণিত কৌশল...",
      author: "সারা খান",
      date: "২৫ সেপ্টেম্বর, ২০২৫",
      readTime: "৬ মিনিট",
      category: "study-tips",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center",
      featured: false,
      tags: ["পড়াশোনা", "টিপস", "দক্ষতা"],
    },
    {
      id: 3,
      title: "ভবিষ্যতের শিক্ষা: ভার্চুয়াল রিয়েলিটি এবং AR",
      excerpt:
        "ভার্চুয়াল রিয়েলিটি এবং অগমেন্টেড রিয়েলিটি কিভাবে শিক্ষার ভবিষ্যৎ পরিবর্তন করবে এবং নতুন শেখার অভিজ্ঞতা সৃষ্টি করবে।",
      content:
        "ভার্চুয়াল রিয়েলিটি (VR) এবং অগমেন্টেড রিয়েলিটি (AR) প্রযুক্তি শিক্ষাক্ষেত্রে নতুন সম্ভাবনার দ্বার উন্মোচন করেছে...",
      author: "প্রফেসর আমিন উল্লাহ",
      date: "২২ সেপ্টেম্বর, ২০২৫",
      readTime: "১০ মিনিট",
      category: "technology",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&crop=center",
      featured: false,
      tags: ["VR", "AR", "ভবিষ্যৎ শিক্ষা"],
    },
    {
      id: 4,
      title: "SydrixAI ব্যবহার করে সাফল্যের গল্প",
      excerpt:
        "আমাদের প্ল্যাটফর্ম ব্যবহার করে যেভাবে শিক্ষার্থীরা তাদের লক্ষ্য অর্জন করেছে - তাদের অনুপ্রেরণামূলক গল্প।",
      content:
        "SydrixAI প্ল্যাটফর্ম ব্যবহার করে অনেক শিক্ষার্থী তাদের একাডেমিক লক্ষ্য অর্জনে সফল হয়েছে। এখানে কিছু উল্লেখযোগ্য সাফল্যের গল্প...",
      author: "টিম SydrixAI",
      date: "২০ সেপ্টেম্বর, ২০২৫",
      readTime: "৫ মিনিট",
      category: "success-stories",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop&crop=center",
      featured: true,
      tags: ["সাফল্য", "SydrixAI", "শিক্ষার্থী"],
    },
    {
      id: 5,
      title: "মাইক্রো-লার্নিং: ছোট ছোট পদক্ষেপে বড় সাফল্য",
      excerpt:
        "মাইক্রো-লার্নিং পদ্ধতি কিভাবে আপনার শেখার গতি বৃদ্ধি করে এবং দীর্ঘমেয়াদী স্মৃতি গঠনে সহায়তা করে।",
      content:
        "মাইক্রো-লার্নিং একটি কার্যকর শিক্ষা পদ্ধতি যা ছোট, সহজে হজমযোগ্য অংশে শেখার উপাদান বিভক্ত করে...",
      author: "ড. ফাতিমা হাসান",
      date: "১৮ সেপ্টেম্বর, ২০২৫",
      readTime: "৭ মিনিট",
      category: "study-tips",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center",
      featured: false,
      tags: ["মাইক্রো-লার্নিং", "শিক্ষা পদ্ধতি"],
    },
    {
      id: 6,
      title: "ব্লকচেইন প্রযুক্তি এবং শিক্ষা সার্টিফিকেশন",
      excerpt:
        "ব্লকচেইন প্রযুক্তি কিভাবে শিক্ষাগত সনদ যাচাইকরণে বিপ্লব আনছে এবং জাল সার্টিফিকেট প্রতিরোধ করছে।",
      content:
        "ব্লকচেইন প্রযুক্তি শিক্ষাক্ষেত্রে স্বচ্ছতা এবং নির্ভরযোগ্যতা নিয়ে এসেছে। বিশেষ করে সার্টিফিকেশন ক্ষেত্রে...",
      author: "ইঞ্জিনিয়ার মাহবুব রহমান",
      date: "১৫ সেপ্টেম্বর, ২০২৫",
      readTime: "৯ মিনিট",
      category: "technology",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop&crop=center",
      featured: false,
      tags: ["ব্লকচেইন", "সার্টিফিকেশন", "প্রযুক্তি"],
    },
    {
      id: 7,
      title: "পমোডোরো টেকনিক: সময় ব্যবস্থাপনার কার্যকর উপায়",
      excerpt:
        "পমোডোরো টেকনিক ব্যবহার করে কিভাবে পড়াশোনায় মনোযোগ বৃদ্ধি করবেন এবং কার্যকরভাবে সময় ব্যবহার করবেন।",
      content:
        "পমোডোরো টেকনিক একটি সময় ব্যবস্থাপনা পদ্ধতি যা ২৫ মিনিটের কাজ এবং ৫ মিনিটের বিরতির চক্রে ভিত্তি করে তৈরি...",
      author: "ড. সাদিয়া রহমান",
      date: "১২ সেপ্টেম্বর, ২০২৫",
      readTime: "৫ মিনিট",
      category: "study-tips",
      image:
        "https://images.unsplash.com/photo-1586281010691-3d8394b3f12f?w=400&h=250&fit=crop&crop=center",
      featured: false,
      tags: ["পমোডোরো", "সময় ব্যবস্থাপনা", "মনোযোগ"],
    },
    {
      id: 8,
      title: "স্মার্ট নোট টেকিং: কর্নেল নোট সিস্টেম",
      excerpt:
        "কর্নেল নোট টেকিং সিস্টেম ব্যবহার করে কিভাবে আরও কার্যকর নোট তৈরি করবেন এবং পরীক্ষার প্রস্তুতি নিবেন।",
      content:
        "কর্নেল নোট সিস্টেম হল একটি কাঠামোবদ্ধ নোট টেকিং পদ্ধতি যা কর্নেল বিশ্ববিদ্যালয়ে উদ্ভাবিত হয়েছিল...",
      author: "প্রফেসর আলিম উদ্দিন",
      date: "১০ সেপ্টেম্বর, ২০২৫",
      readTime: "৬ মিনিট",
      category: "study-tips",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop&crop=center",
      featured: true,
      tags: ["নোট টেকিং", "কর্নেল সিস্টেম", "পড়াশোনা"],
    },
    {
      id: 9,
      title: "অ্যাক্টিভ রিকল: মনে রাখার বিজ্ঞান",
      excerpt:
        "অ্যাক্টিভ রিকল কৌশল ব্যবহার করে কিভাবে দীর্ঘমেয়াদী স্মৃতি তৈরি করবেন এবং পরীক্ষায় ভাল ফলাফল অর্জন করবেন।",
      content:
        "অ্যাক্টিভ রিকল একটি শক্তিশালী শেখার কৌশল যা প্যাসিভ পড়ার চেয়ে অনেক বেশি কার্যকর। এই পদ্ধতিতে...",
      author: "ড. নাসির আহমেদ",
      date: "৮ সেপ্টেম্বর, ২০২৫",
      readTime: "৭ মিনিট",
      category: "study-tips",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center",
      featured: false,
      tags: ["অ্যাক্টিভ রিকল", "স্মৃতি", "শেখার কৌশল"],
    },
    {
      id: 10,
      title: "স্পেসড রিপিটিশন: বিজ্ঞানসম্মত পুনরাবৃত্তি",
      excerpt:
        "স্পেসড রিপিটিশন অ্যালগরিদম ব্যবহার করে কিভাবে কম সময়ে বেশি তথ্য মনে রাখবেন এবং ভুলে যাওয়া রোধ করবেন।",
      content:
        "স্পেসড রিপিটিশন একটি বৈজ্ঞানিক পদ্ধতি যা ভুলে যাওয়ার বক্ররেখার উপর ভিত্তি করে তৈরি। এই পদ্ধতি...",
      author: "ড. রুবিনা খাতুন",
      date: "৫ সেপ্টেম্বর, ২০২৫",
      readTime: "৮ মিনিট",
      category: "study-tips",
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=250&fit=crop&crop=center",
      featured: false,
      tags: ["স্পেসড রিপিটিশন", "পুনরাবৃত্তি", "দীর্ঘমেয়াদী স্মৃতি"],
    },
    {
      id: 11,
      title: "মাইন্ড ম্যাপিং: ভিজুয়াল লার্নিং টেকনিক",
      excerpt:
        "মাইন্ড ম্যাপ তৈরি করে কিভাবে জটিল বিষয়গুলো সহজভাবে বুঝবেন এবং ভিজুয়াল উপায়ে তথ্য সংগঠিত করবেন।",
      content:
        "মাইন্ড ম্যাপিং একটি গ্রাফিক্যাল উপায় যা কেন্দ্রীয় ধারণা থেকে শাখা-প্রশাখার মতো তথ্য বিস্তার করে...",
      author: "প্রফেসর তানিয়া ইসলাম",
      date: "৩ সেপ্টেম্বর, ২০২৫",
      readTime: "৬ মিনিট",
      category: "study-tips",
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop&crop=center",
      featured: false,
      tags: ["মাইন্ড ম্যাপ", "ভিজুয়াল লার্নিং", "সংগঠন"],
    },
    {
      id: 12,
      title: "ইন্টারলিভিং: বিভিন্ন বিষয়ের মিশ্রণ কৌশল",
      excerpt:
        "ইন্টারলিভিং পদ্ধতি ব্যবহার করে একসাথে একাধিক বিষয় পড়ার কার্যকর উপায় এবং এর বৈজ্ঞানিক ভিত্তি।",
      content:
        "ইন্টারলিভিং হল একটি শেখার কৌশল যেখানে একই সেশনে বিভিন্ন ধরনের সমস্যা বা বিষয় মিশিয়ে অনুশীলন করা হয়...",
      author: "ড. কামরুল হাসান",
      date: "১ সেপ্টেম্বর, ২০২৫",
      readTime: "৯ মিনিট",
      category: "study-tips",
      image:
        "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=250&fit=crop&crop=center",
      featured: true,
      tags: ["ইন্টারলিভিং", "মাল্টি-টাস্কিং", "কার্যকর অনুশীলন"],
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className={styles.blog}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <FaBookOpen className={styles.badgeIcon} />
            <span>SydrixAI Blog</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleMain}>শিক্ষা ও প্রযুক্তির</span>
            <span className={styles.titleSub}>সর্বশেষ তথ্য</span>
          </h1>

          <p className={styles.description}>
            AI-চালিত শিক্ষা, আধুনিক প্রযুক্তি এবং কার্যকর পড়াশোনার কৌশল নিয়ে
            আমাদের বিশেষজ্ঞদের লেখা এবং গবেষণামূলক আর্টিকেল পড়ুন।
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className={styles.filterSection}>
          <div className={styles.searchBox}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="আর্টিকেল খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.categories}>
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  className={`${styles.categoryBtn} ${
                    selectedCategory === category.id ? styles.active : ""
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <IconComponent className={styles.categoryIcon} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Posts Section */}
        {selectedCategory === "all" && (
          <div className={styles.featuredSection}>
            <h2 className={styles.sectionTitle}>ফিচার্ড আর্টিকেল</h2>
            <div className={styles.featuredGrid}>
              {featuredPosts.map((post) => (
                <div key={post.id} className={styles.featuredCard}>
                  <div className={styles.featuredImage}>
                    <img src={post.image} alt={post.title} />
                    <div className={styles.featuredBadge}>ফিচার্ড</div>
                  </div>
                  <div className={styles.featuredContent}>
                    <div className={styles.postMeta}>
                      <span className={styles.metaItem}>
                        <FaUser className={styles.metaIcon} />
                        {post.author}
                      </span>
                      <span className={styles.metaItem}>
                        <FaCalendarAlt className={styles.metaIcon} />
                        {post.date}
                      </span>
                      <span className={styles.metaItem}>
                        <FaClock className={styles.metaIcon} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className={styles.featuredTitle}>{post.title}</h3>
                    <p className={styles.featuredExcerpt}>{post.excerpt}</p>
                    <div className={styles.postTags}>
                      {post.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>
                          <FaTag className={styles.tagIcon} />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <NavLink
                      to={`/blog/${post.id}`}
                      className={styles.readMoreBtn}
                    >
                      বিস্তারিত পড়ুন
                      <FaArrowRight className={styles.readMoreIcon} />
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Blog Posts Grid */}
          <div className={styles.postsGrid}>
            <h2 className={styles.sectionTitle}>
              {selectedCategory === "all"
                ? "সব আর্টিকেল"
                : categories.find((c) => c.id === selectedCategory)?.name}
              <span className={styles.postCount}>({filteredPosts.length})</span>
            </h2>

            <div className={styles.postsContainer}>
              {filteredPosts.map((post) => (
                <article key={post.id} className={styles.postCard}>
                  <div className={styles.postImage}>
                    <img src={post.image} alt={post.title} />
                    {post.featured && (
                      <div className={styles.featuredLabel}>ফিচার্ড</div>
                    )}
                  </div>
                  <div className={styles.postContent}>
                    <div className={styles.postMeta}>
                      <span className={styles.metaItem}>
                        <FaUser className={styles.metaIcon} />
                        {post.author}
                      </span>
                      <span className={styles.metaItem}>
                        <FaClock className={styles.metaIcon} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postExcerpt}>{post.excerpt}</p>
                    <div className={styles.postFooter}>
                      <div className={styles.postTags}>
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className={styles.tag}>
                            <FaTag className={styles.tagIcon} />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <NavLink
                        to={`/blog/${post.id}`}
                        className={styles.readMore}
                      >
                        পড়ুন
                        <FaArrowRight className={styles.readMoreIcon} />
                      </NavLink>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className={styles.sidebar}>
            {/* Recent Posts */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>সাম্প্রতিক পোস্ট</h3>
              <div className={styles.recentPosts}>
                {recentPosts.map((post) => (
                  <div key={post.id} className={styles.recentPost}>
                    <div className={styles.recentImage}>
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className={styles.recentContent}>
                      <h4 className={styles.recentTitle}>{post.title}</h4>
                      <div className={styles.recentMeta}>
                        <FaCalendarAlt className={styles.metaIcon} />
                        {post.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>নিউজলেটার</h3>
              <p className={styles.newsletterText}>
                নতুন আর্টিকেল এবং শিক্ষামূলক কন্টেন্ট সবার আগে পান
              </p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="আপনার ইমেইল"
                  className={styles.newsletterInput}
                />
                <button className={styles.newsletterBtn}>সাবস্ক্রাইব</button>
              </div>
            </div>

            {/* Popular Tags */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>জনপ্রিয় ট্যাগ</h3>
              <div className={styles.popularTags}>
                {[
                  "AI",
                  "শিক্ষা",
                  "প্রযুক্তি",
                  "পড়াশোনা",
                  "টিপস",
                  "সাফল্য",
                  "ভবিষ্যৎ",
                  "দক্ষতা",
                ].map((tag, index) => (
                  <span key={index} className={styles.popularTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className={styles.backgroundPattern}>
        <div className={styles.patternOverlay}></div>
      </div>
    </section>
  );
};

export default Blog;
