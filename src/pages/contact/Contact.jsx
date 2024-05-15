import React, { useState } from "react";
import "./Contact.css";

const bot_token = "5999169255:AAH54VNMOYp-myaWZcewvHtbt78LAZUv6Ms";
const chat_id = "-4208163629";
// const user_id = "5760837257";

let initialState = {
  fname: "",
  lname: "",
};
const Contact = () => {
  let [data, setData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    let text = "Buyurtma%0A";

    text += `Ismi: ${data.fname} %0A`;
    text += `Ismi: ${data.lname} %0A`;

    let url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${text}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  };
  return (
    <div>
      <div className="contact">
        <div className="container">
          <h2 className="contact-title">Contact</h2>
          <form className="contact-form" onSubmit={handleSubmit} action="">
            <input
              value={data.fname}
              onChange={(e) =>
                setData((p) => ({ ...p, fname: e.target.value }))
              }
              type="text"
              placeholder="FirstName"
            />
            <input
              value={data.lname}
              onChange={(e) =>
                setData((p) => ({ ...p, lname: e.target.value }))
              }
              type="text"
              placeholder="LastName"
            />
            <button>Buy now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
