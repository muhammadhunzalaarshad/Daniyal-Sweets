let sWrp = document.getElementsByClassName('rank-slide-container')[0]
let cardImage = [
  {
    'topImage':'./assert/topImageCardOne.jpg',
    'btmImageONe':'./assert/bottomImageOneCardOne.jpg',
    'btmImageTwo':'./assert/bottomImageTwoCardOne.jpg',
    'btmImageThree':'./assert/bottomImageThreeCardOne.jpg',
  },
  {
    'topImage':'./assert/topImageCardTwo.png',
    'btmImageONe':'./assert/bottomImageOneCardTwo.jpg',
    'btmImageTwo':'./assert/bottomImageTwoCardTwo.jpg',
    'btmImageThree':'./assert/bottomImageThreeCardTwo.jpg',
  },
  {
    'topImage':'./assert/topImageCardThree.jpg',
    'btmImageONe':'./assert/bottomImageOneCardThree.jpg',
    'btmImageTwo':'./assert/bottomImageTwoCardThree.jpg',
    'btmImageThree':'./assert/bottomImageThreeCardThree.jpg',
  },
  {
    'topImage':'./assert/topImageCardFour.jpg',
    'btmImageONe':'./assert/bottomImageOneCardFour.jpg',
    'btmImageTwo':'./assert/bottomImageTwoCardFour.jpg',
    'btmImageThree':'./assert/bottomImageThreeCardFour.jpg',
  },
  {
    'topImage':'./assert/topImageCardFive.jpg',
    'btmImageONe':'./assert/bottomImageOneCardFive.jpg',
    'btmImageTwo':'./assert/bottomImageTwoCardFive.jpg',
    'btmImageThree':'./assert/bottomImageThreeCardFive.jpg',
  },
  {
    'topImage':'./assert/topImageCardSix.jpg',
    'btmImageONe':'./assert/bottomImageOneCardSix.jpg',
    'btmImageTwo':'./assert/bottomImageTwoCardSix.jpg',
    'btmImageThree':'./assert/bottomImageThreeCardSix.jpg',
  },
  {
    'topImage':'./assert/topImageCardSeven.jpg',
    'btmImageONe':'./assert/bottomImageOneCardSeven.jpg',
    'btmImageTwo':'./assert/bottomImageTwoCardSeven.jpg',
    'btmImageThree':'./assert/bottomImageThreeCardSeven.jpg',
  },
  {
    'topImage':'./assert/topImageCardEight.png',
    'btmImageONe':'./assert/bottomImageOneCardEight.png',
    'btmImageTwo':'./assert/bottomImageTwoCardEight.png',
    'btmImageThree':'./assert/bottomImageThreeCardEight.jpg',
  },
  {
    'topImage':'./assert/topImageCardNine.png',
    'btmImageONe':'./assert/bottomImageOneCardNine.png',
    'btmImageTwo':'./assert/bottomImageTwoCardNine.png',
    'btmImageThree':'./assert/bottomImageThreeCardNine.png',
  },
  {
    'topImage':'./assert/topImageCardTen.jpg',
    'btmImageONe':'./assert/bottomImageOneCardTen.jpg',
    'btmImageTwo':'./assert/bottomImageTwoCardTen.jpg',
    'btmImageThree':'./assert/bottomImageThreeCardTen.jpg',
  }, 
]
cardImage.forEach((e) => {
  let rankWrp = document.createElement('div')
  rankWrp.classList.add('rank-slide-wrp')
  rankWrp.innerHTML=`     
                      <div class="rank-slide">
                        <div class="rank-box-top" style="background-image:url(${e.topImage})"></div>
                        <div class="rank-box-btm">
                            <div class="rank-box-btm-ch" style="background-image:url(${e.btmImageONe})"></div>
                        <div class="rank-box-btm-ch" style="background-image:url(${e.btmImageTwo})"></div>
                        <div class="rank-box-btm-ch" style="background-image:url(${e.btmImageThree})"></div>
                        </div>
                      </div>`

  sWrp.appendChild(rankWrp)
})


let rankCardsWrp = document.querySelectorAll('.rank-slide-wrp')
let counter = 0;
rankCardsWrp.forEach((v,i) => {
  v.style.left = `${i * 33.33}%`
})
const updateSlide = () => {
  rankCardsWrp.forEach((card) => {
    card.style.transform = `translateX(-${counter * 100}%)`
  })
  updateButton();
}


const updateButton = () => {
  document.getElementById('arrow-rg').disabled = counter === rankCardsWrp.length -4;
  document.getElementById('arrow-lf').disabled = counter === 0;
  updateDots();
}
const updateDots = () => {
  let dotsContainer = document.getElementsByClassName('dots')[0];
  dotsContainer.innerHTML = '';
  rankCardsWrp.forEach((_,index) => {
    if(index <= rankCardsWrp.length -3){
      const dot = document.createElement('div')
      dot.classList.add('dot')
    if(index === counter){
      dot.classList.add('background')
    }
    dot.onclick = () => gotoSlide(index)
    dotsContainer.appendChild(dot)
  }
  })
}
const goNext = () => {
  counter++;
  if(counter >= rankCardsWrp.length -2){
    counter = 0;
  }
  updateSlide()
}
const goPrev = () => {
  counter--;
  updateSlide();
}
const gotoSlide = (index) => {
  counter = index;
  updateSlide()
}
document.getElementById('arrow-lf').addEventListener('click',goPrev)
document.getElementById('arrow-rg').addEventListener('click',goNext)
setInterval(goNext,5000)
updateSlide();
// other
for (let i = 1; i < 7; i++) {
  let dsBox = document.querySelector(`.display-column:nth-child(${i})`);
  const styles = {
      backgroundImage: `url(./assert/ds-image-${i}.png)`,
      width: (i !== 1 && i !== 6) ? '24%' : '48%',
  };
  Object.assign(dsBox.style, styles);
}

cardAnimattion();
rspNav();

