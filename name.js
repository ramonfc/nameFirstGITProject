function calcSum() {
    let a = document.getElementById("n1").value
    let b = document.getElementById("n2").value

    if (a.length > 0 && b.length > 0) {
        a = parseFloat(a)
        b = parseFloat(b)
        if (!isNaN(a) && !isNaN(b))
            document.getElementById("res").innerHTML = `${a} + ${b} = ${a + b}`
        else
            document.getElementById("res").innerHTML = "all fields must be number"
    } else
        document.getElementById("res").innerHTML = "any field can't be empty"

}