var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    
    for(var i=0;i<data.length;i++)
    {
        console.log(data[i].country+" "+data[i].flags+" ");
    }

    for(var i=0;i<data.length;i++)
    {
        console.log(data[i].regions,data[i].sub-region,data[i].populations,data[i].countriesnames);
    }
   
   for(var i in data)
   {
    console.log(data[i].regions,data[i].sub-region,data[i].populations,data[i].countriesnames);
   }
}
