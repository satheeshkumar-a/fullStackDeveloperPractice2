var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send();
request.onload=function(){
    var countrydata=JSON.parse(this.response)
    let totalPopulation=0;
    for(var i in countrydata){
        totalPopulation=totalPopulation+countrydata[i].population 
}
    console.log("The Total Population: "+totalPopulation)
}

