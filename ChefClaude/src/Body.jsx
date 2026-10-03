import React from "react";

function Body() {
  const ingredient = ["Flour", "Sugar", "Eggs", "Butter"];
  const ingredientList = ingredient.map((ingr) => <li key={ingr}>{ingr}</li>);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    ingredient.push(formData.get("ingredient"));
  }

  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);   // pass callback fun instead of setCount(count + 1); 
  }

  return (
    <>
      <form action="" className="add-ingredient-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Ex. Flour" name="ingredient" />
        <button>Add Ingredients</button>
        <button onClick={add}>{count}</button>
      </form>
      <ul>{ingredientList}</ul>
    </>
  );
}

export default Body;
