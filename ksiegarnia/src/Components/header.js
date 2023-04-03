import React from "react";
{import { FaShoppingCart } from "react-icons/fa";

const styles = {
  headerStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100vw",
    height: "7vh",
    backgroundColor: "#777",
    fontFamily: "Changa One, sans-serif",
    color: "white",
  },
  title: {
    fontSize: 33,
    marginLeft: 12,
  },
  menu: {
    display: "flex",
  },
  menuItem: {
    margin: 10,
  },
  shoppingCard: {
    display: "flex",
    alignItems: "center",
  },
  shoppingCardText: {
    margin: 10,
  },
  shoppingIcon: {
    fontSize: 24,
  },
};

const Header = () => {
  return (
    <div style={styles.headerStyle}>
      <div style={styles.title}>KSIAZKOWNIA</div>
      <div style={styles.menu}>
        <div style={styles.menuItem}>SKLEP</div>
        <div style={styles.menuItem}>PROMOCJE</div>
        <div style={styles.menuItem}>LOGOWANIE</div>
      </div>
      <div style={styles.shoppingCard}>
        <div>
          <FaShoppingCart style={styles.shoppingIcon} />
        </div>
        <div style={styles.shoppingCardText}>TWÓJ KOSZYK:</div>
        <div style={styles.shoppingCardText}>0.00 zł</div>
      </div>
    </div>
  );
};

export default Header;
