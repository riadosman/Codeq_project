"use client";
import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Hero() {
  const [orangeBg, setOrangeBg] = useState(true);
  return (
    <main className={styles.main}>
      <div
        className="d-flex flex-column align-items-center gap-3 px-3"
        style={{
          maxWidth: "763px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <p
          className="fw-semibold text-center fs-5 lh-base"
          style={{ color: "#BE4423" }}
        >
          مرحبًا بك في CODEQ – حيث نلتقي بالإبداع والتقنية
        </p>
        <h1
          className="fw-medium text-center"
          style={{
            fontSize: "58px",
            lineHeight: "76px",
          }}
        >
          معًا نصنع مستقبل التقنية بأفكار جديدة وحلول مبتكرة
        </h1>
        <p
          className="fw-semibold text-center fs-6"
          style={{
            lineHeight: "24px",
            color: "rgba(173, 173, 173, 1)",
          }}
        >
          في CODEQ، نجمع بين شغف الإبداع وقوة التكنولوجيا لتقديم حلول مبتكرة
          تُحدث فرقًا حقيقيًا. نقدم خدمات متكاملة تشمل تطوير البرمجيات، تصميم
          واجهات المستخدم وتجربة المستخدم، والاستشارات التقنية،
        </p>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "54px",
            borderRadius: "42px",
            width: "100%",
            maxWidth: "256px",
            backgroundColor: "black",
            border: "1px solid #1e1d1d",
            margin: "0 auto",
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              gap: "10px",
              backgroundColor: "#1e1d1d",
              width: "98%",
              height: "46px",
              borderRadius: "42px",
            }}
          >
            <button
              style={{
                transition: "all 0.3s ease-in-out",
                backgroundColor: orangeBg ? "transparent" : "#EF552C",
                width: "114px",
                height: "34px",
                borderRadius: "42px",
                border: "none",
                color: "white",
                fontSize: "16px",
                lineHeight: "24px",
              }}
              onClick={() => setOrangeBg(false)}
            >
              قدم طلبك
            </button>
            <Link
              href="/"
              onClick={() => setOrangeBg(true)}
              className="d-flex align-items-center"
              style={{
                transition: "all 0.3s ease-in-out",
                margin: "0",
                gap: "5px",
                fontSize: "16px",
                lineHeight: "24px",
                color: "white",
                padding: "4px 8px",
                borderRadius: "42px",
                backgroundColor: orangeBg ? "#EF552C" : "transparent",
                textDecoration: "none",
              }}
            >
              انضم كمتطوع
              <Image
                src="/images/leftArrow.svg"
                alt="arrow"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
