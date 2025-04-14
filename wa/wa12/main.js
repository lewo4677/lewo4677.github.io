
var newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);

var endpoint = "https://dogapi.dog/api/v2/facts"; 

let current = {
    quote: "",        
    character: ""     
};

async function getQuote() {
    try {
        const response = await fetch(endpoint); 

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();

        displayQuote(json[0].fact);
        current.quote = json[0].fact;

        // displayCharacter("Dog Fact"); 

        current.quote = json.facts[0];
        current.character = "Dog Fact";
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch dog fact.');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = `"${quote}"`;
}

function displayCharacter(character) {
    const characterText = document.querySelector('#js-character-text');
    characterText.textContent = `— ${character}`;
}

// Load a quote on page load
getQuote();
