"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav
      dir="rtl"
      className={`${styles.header_background} navbar navbar-expand-lg fixed-top mt-3`}
      style={{
        width: "90%",
        borderRadius: "72px",
        padding: "5px 20px",
        margin: "0 auto",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image src="/images/logo.png" alt="logo" width={112} height={25} />
        </Link>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0 gap-lg-2 gap-1">
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.nav_link} active text-danger`}
                href="/"
              >
                الصفحة الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.nav_link} text-white`}
                href="#about"
              >
                من نحن
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.nav_link} text-white`}
                href="#services"
              >
                خدماتنا
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.nav_link} text-white`}
                href="#projects"
              >
                المشاريع
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.nav_link} text-white`}
                href="#gallery"
              >
                المعرض
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.nav_link} text-white`}
                href="#blogs"
              >
                المدونة
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles.nav_link} text-white`}
                href="#join_us"
              >
                انضم إلينا
              </Link>
            </li>
          </ul>
          <div className="d-flex mt-3 mt-lg-0">
            <button
              className={`btn btn-outline-light text-white ${styles.contact_btn}`}
              style={{
                borderRadius: "20px",
                fontSize: "16px",
                fontWeight: "400",
                padding: "6px 24px",
              }}
              type="button"
            >
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
