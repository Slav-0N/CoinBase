const text = document.querySelector('.text');
const BASE_ADDR = 'https://data-api.binance.vision/api/v3/ticker/price';
const USDTUAH = '?symbol=USDTUAH';
const BNBUAH = '?symbol=BNBUAH';
const BNBUSDT ='?symbol=BNBUSDT'

let aaa;
let bbb;
let ccc;



getTick(USDTUAH)
    .then(data => {
      console.log(data);
      aaa = data.price;
      const price = `<p clsass="text">${data.symbol} --- ${data.price}</p>`;
      return text.innerHTML = price;
    })
    .catch(error => {
      console.log(error)
    });

getTick(BNBUAH)
   .then(data => {
     console.log(data);
     bbb = data.price;
     const price = `<p clsass="text">${data.symbol} --- ${data.price}</p>`;
      return text.insertAdjacentHTML('beforeend', price);
    })
    .catch(error => {
      console.log(error)
    });

    
getTick(BNBUSDT)
  .then(data => {
    console.log(data);
    ccc = data.price;
    const price = `
        <div clsass="text">${data.symbol}</div>
         <div >${data.price}</div>
      `;
    return text.insertAdjacentHTML('beforeend', price);
  })
  .catch(error => {
    console.log(error)
  });



setTimeout(() => console.log(`
USDT-> UAH:___${100 * aaa} грн, 
UAH -> BNB:___${1 * 100 * aaa /bbb} BNB, 
BNB ->USDT:___${1 * 100 * aaa /bbb * ccc}`), 1000);

function processing (a, b, c) {
  
}  



function getTick(symbol) {
  return fetch(`${BASE_ADDR}${symbol}`)
    .then(resp => {
      console.log(resp);
      
      if (!resp.ok) {
        throw new Error(resp.statusText)
      }
      return resp.json()
    })
}


// function dataBaseRendering(binanceResponse) {
//   const price = `<p clsass="text">${data.price}</p>`
//   return text.innerHTML = price;
//     } 