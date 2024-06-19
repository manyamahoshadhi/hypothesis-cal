document.getElementById("Calculate").onclick = function(){
    let a = document.getElementById("side1").value;
    a = Number(a);

    let b = document.getElementById("side2").value;
    b = Number(b);

    let c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

    document.getElementById("side3").innerHTML = "Length of side c :" + c;
}