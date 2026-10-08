function IngredientList(props) {
  const ingredientsList = props.ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  return (
    <>
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientsList}
        </ul>

        {props.ingredients.length > 3 && (
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.toggleRecipeShown}>
              {props.recipeShown ? "Hide Recipe" : "Show Recipe"}
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default IngredientList;
