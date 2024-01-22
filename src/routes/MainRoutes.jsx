import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import Contacts from "../components/Contacts";
import EditContact from "../components/EditContact";
import AddContact from "../components/AddContact";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};

export default MainRoutes;
