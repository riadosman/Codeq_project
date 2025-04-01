import Image from "next/image";
import calender from "../../public/images/calender.png";
import eye from "../../public/images/eye.png";

import styles from "./styles.module.css";
export default function Blog({ image, date, views, title, desc }) {
  return (
    <div className={styles.blog}>
      <Image src={image} alt="blog" width={373} height={236} />
      <div className="px-2">
        <div className="d-flex justify-content-between mt-1">
          <p className="d-flex align-items-center gap-2">
            <Image src={calender} alt="calender" width={20} height={20} />
            {date}
          </p>{" "}
          <p className="d-flex align-items-center gap-2">
            <Image src={eye} alt="calender" width={20} height={20} />
            {views}
          </p>
        </div>
        <p style={{ fontWeight: "500", fontSize: "20px", margin: "0" }}>
          {title}
        </p>
        <p style={{ fontSize: "14px", fontWeight: "300" }}>{desc}</p>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            border: "1.5px solid #EF552C",
            borderRadius: "25px",
            padding: "8px 20px",
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
