export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

export default function RecipeList() {
  const listItems = recipes.map((recipe, index) =>
  <li key= {index}>
    {recipe.name}
    <ul>
      {Array.from(recipe.ingredients).map((ingredient, index1) => (
        <li key = {index1}>{ingredient} </li>
      ))}    
    </ul>
  </li>
  );
  return (
    <div>
      <h1>Recipes</h1>
      {listItems}
    </div>
  );
}