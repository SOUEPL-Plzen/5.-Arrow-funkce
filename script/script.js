const add = document.querySelector(".add");
const output = document.querySelector("#output");
/*
add.addEventListener("click", () => {
    output.innerHTML = Number(output.innerHTML) + 1;
});
*/

/*
let i = 1;

add.addEventListener("click", () => {
    i++; 
    output.innerHTML = i;
});
*/

add.addEventListener("click", () => {
    output.innerHTML++;
});

addEventListener("keydown", (e) => {
    console.log("Event", e);
    if(e.code == "KeyA"){
        output.innerHTML++;
    }

});