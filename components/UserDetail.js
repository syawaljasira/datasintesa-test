import React from "react";
import styles from "../styles/UserDetail.module.scss";
import { HiX } from "react-icons/hi";
import Image from "next/image";
import moment from "moment";

const UserDetail = ({ user, showDetail, toggleDetail }) => {
  if (user === null) {
    return (
      <div
        className={
          showDetail
            ? styles.userDetail__container + " " + styles.userDetail__show
            : styles.userDetail__container + " " + styles.userDetail__hidden
        }
      >
        <div className={styles.userDetail}>
          <div className={styles.userDetail__header}>
            <span>User Detail</span>
            <HiX onClick={toggleDetail} className={styles.icon_close} />
          </div>
          <div className={styles.userDetail__body}>
            <p>No Data</p>
          </div>
        </div>
      </div>
    );
  }

  let age = moment(user.dob.date, "YYYYMMDD").fromNow().slice(0, 3);
  let datebirth = moment(user.dob.date).format("DD/MM/YYYY HH:mm:ss");

  return (
    <div
      className={
        showDetail
          ? styles.userDetail__container + " " + styles.userDetail__show
          : styles.userDetail__container + " " + styles.userDetail__hidden
      }
    >
      <div className={styles.userDetail}>
        <div className={styles.userDetail__header}>
          <span>User Detail</span>
          <HiX onClick={toggleDetail} className={styles.icon_close} />
        </div>
        <div className={styles.userDetail__body}>
          <div className={styles.detail__image}>
            <Image
              className={styles.avatar}
              src={user.picture.large}
              alt="User Avatar"
              width={250}
              height={250}
              layout="responsive"
            />
          </div>
          <div className={styles.detail__info}>
            <div className={styles.detail__item}>
              <span className={styles.key}>Nama:</span>
              <span
                className={styles.value}
              >{`${user.name.first} ${user.name.last}`}</span>
            </div>
            <div className={styles.detail__item}>
              <span className={styles.key}>Email:</span>
              <span className={styles.value}>{user.email}</span>
            </div>
            <div className={styles.detail__item}>
              <span className={styles.key}>Kota:</span>
              <span className={styles.value}>{user.location.city}</span>
            </div>
            <div className={styles.detail__item}>
              <span className={styles.key}>Tanggal Lahir:</span>
              <span className={styles.value}>{datebirth}</span>
            </div>
            <div className={styles.detail__item}>
              <span className={styles.key}>Umur:</span>
              <span className={styles.value}>{age}</span>
            </div>
            <div className={styles.detail__item}>
              <span className={styles.key}>Phone:</span>
              <span className={styles.value}>{user.phone}</span>
            </div>
            <div className={styles.detail__item}>
              <span className={styles.key}>Alamat:</span>
              <address
                className={styles.value}
              >{`${user.location.street.name} No.${user.location.street.number}, ${user.location.city}, ${user.location.state}, ${user.location.country} ${user.location.postcode}`}</address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
