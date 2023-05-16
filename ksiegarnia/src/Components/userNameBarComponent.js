import React from "react";
import { useSelector } from "react-redux";

import styles from "./userNameBarComponent.module.css";

const UserNameBarComponent = () => {
  const isLogin = useSelector((state) => state.login.email);

  return (
    <div className={styles.userNameContainer}>
      {isLogin ? (
        <div className={styles.userName}>Witaj: {isLogin}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default UserNameBarComponent;
