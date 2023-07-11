const navBtn = document.getElementById("nav-btn");

let hamclicked = false;

navBtn.addEventListener('click', () => {
    hamclicked = !hamclicked;
    if(hamclicked == true){
        navBtn.classList.add("hamAnim")
    } else{
        navBtn.classList.remove("hamAnim")
    }
})