var indexOfColors = 0;
function clickme() {
    let colors = ['red', 'blue', 'yellow', 'pink', 'violet'];
    document.body.style.background = colors[indexOfColors];
    indexOfColors++;
    
    if (indexOfColors == colors.length){
        indexOfColors = 0;
    }
}

