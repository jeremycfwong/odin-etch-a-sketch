function promptInput(){
    var val = Number(window.prompt("How large do you want the grid to be? (Max is 100x100)", "20"))
    if(val <= 100 && val > 0){
        val = Math.floor(val)
        document.getElementById("container").innerHTML= '';
        createSquare(val)
    } else {
        alert('Please enter a valid number!')
    }
}

function createSquare(val = 16){
    var element = document.getElementById("container")
    var size = Math.round(960 / val *10)/10


    for (i = 0; i < val; i++){
        console.log(i)
        var row = document.createElement("div");
        row.setAttribute('class', 'row')
        element.append(row)
        
        for (j = 0; j < val; j++){
            var sqr = document.createElement("div");
            sqr.setAttribute('class','square');
            sqr.setAttribute('id', `${i}-${j}`)
            sqr.style.width = size + 'px'
            sqr.style.height = (size - 2)  + 'px'
            row.appendChild(sqr);
        }
    }
}

createSquare()

document.addEventListener('mousedown', event =>{
    color = document.getElementById('colorpicker').value;
    if (event.target.className == "square"){
        event.target.style.backgroundColor = color;
    }

})
