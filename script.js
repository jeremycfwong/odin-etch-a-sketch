var element = document.getElementById("container")

for (i = 0; i < 16; i++){
    console.log(i)
    var row = document.createElement("div");
    row.setAttribute('class', 'row')
    element.append(row)
    for (j = 0; j < 16; j++){
        var sqr = document.createElement("div");
        sqr.setAttribute('class','square')
        row.appendChild(sqr);
    }
}