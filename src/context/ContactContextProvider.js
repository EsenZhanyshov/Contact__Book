import axios from "axios";
import React, { createContext, useState } from "react";
import { API } from "../helpers/const";

export const contactsContext = createContext();

const ContactContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState("");

  // ! create
  const addContacts = async (contact) => {
    await axios.post(API, contact);
  };

  // ! read
  const getContacts = async () => {
    try {
      const { data } = await axios(API);
      setContacts(data);
      return data;
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  // ! delete
  const deleteContact = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== id)
      );
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  // ! edit
  const editContact = async (id, newTodo) => {
    try {
      await axios.patch(`${API}/${id}`, newTodo);
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === id ? { ...contact, ...newTodo } : contact
        )
      );
    } catch (error) {
      console.error("Error editing contact:", error);
    }
  };

  const editGet = async (id) => {
    try {
      const { data } = await axios(`${API}/${id}`);
      setContact(data);
      return data;
    } catch (error) {
      console.error("Error fetching contact for editing:", error);
    }
  };

  const values = {
    addContacts,
    getContacts,
    contacts,
    deleteContact,
    editGet,
    contact,
    editContact,
  };

  return (
    <contactsContext.Provider value={values}>
      {children}
    </contactsContext.Provider>
  );
};

export default ContactContextProvider;
