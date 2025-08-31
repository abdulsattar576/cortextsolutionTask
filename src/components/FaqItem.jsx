// FaqItem.jsx
import { ArrowDown, ArrowUp } from "lucide-react";
import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container">
      <div className="faq-item" onClick={() => setToggle(!toggle)}>
        <p className="question">{question}</p>
        {toggle ? <ArrowUp /> : <ArrowDown />}
      </div>
      {toggle && <p className="answer">{answer}</p>}
    </div>
  );
};

export default FaqItem;
