const cForm = document.querySelector('#currency-from');
const cForm2 = document.querySelector('#currency-to');
//console.log(cForm2)

const formEle = document.querySelector("form");
//console.log(base)
formEle.addEventListener("submit", (evt)=>{
    evt.preventDefault();
    const base = document.querySelector('#currency-from').value;
    async function currencyConversion(){
        const http = await fetch(`https://api.exchangerate.host/latest?/source=ecb&base=${base}`);
        const res = await http.json();
            const amount = document.querySelector("#amount").value;
            const currencyTo = document.querySelector("#currency-to").value;
            const rate = res.rates[currencyTo];
        console.log(rate)
        function convert(){
            return amount * rate;
        }
        document.querySelector("#Result").innerHTML = `${amount} ${base.toUpperCase()} equal to ${currencyTo} ${convert().toFixed(2)}`;
    }
    currencyConversion()
});

async function countryGenerator(){
    const http = await fetch("https://restcountries.com/v2/all");
    const rss = await http.json();
    //console.log(rss[0].alpha2Code);
    //const cForm = document.querySelector('#currency-from');
    rss.forEach(element => {
    
        console.log(element.alpha2Code, element.name);
        //cForm.innerHTML = `
        //<option value="${data.alpha2Code}"> ${data.name}</option>
       //`
        showCountry(element);
    });

    //const currencyTo = document.querySelector("#currency-to");
    //console.log(currencyTo)
    
}

countryGenerator();

function showCountry(data){
    
    const country = `
     <option value="${data.alpha2Code}"> ${data.name}</option>
    `;

    //cForm.appendChild(country);
    cForm.insertAdjacentHTML('beforeend', country);
    //cForm2.insertAdjacentHTML('beforeend', country);

}

