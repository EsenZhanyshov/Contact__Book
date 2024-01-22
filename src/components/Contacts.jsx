import React, { useContext, useEffect } from "react";
import CardContact from "./CardContact";
import { contactsContext } from "../context/ContactContextProvider";

const Contacts = () => {
  const { getContacts, contacts } = useContext(contactsContext);
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div className="wrapper">
      <div className="card__container">
        {contacts.map((elem) => (
          <CardContact key={elem.id} {...elem} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
