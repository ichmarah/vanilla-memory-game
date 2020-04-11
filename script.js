document.addEventListener('DOMContentLoaded', () => {
  let cards = [...cardArray]
  let cardGrid = document.getElementById('cards-grid')
  let cardsChosen = [];
  
  // Create and push duplicates to cards variable
  function createCards () {
    for (let i = 0; i < cardArray.length; i++) {
      cards.push(cardArray[i])
    }
    // Randomize/shuffle cards
    cards.sort(() => 0.5 - Math.random());
    console.log(cards);
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
    console.log(back_id);

    this.setAttribute('src', cards[back_id].img)
    
    cardsChosen.push(cards[back_id].name);
    console.log(cardsChosen);
    if( cardsChosen.length === 2) {
      setTimeout(matchCards, 500)
    }
  }

  // Check if chosen cards match
  function matchCards () {
    if(cardsChosen[0] === cardsChosen[1]) {
      alert('You have a match!')
      this.setAttribute('src', '/images/white.png')
    }
  }

  createCards()
  createCardGrid()
})