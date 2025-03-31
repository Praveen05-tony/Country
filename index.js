let txt = document.getElementById("txt");
let btn = document.getElementById("btn");
let result = document.getElementById("result")


btn.addEventListener("click", ()=> {
    let countryName = txt.value;
    let finalurl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    // console.log(finalurl)
    fetch(finalurl).then((response) => response.json())
    .then((data) => {
        console.log(data[0].name.common);
        console.log(data[0].capital[0]);
        console.log(data[0].region);
        console.log(data[0].population);
        console.log(data[0].flags.png);
        result.innerHTML = `<img src="${data[0].flags.png}">
        <h3>Name : ${data[0].name.common}</h3>
        <h3>Capital : ${data[0].capital[0]}</h3>
        <h3>Region : ${data[0].region}</h3>
        <h3>Population : ${data[0].population}</h3>`
    })
})