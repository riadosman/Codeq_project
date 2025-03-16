"use client";
import Image from "next/image";
import styles from "./about.module.css";
const AboutUs = () => {
  return (
    <div className="about-us" style={{ margin: "100px" }}>
      <h1 className="text-center">انضم إلينا وكن جزءًا من فريقنا !</h1>
      <p style={{ width: "922px", margin: "20px auto", textAlign: "center" }}>
        نسعى دائمًا لتوسيع فريقنا وضم أشخاص مبدعين وطموحين يشاركونا رؤيتنا في
        تطوير مشاريع متميزة. سواء كنت ترغب في التطوع أو البحث عن فرصة عمل، فهناك
        دائمًا مكان لك معنا!
      </p>
      <div className="d-flex justify-content-center align-items-center gap-5 mt-5">
        <Image
          src="/images/aboutUs.png"
          alt="about-us"
          width={546}
          height={546}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "start",
            }}
          >
            <div className={styles.blog_stroke}>01</div>
            <div>
              <p style={{ fontWeight: "500", fontSize: "20px" }}>فرص التطوع</p>
              <p
                style={{
                  color: "rgba(173, 173, 173, 1)",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "151%",
                }}
              >
                إذا كنت ترغب في تقديم يد العون والمساهمة في مشاريعنا المختلفة،
                يمكنك الانضمام إلينا كمتطوع. نحن نرحب بالأشخاص المتحمسين الذين
                لديهم الرغبة في إحداث تأثير إيجابي.
              </p>
            </div>
          </div>
          <hr
            style={{
              height: "2px",
              border: "none",
              margin: "20px 0",
              background:
                "linear-gradient(270deg, rgba(0, 0, 0, 0) -1.82%, #EF552C 59.71%, rgba(0, 0, 0, 0) 111.4%)",
            }}
          />
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "start",
            }}
          >
            <div className={styles.blog_stroke}>02</div>
            <div>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "20px",
                  color: "rgba(239, 85, 44, 1)",
                }}
              >
                الفرص الوظيفية المتاحة
              </p>
              <p
                style={{
                  color: "rgba(173, 173, 173, 1)",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "151%",
                }}
              >
                نبحث عن مطورين، مصممين، ومبدعين لديهم الشغف للعمل معنا. إذا كنت
                تمتلك المهارات المناسبة وترغب في أن تكون جزءًا من فريقنا، فهذه
                فرصتك!
              </p>
            </div>
          </div>
          <hr
            style={{
              height: "2px",
              margin: "20px 0",
              border: "none",
              background:
                "linear-gradient(270deg, rgba(0, 0, 0, 0) -1.82%, #EF552C 59.71%, rgba(0, 0, 0, 0) 111.4%)",
            }}
          />
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "start",
            }}
          >
            <div className={styles.blog_stroke}>03</div>
            <div>
              <p style={{ fontWeight: "500", fontSize: "20px" }}>
                المهارات المطلوبة
              </p>
              <p style={{ color: "rgba(173, 173, 173, 1)", fontWeight: "400" }}>
                نبحث عن أشخاص لديهم مهارات في التصميم الجرافيكي وتجربة المستخدم،
                البرمجة وتطوير المواقع، التسويق الرقمي وصناعة المحتوى، بالإضافة
                إلى إدارة المشاريع والعمل الجماعي.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
