import styles from "./joinus.module.css";
export default function JoinUs() {
  return (
    <div className="container">
      <div
        style={{
          backgroundImage: "url('/images/join_us.png')",
          backgroundPosition: "top",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginTop: "80px",
          height: "331px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "20px", color: "#EF552C", fontWeight: "600" }}>
          شاركنا أفكارك وكن جزءًا من فريقنا
        </p>
        <p
          className={styles.text_gradient}
          style={{
            fontSize: "40px",
            fontWeight: "500",
            lineHeight: "140%",
            width: "956px",
          }}
        >
          إذا كنت تمتلك فكرة مشروع و تريد أن تعمل عليها مع فريق متخصص ، فلا
          تتردد في التواصل معنا
        </p>
        <button className={styles.button}>شارك مشروعك معنا هنا!</button>
      </div>
    </div>
  );
}
