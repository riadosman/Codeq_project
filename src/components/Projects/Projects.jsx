import Image from "next/image";

export default function Projects() {
  return (
    <div className="container position-relative mt-5 text-center">
      {/* Background Decoration */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: -1,
          maxWidth: "264px",
        }}
      >
        <Image
          src="/images/blog_star_bg.png"
          alt="blog_star_bg"
          width={264}
          height={846}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/* Title */}
      <h1
        className="text-center"
        style={{
          color: "#BE4423",
          fontSize: "2.5rem",
          fontWeight: "500",
          lineHeight: "1.6",
        }}
      >
        مشاريعنا الرقمية المبتكرة
      </h1>
      <hr className="border-0 d-none d-md-block my-4" />

      {/* Description */}
      <p className="fw-semibold" style={{ fontSize: "1rem" }}>
        نحن في CODEQ نؤمن بأن الإبداع والتقنية يسيران جنبًا إلى جنب...
      </p>

      {/* Grid of Projects */}
      <div className="row g-4 mt-4">
        {/* Card 1 */}
        <div className="col-lg-6">
          <ProjectCard
            bg="/images/webdesign_project.png"
            title="مشاريع تطوير المواقع"
            desc="من الفكرة إلى الإطلاق، نقدم حلولًا متكاملة..."
          />
        </div>

        {/* Card 2 */}
        <div className="col-lg-6">
          <ProjectCard
            bg="/images/visualId_project.png"
            title="مشاريع الهوية البصرية"
            desc="نؤمن بأن الهوية البصرية هي جوهر أي علامة تجارية..."
          />
        </div>

        {/* Card 3 - Full Width */}
        <div className="col-12">
          <ProjectCard
            bg="/images/programming_project.png"
            title="مشاريع البرمجيات"
            desc="نطور مواقع إلكترونية متميزة تلبي احتياجات المستخدمين..."
          />
        </div>
      </div>
    </div>
  );
}

// 🔧 Reusable Card Component
function ProjectCard({ bg, title, desc }) {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1.5px solid #252E3D",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        minHeight: "360px",
        color: "#fff",
        textAlign: "right",
      }}
    >
      <h2 style={{ fontSize: "1.5rem", color: "#EE552C" }}>{title}</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>{desc}</p>
      <button
        style={{
          background: "transparent",
          color: "white",
          border: "none",
          fontSize: "1rem",
          fontWeight: "500",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        عرض جميع المشاريع
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.73836 12.7432L0.229535 7.0942C0.146067 7.00861 0.0868056 6.91589 0.0517494 6.81603C0.0172497 6.71617 0 6.60918 0 6.49506C0 6.38094 0.0172497 6.27395 0.0517494 6.17409C0.0868056 6.07424 0.146067 5.98151 0.229535 5.89592L5.73836 0.246898C5.89139 0.0899803 6.08253 0.00781295 6.31178 0.000395038C6.54159 -0.00645227 6.73997 0.0757151 6.9069 0.246898C7.07384 0.403815 7.16092 0.599819 7.16815 0.83491C7.17483 1.07057 7.0947 1.27399 6.92777 1.44518L2.83788 5.63915H12.1653C12.4018 5.63915 12.6002 5.72103 12.7604 5.8848C12.9201 6.04913 13 6.25255 13 6.49506C13 6.73757 12.9201 6.94071 12.7604 7.10447C12.6002 7.26881 12.4018 7.35097 12.1653 7.35097H2.83788L6.92777 11.5449C7.08079 11.7019 7.16092 11.9016 7.16815 12.1441C7.17483 12.3866 7.0947 12.5863 6.92777 12.7432C6.77475 12.9144 6.57999 13 6.3435 13C6.10701 13 5.9053 12.9144 5.73836 12.7432Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
