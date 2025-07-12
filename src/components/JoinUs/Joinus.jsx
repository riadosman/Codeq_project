import styles from "./joinus.module.css";
import Image from "next/image";

export default function JoinUs() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <p className={styles.heading}>شاركنا أفكارك وكن جزءًا من فريقنا</p>
        <p className={styles.text}>
          إذا كنت تمتلك فكرة مشروع و تريد أن تعمل عليها مع فريق متخصص ، فلا
          تتردد في التواصل معنا
        </p>
        <button className={styles.button}>شارك مشروعك معنا هنا!</button>
      </div>
    </div>
  );
}
