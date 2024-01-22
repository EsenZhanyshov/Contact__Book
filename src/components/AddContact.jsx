import React, { useContext, useState } from "react";
import { contactsContext } from "../context/ContactContextProvider";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const { addContacts } = useContext(contactsContext);
  const [name, setName] = useState("");
  const [surname, setSername] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (!name.trim() || !surname.trim() || !phone.trim() || !img.trim()) {
      return;
    }
    let newObj = {
      contactName: name,
      contactSurname: surname,
      contactPhone: phone,
      contactImg: img,
    };
    addContacts(newObj);
    setName("");
    setSername("");
    setPhone("");
    setImg("");
    navigate("/contacts");
  };
  return (
    <div className="wrapper">
      <form className="form">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Введите имя"
          className="inputs"
        />
        <input
          value={surname}
          onChange={(e) => setSername(e.target.value)}
          type="text"
          placeholder="Введите фамилию"
          className="inputs"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          placeholder="Введите номер"
          className="inputs"
        />
        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          type="text"
          placeholder="Введите ссылку на картинку"
          className="inputs"
        />
        <button onClick={handleClick}>ADD</button>
      </form>
    </div>
  );
};

export default AddContact;
