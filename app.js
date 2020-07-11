document.getElementById("output").style.visibility = 'hidden';
document.getElementById("kgsIP").addEventListener('input', function(e){
    document.getElementById("output").style.visibility = 'visible';
    let kgs = e.target.value;
    console.log(kgs);
    document.getElementById("gramsOutput").innerHTML=kgs*1000;
    document.getElementById("lbsOutput").innerHTML=kgs*2.205;
    document.getElementById("ozOutput").innerHTML=kgs*35.274;
});