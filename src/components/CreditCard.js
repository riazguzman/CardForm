const CreditCard = (props) => {
  const { cardtype, cardnum, name, expdate, cvc } = props;

  return (
    <div className="creditcard-container">
      <div className="creditdetails_title">{cardtype}</div>
      <div className="creditdetails_cardnum">{cardnum}</div>
      <div className="creditrow2">
        <p className="credit_title name">NAME: </p>
        <p className="credit_title exp">EXP: </p>
        <p className="credit_title cvc">CVC: </p>
      </div>
      <div className="creditrow3">
        <div className="credit_content name">{name}</div>
        <div className="credit_content expdate">{expdate}</div>
        <div className="credit_content cvc">{cvc}</div>
      </div>
    </div>
  );
};

export default CreditCard;
