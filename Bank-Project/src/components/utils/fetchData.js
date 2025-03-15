const fetchData = (setData) =>{
    const data = fetch(`https://v6.exchangerate-api.com/v6/737ae21d02219bec9e35e914/latest/USD`)
    .then(res => res.json())
    .then(info => setData(Object.entries(info.conversion_rates)))
    

}



const exchange = (val1, val2, num) => {

    return(((num / val1).toFixed(2) * val2).toFixed(2));

}

export {fetchData,exchange}