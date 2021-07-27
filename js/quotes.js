const quotesList = [
  {
    quotes:"All progress takes place outside the comfort zone.",
    koTranslate:"모든 성과는 요령을 피우지 않을 때 생긴다.",
    author:"Michael John Bobak"
  },
  {
    quotes:"Success usually comes to those who are too busy to be looking for it.",
    koTranslate:"성공은 주로 성공을 찾느라 바쁜 사람들에게 찾아온다.",
    author:"Henry David Thoreau"
  },
  {
    quotes:"Success seems to be connected with action. Successful people keep moving.",
    koTranslate:"성공은 행동과 연결되어 있다. 성공적인 사람들은 계속해서 움직인다.",
    author:"Conrad Hilton"
  },
  {
    quotes:"In order to succeed, we must first believe that we can.",
    koTranslate:"성공하기 위해서, 우리는 먼저 우리 자신이 할 수 있다는 것을 믿어야 한다.",
    author:"Nikos Kazantzakis"
  },
  {
    quotes:"Slow and steady win the race.",
    koTranslate:"천천히 그리고 꾸준히 하면 경주에서 승리한다.",
    author:""
  },
  {
    quotes:"Lay a firm foundation with the bricks that others throw at you.",
    koTranslate:"다른 사람들이 당신을 향해 던지는 돌을 가지고 튼튼한 기반을 쌓아라.",
    author:"David Brinkley"
  },
  {
    quotes:"If you run you stand a chance of losing, but if you don’t run you’ve already lost.",
    koTranslate:"당신이 경주한다면 패배할 가능성도 있겠지만, 경주하지 않는다면 당신은 이미 패배한 것이다.",
    author:"Barack Obama"
  },
  {
    quotes:"It is kind of fun to do the impossible.",
    koTranslate:"불가능한 것에 도전하는 것은 꽤 재미있다.",
    author:"Walt Disney"
  },
  {
    quotes:"Tough times never last, but tough people do.",
    koTranslate:"힘든 시간들은 절대로 오래가지 않지만, 강인한 사람들은 오래 간다.",
    author:"Robert H. Schuller"
  },
  {
    quotes:"I didn’t get there by wishing for it or hoping for it, but by working for it.",
    koTranslate:"나는 목표점까지 그저 소망하고 희망하는 것이 아닌, 노력으로 도달했다.",
    author:"Estée Lauder"
  },
]

const quotes = document.querySelector("#quotes");
const [quote, koTranslate, author] = quotes.children;
const todaysQuote = quotesList[Math.floor(Math.random() * quotesList.length)];


quote.innerHTML =  todaysQuote.quotes;
koTranslate.innerHTML =  todaysQuote.koTranslate;
author.innerHTML = todaysQuote.author;