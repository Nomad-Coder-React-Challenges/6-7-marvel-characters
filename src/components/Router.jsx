import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/details";
import HomePage from "../pages/home";

const Router = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<DetailsPage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
