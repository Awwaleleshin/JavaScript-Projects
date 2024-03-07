let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"The only way to do great work is to love what you do."`,
        person: `Steve Jobs`
    },
    {
        quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
        person: `Winston Churchill`
    },
    {
        quote: `"Believe you can and you're halfway there." `,
        person: `Theodore Roosevelt`
    },
    {
        quote: `"In the midst of chaos, there is also opportunity."`,
        person: `Sun Tzu`
    },
    {
        quote: `"Opportunities don't happen, you create them."`,
        person: ` Chris Grosser`
    },
    {
        quote: `"Strive not to be a success, but rather to be of value."`,
        person: `Albert Einstein`
    },
    {
        quote: `"Don't watch the clock; do what it does. Keep going."`,
        person: `Sam Levenson`
    }
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})