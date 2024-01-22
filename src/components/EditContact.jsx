import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contactsContext } from "../context/ContactContextProvider";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ename, seteName] = useState("");
  const [esurname, setesurName] = useState("");
  const [eimg, seteImg] = useState("");
  const [ephone, setePhone] = useState("");
  const { editGet, contact, editContact } = useContext(contactsContext);

  useEffect(() => {
    const fetchData = async () => {
      await editGet(id);
      seteName(contact.contactName);
      setesurName(contact.contactSurname);
      setePhone(contact.contactPhone);
      seteImg(contact.contactImg);
    };

    fetchData();
  }, [id, eimg]);

  const handleClick2 = async (e) => {
    e.preventDefault();
    const obj = {
      contactName: ename,
      contactSurname: esurname,
      contactPhone: ephone,
      contactImg: eimg,
    };
    await editContact(id, obj);
    seteName("");
    setesurName("");
    setePhone("");
    seteImg("");
    navigate("/contacts");
  };

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleClick2}>
        <input
          value={ename}
          onChange={(e) => seteName(e.target.value)}
          type="text"
          placeholder="Введите имя"
          className="inputs"
        />
        <input
          value={esurname}
          onChange={(e) => setesurName(e.target.value)}
          type="text"
          placeholder="Введите фамилию"
          className="inputs"
        />
        <input
          value={ephone}
          onChange={(e) => setePhone(e.target.value)}
          type="tel"
          placeholder="Введите номер"
          className="inputs"
        />
        <input
          value={eimg}
          onChange={(e) => seteImg(e.target.value)}
          type="text"
          placeholder="Введите ссылку на картинку"
          className="inputs"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditContact;
