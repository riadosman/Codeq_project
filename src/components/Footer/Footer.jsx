import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import styles from "./footer.module.css"; // Import the CSS module

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* Logo and Social Icons */}
        <div className={styles.footerLogoSection}>
          <Image src={logo} alt="logo" width={133} height={33} />
          <p className={styles.footerDescription}>
            في CODEQ – حيث نلتقي بالإبداع والتقنية
          </p>
          <div className={styles.socialLinks}>
            <Link href="https://www.facebook.com/codeq.team1?mibextid=wwXIfr&rdid=KV8ihv1z6BMeeKto#">
              <div className={styles.socialIcon}>
                <Image
                  src="/images/icons/facebook.png"
                  alt="facebook"
                  width={18}
                  height={18}
                />
              </div>
            </Link>
            <Link href="github.com">
              <div className={styles.socialIcon}>
                <Image
                  src="/images/icons/github.png"
                  alt="github"
                  width={18}
                  height={18}
                />
              </div>
            </Link>
            <Link href="https://www.instagram.com/codeq.team?igsh=MXVvYjU3eDJleXp3ZA%3D%3D">
              <div className={styles.socialIcon}>
                <Image
                  src="/images/icons/instagram.png"
                  alt="instagram"
                  width={18}
                  height={18}
                />
              </div>
            </Link>
            <Link href="linkedin.com">
              <div className={styles.socialIcon}>
                <Image
                  src="/images/icons/linkedin.png"
                  alt="linkedin"
                  width={18}
                  height={18}
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Important Links */}
        <div className={styles.footerLinks}>
          <p className={styles.footerHeading}>روابط مهمة</p>
          <ul>
            <li>
              <Link href="#about">من نحن</Link>
            </li>
            <li>
              <Link href="#services">خدماتنا</Link>
            </li>
            <li>
              <Link href="#projects">المشاريع</Link>
            </li>
            <li>
              <Link href="#gallery">المعرض</Link>
            </li>
            <li>
              <Link href="#blogs">المدونة</Link>
            </li>
          </ul>
        </div>

        {/* Additional Links */}
        <div className={styles.footerLinks}>
          <p className={styles.footerHeading}>روابط مهمة</p>
          <ul>
            <li>
              <Link href="#privacy">سياسة الخصوصية</Link>
            </li>
            <li>
              <Link href="#terms">سياسة الاستخدام</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className={styles.footerContact}>
          <p className={styles.footerHeading}>للتواصل</p>
          <ul>
            <li>
              <Link href="https://www.google.com/maps">
                شارع الاستقلال، مبنى 45، الطابق 2، حي بي أوغلو، إسطنبول، تركيا
              </Link>
            </li>
            <li>
              <Link href="mailto:test@gmail.com">test@gmail.com</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
