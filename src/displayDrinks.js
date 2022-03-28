import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayDrinks = ({ drinks }) => {
  const section = get('.section-center');
  const title = get('.title');
  //   console.log(drinks);
  if (!drinks) {
    // hide loading
    hideLoading();
    title.textContent = 'No drinks matched your search';
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      //   console.log(drinks);
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

      return ` <a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join('');

  //hide loading
  hideLoading();
  title.textContent = '';
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
