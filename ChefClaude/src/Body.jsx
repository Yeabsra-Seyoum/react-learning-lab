import React from "react";

function Body() {
  // pass callback fun instead of setCount(count + 1);  the second option just updates the count value to the current
  // value i.e., count+1. But the call back function option is used when we want to update the state based on the
  // previous state value. Ex. flipping between true and false. to do "!prevTruthValue".

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setIngredients((prevIngredients) => [
      ...prevIngredients,
      formData.get("ingredient"),
    ]);
  }
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsList = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  return (
    <>
      <form action="" className="add-ingredient-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Ex. Flour" name="ingredient" />
        <button>Add Ingredients</button>
      </form>
      <ul>{ingredientsList}</ul>
    </>
  );
}

export default Body;
