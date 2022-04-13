import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./modules/2048/pages/MainPage";
import QuizTrivia from "./modules/quiz-trivia/pages/QuizTrivia";

const Router = () => {
  let element = useRoutes([
    // {
    //   path: "app",
    //   element: <MainLayout />,
    //   children: [
    // { path: "/", element: <MainLayout /> },
    //   ],
    // },

    { path: "/", element: <MainLayout /> },
    { path: "/quiz", element: <QuizTrivia /> },
    { path: "/2048-animated", element: <MainPage /> },
  ]);
  return element;
};

export default Router;
