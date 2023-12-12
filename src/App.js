import React from "react";
import "./style.scss";
import data from "./config/data";
import Card from "./components/card";

const sortRandomFn = () => 0.5 - Math.random();

function App() {
  return (
    <div>
      <h1 className="heading">Glassmorphic Card Layout</h1>
      <section className="cardContainer">
        {data.sort(sortRandomFn).map(({ id, name, role, imageUrl }) => (
          <Card key={'1'+id} name={name} role={role} imageUrl={imageUrl} />
        ))}
        {data.sort(sortRandomFn).map(({ id, name, role, imageUrl }) => (
          <Card key={'2'+id} name={name} role={role} imageUrl={imageUrl} />
        ))}
        {data.sort(sortRandomFn).map(({ id, name, role, imageUrl }) => (
          <Card key={'3'+id} name={name} role={role} imageUrl={imageUrl} />
        ))}
        {data.sort(sortRandomFn).map(({ id, name, role, imageUrl }) => (
          <Card key={'4'+id} name={name} role={role} imageUrl={imageUrl} />
        ))}
        {data.sort(sortRandomFn).map(({ id, name, role, imageUrl }) => (
          <Card key={'5'+id} name={name} role={role} imageUrl={imageUrl} />
        ))}
      </section>
    </div>
  );
}

export default App;
