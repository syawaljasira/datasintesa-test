import Image from "next/image";
import React from "react";
import styles from "../styles/Navbar.module.scss";
import NationalityList from "../utils";

const Navbar = ({ nation, setNation, setCurrentPage }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image
          src="/datasintesa.png"
          alt="Datasintesa Logo"
          layout="fill"
          objectFit="contain"
          className={styles.logo}
          priority
        />
      </div>
      <div className={styles.nation}>
        <select
          name="nationality"
          id="nationality"
          onChange={(e) => {
            setNation(e.target.value);
            setCurrentPage(1);
          }}
          value={nation}
        >
          <option value="ALL">ALL</option>
          {NationalityList.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
