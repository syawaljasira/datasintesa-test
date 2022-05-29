import React from "react";
import Image from "next/image";
import moment from "moment";
import styles from "../styles/Card.module.scss";

const Card = ({ user, setUserDetail, toggleDetail }) => {
  let age = moment(user.dob.date, "YYYYMMDD").fromNow().slice(0, 3);
  let datebirth = moment(user.dob.date).format("DD/MM/YYYY HH:mm:ss");

  return (
    <div className={styles.card}>
      <span className={styles.card__img}>
        <Image
          className={styles.avatar}
          src={user.picture.large}
          alt="User Avatar"
          width={250}
          height={250}
          layout="responsive"
        />
      </span>
      <div className={styles.card__desc}>
        <div className={styles.card__desc__item}>
          <span className={styles.key}>Nama:</span>
          <span
            className={styles.value}
          >{`${user.name.first} ${user.name.last}`}</span>
        </div>
        <div className={styles.card__desc__item}>
          <span className={styles.key}>Email:</span>
          <span className={styles.value}>{user.email}</span>
        </div>
        <div className={styles.card__desc__item}>
          <span className={styles.key}>Kota:</span>
          <span className={styles.value}>{user.location.city}</span>
        </div>
        <div className={styles.card__desc__item}>
          <span className={styles.key}>Tgl Lahir:</span>
          <span className={styles.value}>{datebirth}</span>
        </div>
        <div className={styles.card__desc__item}>
          <span className={styles.key}>Umur:</span>
          <span className={styles.value}>{age}</span>
        </div>
      </div>
      <button
        onClick={() => {
          setUserDetail(user);
          toggleDetail();
        }}
        className={styles.card__btn}
      >
        Lihat Detail
      </button>
    </div>
  );
};

export default Card;
