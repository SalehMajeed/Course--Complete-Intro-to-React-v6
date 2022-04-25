import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet'
import SearchParams from './SearchParams';

const AppReactElement = () => {
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

const App = () => {
  return (
    <div>
      <SearchParams />
      App JSX
      <h1 id='my-brand'>Adopt me</h1>
      <Pet name='Luna' animal='Dog' breed='Havanese' />
      <Pet name='Pepper' animal='Bird' breed='Cockatiel' />
      <Pet name='Beam' animal='Dog' breed='Wheten Terrier' />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
