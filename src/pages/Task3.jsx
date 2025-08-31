 // FAQList.jsx
import React from "react";
import FaqItem from "../components/FaqItem";

const FAQList = () => {
  const faqlist = [
  {
    question: "What is the difference between props and state in React?",
    answer:
      "Props are used to pass data from a parent to a child component, while state is used to manage data within a component. Props are immutable, while state is mutable.",
  },
  {
    question: "How do you pass data from a parent component to a child component in React?",
    answer:
      "You can pass data from a parent component to a child component using props. Props are a read-only object that the child receives.",
  },
  {
    question: "What are React hooks?",
    answer:
      "Hooks are special functions in React that let you use state and other React features without writing class components. Examples include useState, useEffect, and useContext.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It allows you to write HTML-like syntax directly in JavaScript, which React compiles into JavaScript function calls.",
  },
  {
    question: "What is the virtual DOM?",
    answer:
      "The virtual DOM is a lightweight copy of the real DOM. React updates the virtual DOM first and then efficiently updates only the changed parts of the real DOM.",
  },
   
   
];


  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>FAQ Section</h2>
      {faqlist.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default FAQList;
