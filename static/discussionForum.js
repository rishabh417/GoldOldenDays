console.log("Script is attached");
const elem = document.querySelector(".primary");
const newQuery = document.querySelector(".newQuery");
newQuery.addEventListener("click", e=>{
    console.log("Give solution is clicked");
    let clone = elem.cloneNode(true);
    elem.after(clone);
})
