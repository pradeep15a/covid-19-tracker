let api = "https://corona.lmao.ninja/v2/countries/india"
const totalCases = document.getElementById("total-cases")
const activeCases = document.getElementById("active-cases")
const flag=document.getElementById("flag");
const totalDeaths = document.getElementById("total-deaths")
const criticalDeaths = document.getElementById("critical-deaths")

fetch(api).then((data)=>{
    return data.json();
}).then((response)=>{
    console.log(response);
    activeCases.innerHTML=response.active
    totalCases.innerHTML=response.cases
    totalDeaths.innerHTML=response.deaths
    criticalDeaths.innerHTML=response.critical
    
})