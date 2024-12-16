import React from "react";
import Container from "@/app/component/layers/Container";
import A from "./A";
import { Ar as Arc } from "./A";


let cal = (b, c) => {
  let a = b + c;
  return a;
};

let a = [
  {
    a: 1,
    sub:"bangla",
    number:200,
  },
  {
    a: 2,
    sub:"english",
    number:300
  },
  {
    a: 3,
    sub:"math",
    number:400
  },
  {
    a: 4,
    sub:"bangla",
    number:500
  }
]

const page = () => {
  let person = {
    name: "Rimjim",
    theme: {
      color: "red",
      fontSize: "30px",
      backgroundColor: "yellow",
    },
};

let style = {
    color: "red",
    fontSize: "30px",
}

let item = a.map((item) => (<li key={item.number}>{item.sub}</li>))
let making = (
    <>
      <h1 style={style}>Hellow</h1>
      <h2>Hlllow2</h2>
      <p>Akash</p>
    </>
);

  return (
    <div className="my-52">
      <Container>
        <h1 style={person.theme}>Testing...{person.name}</h1>
        <A />
        <Arc />
        <h1>Cal-{cal(2, 101)}</h1>
        <div>{making}</div>
        <div className="">{item}</div>
      </Container>
    </div>
  );
};

export default page;
