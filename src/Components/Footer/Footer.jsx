import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeart,
  FaBrain,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "আমাদের সম্পর্কে", path: "/about" },
    { name: "বৈশিষ্ট্যসমূহ", path: "/features" },
    { name: "যোগাযোগ", path: "/contact" },
  ];

  const quickLinks = [{ name: "হোম", path: "/" }];

  const socialLinks = [
    { icon: FaFacebookF, name: "Facebook", url: "#", color: "#1877f2" },
    { icon: FaTwitter, name: "Twitter", url: "#", color: "#1da1f2" },
    { icon: FaLinkedinIn, name: "LinkedIn", url: "#", color: "#0077b5" },
  ];

  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className={styles.footerMain}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Company Info */}
            <div className={styles.footerSection}>
              <div className={styles.logoSection}>
                <img
                  src="/logo.png"
                  alt="SydrixAI Logo"
                  className={styles.footerLogo}
                />
                <span className={styles.logoText}>SydrixAI</span>
              </div>
              <p className={styles.companyDescription}>
                বাংলাদেশের প্রথম AI-চালিত শিক্ষা প্ল্যাটফর্ম। আমরা প্রতিটি
                শিক্ষার্থীর জন্য ব্যক্তিগতকৃত শিক্ষার পরিবেশ তৈরি করি।
              </p>

              {/* Social Links */}
              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>আমাদের ফলো করুন</h4>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className={styles.socialLink}
                        style={{ "--social-color": social.color }}
                        aria-label={social.name}
                      >
                        <IconComponent />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>কোম্পানি</h3>
              <ul className={styles.linkList}>
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.path} className={styles.footerLink}>
                      <FaArrowRight className={styles.linkIcon} />
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>দ্রুত লিংক</h3>
              <ul className={styles.linkList}>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.path} className={styles.footerLink}>
                      <FaArrowRight className={styles.linkIcon} />
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.footerSection}>
              <h3 className={styles.sectionTitle}>যোগাযোগ</h3>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <span>sydrixai@gmail.com</span>
                </div>
                <div className={styles.contactItem}>
                  <FaPhone className={styles.contactIcon} />
                  <span>+8801796313920</span>
                </div>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <span>রাজবাড়ী, ঢাকা, বাংলাদেশ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>
                © {currentYear} SydrixAI. সমস্ত অধিকার সংরক্ষিত।
                <FaHeart className={styles.heartIcon} />
                দিয়ে বাংলাদেশে তৈরি।
              </p>
            </div>

            {/* Tech Stack Icons */}
            <div className={styles.techStack}>
              <div className={styles.techIcon} title="AI Powered">
                <FaBrain />
              </div>
              <div className={styles.techIcon} title="Education Focus">
                <FaGraduationCap />
              </div>
              <div className={styles.techIcon} title="Innovation">
                <FaRocket />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className={styles.backgroundPattern}>
        <div className={styles.patternOverlay}></div>
      </div>
    </footer>
  );
};

export default Footer;
