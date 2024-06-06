function calcular(operacion) {
    var val1 = parseFloat(document.getElementById("v1").value);
    var val2 = parseFloat(document.getElementById("v2").value);
    var x = 0;
    var res = document.getElementById("res");

    switch (operacion) {
        case "suma":
        x = val1 + val2;
        break;
        case "resta":
        x = val1 - val2;
        break;
        case "multiplicacion":
        x = val1 * val2;
        break;
        case "division":
            x = val1 / val2;
        
        break;
    }

    res.innerHTML = x;
}