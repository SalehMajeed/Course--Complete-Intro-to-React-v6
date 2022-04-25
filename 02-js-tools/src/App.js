import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet'

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", { id: "my-brand" }, "Adopt me!"),
    React.createElement(Pet, {
      name: "Luna?",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "cockatiel",
    }),
    React.createElement(Pet, {
      name: "Sudo",
      animal: "Dog",
      breed: "Wheaten Terrier",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
