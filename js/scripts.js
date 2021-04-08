for (i = 1; i <= 16; i++) {
    let box = document.createElement("div");
    box.id = "box-" + i;
    box.class = "box";
    document.getElementById("container").appendChild(box);
}