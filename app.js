const quote = [
    {quote: "The only limit to our realization of tomorrow is the doubts of today.", author: "Franklin D Roosevelt"},
    {quote: "Success is not final, failure is not fatal, it is the courage to continue  that counts.", author: "Winston Churchill"},
    {quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson"},
    {quote: "Life is what happens when you are busy making other plans.", author: "John Lennon"}
];

function getRandomQuotes () {
    const RandomIndex = Math.floor(Math.random() * quote.length);
    return quote[RandomIndex];

}

function displayRandomQuote() {
    const randomQuotes = getRandomQuotes();
    const quoteElement = document.querySelector('.h1');
    quoteElement.innerText = `'${randomQuotes.quote}'-${randomQuotes.author}`;

}

document.querySelector('.quote').addEventListener('click', displayRandomQuote);

window.onload = displayRandomQuote

setInterval(displayRandomQuote, 3000);
