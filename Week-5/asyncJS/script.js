async function getExchangeRate(currencyCode) {
    try {
        const response = await fetch(`https://api.exchangerate.host/latest`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const rate = data.rates[currencyCode];
        if (rate === undefined) {
            return null;
        }
        return parseFloat(rate.toFixed(4));
    } catch (error) {
        console.error("There was an error fetching the exchange rates: ", error);
        throw error;
    }
}

async function checkRate() {
    const currencyCode = document.getElementById('currencyCode').value.toUpperCase();
    if (currencyCode) {
        try {
            const rate = await getExchangeRate(currencyCode);
            document.getElementById('result').textContent = rate ? `Exchange Rate: ${rate}` : "Currency code not found.";
        } catch (error) {
            document.getElementById('result').textContent = 'Error fetching exchange rate.';
            console.error(error);
        }
    } else {
        document.getElementById('result').textContent = 'Please enter a currency code.';
    }
}

// We will expose checkRate to the global scope so it can be called from HTML.
window.checkRate = checkRate;
