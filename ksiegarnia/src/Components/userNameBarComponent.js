import React from "react";
import { useSelector } from "react-redux";

import "./userNameBarComponent.css";

const UserNameBarComponent = () => {
  const isLogin = useSelector((state) => state.login.email);

  return (
    <div className="userNameContainer">
      {isLogin ? <div className="userName">Witaj: {isLogin}</div> : <div></div>}
    </div>
  );
};

export default UserNameBarComponent;
