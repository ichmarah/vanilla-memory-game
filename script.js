document.addEventListener('DOMContentLoaded', () => {
  let cards = [...cardArray]
  let cardGrid = document.getElementById('cards-grid')
  let cardsChosen = [];
  let cardsChosenId = [];
  
  // Create and push duplicates to cards variable
  function createCards () {
    for (let i = 0; i < cardArray.length; i++) {
      cards.push(cardArray[i])
    }
    // Randomize/shuffle cards
    cards.sort(() => 0.5 - Math.random());
    console.log('Cards: ', cards);
  }

  // Create a card div for each card
  function createCardGrid () {
    for (let i = 0; i < cards.length; i++) {
      let card = document.createElement('div', );
      card.setAttribute('class', 'card');

      let image = document.createElement('img');
      image.setAttribute('src', 'images/back_cover.png');
      image.setAttribute('class', 'card-image')
      image.setAttribute('id', i);
      image.addEventListener('click', flipCard);
      
      card.appendChild(image);
      cardGrid.appendChild(card);
    }
  }

  // Click event
  function flipCard () {  
    let back_id = this.getAttribute('id');
    console.log(`Back ID: ${back_id}`);

    this.setAttribute('src', cards[back_id].img)
    
    cardsChosen.push(cards[back_id].name);
    cardsChosenId.push(back_id)
    console.log(`Cards Chosen ID: ${cardsChosenId}`);
    console.log(`Cards Chosen: ${cardsChosen}`);

    // If there are 2 cards and thei id's don't match, go to matchCards function. 
    if( cardsChosen.length === 2 && cardsChosenId[0] !== cardsChosenId[1]) {
      setTimeout(matchCards, 500)
      // If the cards chosen have same ID, remove last item from the chosen arrays
    } else if (cardsChosenId[0] === cardsChosenId[1]) {
      alert('Please choose another card');
      cardsChosen.pop(cards[back_id].name);
      cardsChosenId.pop(back_id)
    }
  }

  // Check if chosen cards match
  function matchCards () {
    let changeCards = document.querySelectorAll('img');
    if(cardsChosen[0] === cardsChosen[1]) {
      alert('You have a match!')
      for (const cardChosenId of cardsChosenId) {
        changeCards[cardChosenId].setAttribute('src', 'images/white.png')
      }
    } else {
      alert('Sory, you have no match. Try again');
      for (const cardChosenId of cardsChosenId) {
        console.log('No match cardChosenID: ', cardChosenId);
        
        changeCards[cardChosenId].setAttribute('src', 'images/back_cover.png')
      }
    }
    cardsChosen = [];
    cardsChosenId = [];
    console.log(`Empty cardsChosen: ${cardsChosen} and empyty cardsChosenId ${cardsChosenId}`);
    
  }

  createCards()
  createCardGrid()
})