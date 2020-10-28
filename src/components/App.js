import "../Stying/App.css";
import React, { useState, useEffect } from "react";
import valid from "card-validator";
import CreditCard from "./CreditCard";
import Header from "./Header";

function App() {
  const [cardtype, setCardtype] = useState("CREDIT CARD");
  const [name, setName] = useState("");
  const [cardnum, setCardnum] = useState("");
  const [expdate, setExpdate] = useState("");
  const [cvc, setCvc] = useState("");

  useEffect(() => {});

  const onchangeNum = (e) => {
    const newnum = e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    setCardnum(newnum);
  };

  const onchangeName = (e) => {
    const newname = e.target.value.toUpperCase();
    setName(newname);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let numberValidation = valid.number(cardnum);
    let nameValidation = valid.cardholderName(name);
    let expValidation = valid.expirationDate(expdate);
    let cvcValidation = valid.cvv(cvc);

    if (!numberValidation.isPotentiallyValid) {
      alert("please check your card number");
      return;
    }

    if (!nameValidation.isPotentiallyValid) {
      alert("please enter your name");
      return;
    }
    if (!expValidation.isPotentiallyValid) {
      alert("please check your exp date");
      return;
    }
    if (!cvcValidation.isPotentiallyValid) {
      alert("please check your cvc number");
      return;
    }

    setCardtype(numberValidation.card.niceType);
    console.log(name, cardnum, expdate, cvc);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="card-container">
        <form className="formcontainer">
          <div className="form-detes name">
            <p className="form-title">Name: </p>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => onchangeName(e)}
            />
          </div>
          <div className="form-detes cardnum">
            <p className="form-title">Card Number: </p>
            <input
              name="cardnum"
              type="tel"
              value={cardnum}
              onChange={(e) => onchangeNum(e)}
            />
          </div>
          <div className="form-detes expdate">
            <p className="form-title">Expiry Date </p>
            <input
              name="expdate"
              type="tel"
              value={expdate}
              onChange={(e) => setExpdate(e.target.value)}
            />
          </div>
          <div className="form-detes cvc">
            <p className="form-title">CVC Number </p>
            <input
              name="cvc"
              type="tel"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>

          <button type="submit" onClick={(e) => onSubmit(e)}>
            ENTER
          </button>
        </form>

        <CreditCard
          cardtype={cardtype}
          name={name}
          cardnum={cardnum}
          expdate={expdate}
          cvc={cvc}
        />
      </div>
    </div>
  );
}

export default App;
