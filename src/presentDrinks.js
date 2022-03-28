import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';

const showDrinks = async (url) => {
  // Fetch Drinks
  const data = await fetchDrinks(url);

  // Display Drinks
  const section = await displayDrinks(data);
  //   console.log(section);
  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
