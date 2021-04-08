//Builds the div grid structure
for (i = 1; i <= 16; i++) {
    let item = document.createElement("div");
    item.classList.add("item");
    item.classList.add("item-" + i);
    document.querySelector(".container").appendChild(item);
}