import React, { useContext } from "react";
import { contactsContext } from "../context/ContactContextProvider";
import { Link } from "react-router-dom";

const CardContact = ({
  contactName,
  contactSurname,
  contactPhone,
  contactImg,
  id,
}) => {
  const { deleteContact } = useContext(contactsContext);
  return (
    <div className="card">
      <img src={contactImg} alt="#" />
      <h3>{contactName}</h3>
      <h3>{contactSurname}</h3>
      <h3>{contactPhone}</h3>
      <button type="submit" onClick={() => deleteContact(id)}>
        delete
      </button>
      <Link to={`/edit/${id}`}>
        <button>edit</button>
      </Link>
    </div>
  );
};

export default CardContact;
