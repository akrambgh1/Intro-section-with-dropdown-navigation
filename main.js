//this for the menu of the mobile 
var btnMenu = document.querySelector('.btnmenu');
var btnMenuClose = document.querySelector(".close-btn");
btnMenu.addEventListener("click", openMenu);
btnMenuClose.addEventListener("click", closeMenu);
function  openMenu(){
    document.querySelector(".navbar").style.transform = 'scaleX(1)';
};
function  closeMenu(){
    document.querySelector(".navbar").style.transform = 'scaleX(0)';
};
//this for the menu of the desktop
var btnMenuFeaTures = document.querySelector('.btn-Menu-FeaTures');
var btnMenuCompany =document.querySelector('.btn-Menu-company')
btnMenuFeaTures.addEventListener("click", openAndCloseMEnuFeaTures)
btnMenuCompany.addEventListener("click", openAndCloseMenuCompany)
var isClickedF = true;
function openAndCloseMEnuFeaTures() {
    let active = document.querySelector('.Menu-FeaTures');
    let arrowUp = document.querySelector(".arrow-up-Features");
    let arrowDown = document.querySelector(".arrow-Down-Features");
    if(isClickedF) {
        active.style.display = "block";
        arrowUp.style.display = "inline";
        arrowDown.style.display = "none";
        isClickedF = false;
    }
        else {
        active.style.display = "none";
        arrowUp.style.display = "none";
        arrowDown.style.display = "inline";
        isClickedF = true;
    }
} 
var isClickedC = true;
function openAndCloseMenuCompany() {
    let active = document.querySelector('.Menu-company');
    let arrowUp = document.querySelector(".arrow-up-company");
    let arrowDown = document.querySelector(".arrow-Down-company");
    if (isClickedC) {
        active.style.display = "block";
        arrowUp.style.display = "inline"
        arrowDown.style.display = "none"
        isClickedC = false;
    }
    else {
        active.style.display = "none";
        arrowUp.style.display = "none"
        arrowDown.style.display = "inline"
        isClickedC = true;
    }
}
