import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css"; // Adjust the path to your CSS file
import Todo from "./Componets/Todo";


const App = () => {
  return (
    <div >
        <Todo/>
      </div>
  
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
