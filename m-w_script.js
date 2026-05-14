const formInputs = document.getElementById("form-inputs")
const assetName = document.getElementById("asset-name")
const buyPrice = document.getElementById("buy-price")
const currentPrice = document.getElementById("current-price")
const theLists = document.getElementById("watchlist-container")


formInputs.addEventListener("submit", function(e){
    e.preventDefault();

    const buy = parseFloat(buyPrice.value)
    const current = parseFloat(currentPrice.value)

    const change = (( current - buy ) / buy) * 100;
    const formattedChange = change.toFixed(2);

    // console.log(`Percentage change: ${change.toFixed(2)} %`)

    let newLi = document.createElement("li")

    //Deciding on the class (The logic needed)

    let colorClass = "";

    if (change >= 0) {
        colorClass = "profit-text"
    } else {
        colorClass = "loss-text"
    }

    // Injecting the content 
    newLi.innerHTML = `
        <span class="name-part">${assetName.value}</span>
        <span class="buy-part">Buy: $${buy.toFixed(2)}</span>
        <span class="current-part">Current: ${current.toFixed(2)}</span>
        <span class="percentage-part ${colorClass}">${change >= 0 ? '+' : ''}${formattedChange}%</span>
    
    `;

    theLists.appendChild(newLi)

    formInputs.reset()

})