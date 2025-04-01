"use client";
import Image from "next/image";
import styles from "./about.module.css";

const AboutUs = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center">انضم إلينا وكن جزءًا من فريقنا !</h1>
      <p className="text-center mx-auto" style={{ maxWidth: "922px" }}>
        نسعى دائمًا لتوسيع فريقنا وضم أشخاص مبدعين وطموحين يشاركونا رؤيتنا في
        تطوير مشاريع متميزة. سواء كنت ترغب في التطوع أو البحث عن فرصة عمل، فهناك
        دائمًا مكان لك معنا!
      </p>

      <div className="row align-items-center mt-5">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center">
          <Image
            src="/images/aboutUs.png"
            alt="about-us"
            width={546}
            height={546}
            className="img-fluid"
          />
        </div>

        {/* Text Content Section */}
        <div className="col-12 col-md-6 d-flex flex-column gap-4 mt-4 mt-md-0">
          {/* Volunteering Opportunity */}
          <div className="d-flex gap-3 align-items-start flex-column flex-md-row">
            <div className={styles.blog_stroke}>01</div>
            <div>
              <p className="fw-bold fs-5">فرص التطوع</p>
              <p className="text-secondary">
                إذا كنت ترغب في تقديم يد العون والمساهمة في مشاريعنا المختلفة،
                يمكنك الانضمام إلينا كمتطوع. نحن نرحب بالأشخاص المتحمسين الذين
                لديهم الرغبة في إحداث تأثير إيجابي.
              </p>
            </div>
          </div>
          <hr
            className="border-0 d-none d-md-block"
            style={{
              height: "2px",
              background:
                "linear-gradient(270deg, rgba(0,0,0,0) -1.82%, #EF552C 59.71%, rgba(0,0,0,0) 111.4%)",
            }}
          />

          {/* Job Opportunities */}
          <div className="d-flex gap-3 align-items-start flex-column flex-md-row">
            <div
              className={`${styles.blog_stroke} ${styles.second_blog_stroke}`}
            >
              02
            </div>
            <div>
              <p
                className="fw-bold fs-5"
                style={{ color: "rgba(239, 85, 44, 1)" }}
              >
                الفرص الوظيفية المتاحة
              </p>
              <p className="text-secondary">
                نبحث عن مطورين، مصممين، ومبدعين لديهم الشغف للعمل معنا. إذا كنت
                تمتلك المهارات المناسبة وترغب في أن تكون جزءًا من فريقنا، فهذه
                فرصتك!
              </p>
            </div>
          </div>
          <hr
            className="border-0 d-none d-md-block"
            style={{
              height: "2px",
              background:
                "linear-gradient(270deg, rgba(0,0,0,0) -1.82%, #EF552C 59.71%, rgba(0,0,0,0) 111.4%)",
            }}
          />

          {/* Required Skills */}
          <div className="d-flex gap-3 align-items-start flex-column flex-md-row">
            <div className={styles.blog_stroke}>03</div>
            <div>
              <p className="fw-bold fs-5">المهارات المطلوبة</p>
              <p className="text-secondary">
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
