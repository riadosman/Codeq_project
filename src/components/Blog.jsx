import Image from "next/image";
import calender from "../../public/images/calender.png";
import eye from "../../public/images/eye.png";
import styles from "./styles.module.css";

export default function Blog({ image, date, views, title, desc }) {
  return (
    <div className={`${styles.blog} w-100`}>
      <Image
        src={image}
        alt="blog"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      <div className="px-3 py-2" style={{ height: "200px" }}>
        <div className="d-flex justify-content-between flex-wrap text-muted small mt-2">
          <p className="d-flex align-items-center gap-2 mb-1 text-white">
            <Image src={calender} alt="calendar" width={16} height={16} />
            {date}
          </p>
          <p className="d-flex align-items-center gap-2 mb-1 text-white">
            <Image src={eye} alt="views" width={16} height={16} />
            {views}
          </p>
        </div>

        <h5 className="fw-semibold mb-2" style={{ fontSize: "1.2rem" }}>
          {title}
        </h5>
        <p className="mb-3" style={{ fontSize: "0.95rem", lineHeight: "1.4" }}>
          {desc}
        </p>

        <button
          className={`${styles.blog_btn} d-flex align-items-center gap-2`}
          style={{
            border: "1.5px solid #EF552C",
            borderRadius: "25px",
            padding: "8px 20px",
            color: "#fff",
            fontSize: "0.9rem",
          }}
        >
          تابع المقال
          <Image
            src="/images/blog_btn.png"
            alt="blog_btn"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
