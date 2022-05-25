let phrases = [
  { text: 'узнать язык покемонов', image: 'pokemon.png' },
  { text: 'посмотреть видео с котиками', image: 'cat.png' },
  { text: 'научиться собирать кубик рубика за 30 секунд', image: 'rubiks_cube.png' },
  { text: 'выпить кофе', image: 'coffee.png' },
  { text: 'полить цветок', image: 'plant.png' },
  { text: 'прочитать новости', image: 'news.png' },
  { text: 'поиграть в игру', image: 'games.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 20) {
    advice.style.fontSize = '30px';
  } else {
    advice.style.fontSize = '35px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
  // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);

  if (phrases[i].text.length > 20) {
    advice.style.fontSize = '30px';
  } else {
    advice.style.fontSize = '35px';
  }
}