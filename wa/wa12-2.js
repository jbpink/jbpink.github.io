const btn = document.querySelector('#js-new-quote');
const factCountInput = document.querySelector('#js-fact-count');

btn.addEventListener('click', getQuote);

const baseEndpoint = 'https://meowfacts.herokuapp.com/';

async function getQuote() {
  const factCount = parseInt(factCountInput.value, 10);
  let endpoint = baseEndpoint;
  
  // Validate the number of facts requested
  if(factCount < 1 || factCount > 3) {
    alert(`Error: Please enter a number between 1 and 3. You entered: ${factCount}`);
    return;
  }
  
  if(factCount > 1) {
    endpoint += `?count=${factCount}`;
  }

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    // Assuming the API returns an array of facts when 'count' parameter is used
    displayQuote(json.data.join('<br><br>')); // Join the facts with a break line
  } catch (err) {
    console.error(err);
    alert('Failed to fetch new quote');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.innerHTML = quote; // Using innerHTML to interpret the break lines
}

getQuote();