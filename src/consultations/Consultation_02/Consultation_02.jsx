import { useState } from "react";

import "./styles.css";

function Consultation_02() {
  // Стейт без деструктуризации
  // const state = useState("Hello");
  // // console.log(state);
  // const hello = state[0];
  // const setState = state[1];
  // console.log(hello);
  // console.log(setState);

  // Стейт с деструктуризацией
  //   const [state, setState] = useState("Hi");
  //   console.log(state);
  //   console.log(setState);

  // Event
  const sayHi = (event, userName) => {
    console.log(event);
    event.preventDefault();
    console.log(`Hello, ${userName}`);
  };

  // Деструктуризация обьектов
  const user1 = {
    firstName: "John",
    lastName: "Johnson",
    age: 30,
    job: "Frontend developer",
  };

  //   const firstName = user1.firstName;
  //   const lastName = user1["lastName"];
  //   const age = user1.age;
  //   const job = user1.job;

  //   const { firstName, lastName, age, job } = user1;

  // console.log(firstName);
  // console.log(lastName);
  // console.log(age);
  // console.log(job);

  //   const { firstName, lastName, ...rest} = user1;
  //   console.log(firstName);
  //   console.log(lastName);
  //   console.log(rest);

  // Деструктуризация массивов
  const animals = ["Tiger", "Lion", "Cat", "Dog", "Rat"];
  //   const tiger = animals[0];
  //   const lion = animals[1];
  //   const cat = animals[2];
  //   const dog = animals[3];
  //   const rat = animals[4];

  //   const [tiger, lion, cat, dog, rat] = animals;

  //   console.log(tiger);
  //   console.log(lion);
  //   console.log(cat);
  //   console.log(dog);
  //   console.log(rat);

  // метод find
  // const dog = animals.find((value) => {
  //     return value === "Dog";
  // })

  // console.log(dog);

  // Получение и деструктуризация массиов из функции
  const getMultipliedValues = (a, b, c, miltiplyValue) => {
    const firstValue = a * miltiplyValue;
    const secondValue = b * miltiplyValue;
    const thirdValue = c * miltiplyValue;

    return [firstValue, secondValue, thirdValue];
  };

  //   const valuesArray = getMultipliedValues(1, 2, 3, 5);
  //   console.log(valuesArray);
  const [firstValue, secondValue, thirdValue] = getMultipliedValues(1, 2, 3, 5);
  console.log(firstValue);
  console.log(secondValue);
  console.log(thirdValue);

  return (
    <div className="page-wrapper">
      {/* <form onSubmit={sayHi}>
        <button type="submit">
          Click me!
        </button>
      </form> */}
      <button
        onClick={(event) => {
          sayHi(event, "Sergei");
        }}
        type="button"
      >
        Click me!
      </button>
      <a
        onClick={(event) => {
          event.preventDefault();
        }}
        href="https://www.google.com/"
      >
        Link to Google
      </a>
    </div>
  );
}

export default Consultation_02;
