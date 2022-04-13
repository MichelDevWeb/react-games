import React from "react";
import BoardView from "../components/Board";
import "../assets/scss/main.scss";
import "../assets/scss/styles.scss";

const MainPage = () => {
  return (
    <div className="container_2048">
      <BoardView />
    </div>
  );
};

export default MainPage;
