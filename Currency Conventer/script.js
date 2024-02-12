function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    alert('Guess the Answer 😀')
    let exchangeRate;

    // Exchange rates (you can update these as needed)
    if (currency === 'eur') {
      exchangeRate = 0.85; // 1 USD to EUR
    } else if (currency === 'gbp') {
      exchangeRate = 0.74; // 1 USD to GBP
    }

    const convertedAmount = (amount * exchangeRate).toFixed(2);
    document.getElementById('result').innerHTML = `Converted Amount: ${convertedAmount} ${currency.toUpperCase()}`;
  }