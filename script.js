function calculatelove(){
    let yourname=document.getElementById("yourname").value.trim();
    let patnername=document.getElementById("patnername").value.trim();

    if(yourname==='' || patnername===''){
alert ("enter both the name");
return;
    }
let calculatepersent=randomparsent();
let result=document.getElementById("result");
result.innerHTML=`${calculatepersent}%`;
let returns=document.getElementById("printresult");
returns.innerHTML=`L♡ve Persant B/W ${yourname} & ${patnername} is ${calculatepersent}%`
}

function randomparsent(){
    return Math.floor(Math.random()*101);
}