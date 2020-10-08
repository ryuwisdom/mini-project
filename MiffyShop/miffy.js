const miffyLogo = document.getElementById('img-logo');

window.onload = function(){
    miffyLogo.classList.remove('miffy-invisiable');
    miffyLogo.classList.add('miffy-visiable');
}


// setTimeout(function () {

// }, 1000);


// dropdown

const dropBtn = document.querySelectorAll('.dropBtn');




const prevBtn = document.getElementsByClassName('prev-btn')[0];
const nextBtn = document.getElementsByClassName('next-btn')[0];
const productItem = document.querySelectorAll('.product-item');
let l = 0;

nextBtn.onclick = () => {
    l++;
    for (let i of productItem) {
        if (l == 0) {
            i.style.left = "0px"
        }
        if (l == 1) {
            i.style.left = "-740px"
        }
        if (l == 2) {
            i.style.left = "-1480px"
        }
        if (l == 3) {
            i.style.left = "-2220px"
        }
        if (l == 4) {
            i.style.left = "-2960px"
        }
        if (l > 4) {
            l = 4;
        }
    }

}

prevBtn.onclick = () => {
    l--;
    for (let i of productItem) {
        if (l == 0) {
            i.style.left = "0px"
        }
        if (l == 1) {
            i.style.left = "-740px"
        }
        if (l == 2) {
            i.style.left = "-1480px"
        }
        if (l == 3) {
            i.style.left = "-2220px"
        }
        if (l < 0) {
            l = 0;
        }
    }
}