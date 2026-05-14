/*
Logic of what to build 

1. Grab the tools: Select the form, the inputs, and the list container from the HTML.
2. Listen for the "Go" signal: Add an event listener to the form for the "submit" event.
3. Stop the default: Prevent the page from refreshing (the browser's default behavior).
4. Get the numbers: Capture the values from the inputs and turn them into numbers.
5. Do the Math: Calculate the percentage change using the formula: ((current - buy) / buy) x 100$.
6. Decide the vibe: If the change is positive, use the "profit" class; otherwise, use "loss".
7. Create the Row: Generate a new li element and inject the data.
8. Show it: Append that li to your watchlist.
9. Clean up: Reset the form inputs for the next entry.

*/

const formInputs = document.getElementById("form-inputs")
const assetName = document.getElementById("asset-name")
const buyPrice = document.getElementById("buy-price")
const currentPrice = document.getElementById("current-price")
const theLists = document.getElementById("watchlist-container")

formInputs.addEventListener("submit", function(event){
    event.preventDefault()

    // Get the value and covert them to numbers
    const buy = parseFloat(buyPrice.value)
    const current = parseFloat(currentPrice.value)

    // Do the claculation & make it fixed to 2 decimal places

    const change = (( current - buy ) / buy) * 100
    const formattedChange = change.toFixed(2)

    // create a new list element 

    let newli = document.createElement("li")

    // Assign the color to the right text.

    let colorClass = "";

    if (change >= 0){
        colorClass = "profit-text"
    } else{
        colorClass = "loss-text"
    }

    // Injecting the contents
    newli.innerHTML = `
        <span class="asset-name-part"> ${assetName.value} </span>
        <span class="buy-part"> Buy: $${buy.toFixed(2)} </span>
        <span class="current-part"> Current: $${current.toFixed(2)} </span>
        <span class="percentage-part ${colorClass}"> ${change >= 0 ? '+' : ''}${formattedChange}% </span>    
    `;

    theLists.appendChild(newli)
    formInputs.reset()

})  