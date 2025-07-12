"use client";
import { useState } from "react";

export default function Gallery() {
  const [activeButton, setActiveButton] = useState("الجميع");

  const buttons = ["الجميع", "معارض", "ورش عمل", "مقاطع فيديو"];
  const images = Array(8).fill("/images/blog.png");

  return (
    <div className="container mt-5 text-center px-3">
      <h1 className="text-center">لحظات توثق مسيرتنا</h1>
      <p className="fw-semibold mt-3">
        استمتع بمشاهدة أبرز اللحظات من فعالياتنا السابقة، ورش العمل، والمعارض
        التي شاركنا بها، حيث يلتقي الإبداع والشغف في كل صورة ومقطع فيديو.
      </p>

      {/* Filter Buttons */}
      <div
        className="d-flex flex-wrap justify-content-center align-items-center gap-2 my-4 px-2"
        style={{
          backgroundColor: "#000",
          borderRadius: "42px",
          padding: "6px",
          border: "1px solid #1e1d1d",
          maxWidth: "100%",
        }}
      >
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => setActiveButton(button)}
            style={{
              backgroundColor:
                activeButton === button ? "#BE4423" : "transparent",
              borderRadius: "42px",
              border: "none",
              color: "white",
              fontSize: "16px",
              lineHeight: "24px",
              transition: "background-color 0.3s ease",
              cursor: "pointer",
              padding: "4px 16px",
              whiteSpace: "nowrap",
            }}
          >
            {button}
          </button>
        ))}
      </div>

      {/* Responsive Gallery Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
