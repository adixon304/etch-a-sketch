//Reset button functionality
 function Reset(){
    ClearColor()
    let size = prompt("Color reset.  How large to make the new grid?")
    if (size > 100) {
      alert("Cannot be higher than 100")
    } else {
        generateGrid(size);
    } 
}

function ClearColor(){
    let item = document.querySelectorAll('.item');
    for (i = 0; i < item.length; ++i) {
        item[i].style.background = "grey";
    }
    let container = document.querySelector('.container');
    container.style.background = "grey";
}

function generateGrid(size){

   let container = document.getElementById("container");
   container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
   container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //Builds the div grid structure
    for (i = 1; i <= size*size; i++) {
        let item = document.createElement("div");
        item.classList.add("item");
        item.classList.add("item-" + i);
        item.id = "item";

        //Creates the mouseover effect on the grid of divs
        item.addEventListener("mouseover", function( event ) {
            // highlight the mouseover target
            let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            event.target.style.background = randomColor;
            
          }, false);

        container.appendChild(item);
   
    }

    setTimeout(function(){alert("Sparkle baby!")},3000);

}
