import React from "react";
import ReactDOM from "react-dom/client";

// normal react code without jsx
/*
const parent = React.createElement(
"div",
{ id: "parent" },
React.createElement("div", { id: "child" }, [
React.createElement("h1", { id: "heading" }, "this is the new h1 tag"),
React.createElement("h2", { id: "heading2" }, "this is the new h2 tag"),
])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

// jsx code
/*
const Title = () => {
  return <h1 id="heading">this is jsx code</h1>;
};

const Heading = () => {
  return (
    <div>
      <Title />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
*/
