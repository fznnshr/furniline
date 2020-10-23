let buttons = document.getElementsByName("btnScroll");
let produk = document.getElementById("produk");
let tentangkami = document.getElementById("tentangkami");
let hubungikami = document.getElementById("hubungikami")
let kategori = document.getElementById("kategori");
let beranda = document.getElementsByClassName("jumbotron");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e){
        if(this.innerHTML == "Kategori") {
            window.scrollTo({
                top: kategori.offsetTop - 50,
                behavior: "smooth"
            })   
        }else if (this.innerHTML == "Produk") {
            window.scroll({
                top: produk.offsetTop - 50,
                behavior: "smooth"
            })
        }else if (this.innerHTML == "Tentang Kami") {
            window.scroll({
                top: tentangkami.offsetTop - 50,
                behavior: "smooth"
            })
        }else if (this.innerHTML == "Hubungi Kami") {
            window.scroll({
                top: hubungikami.offsetTop - 50,
                behavior: "smooth"
            })
        }else if(this.innerHTML == "Klik di sini"){
            window.scroll({
                top: produk.offsetTop - 50,
                behavior: "smooth"
            })
        }else{
            window.scroll({
                top: beranda.offsetTop - 50,
                behavior: "smooth"
            })
        }
        e.preventDefault();
    })
}

let btnHamburger = document.getElementsByClassName("hButton")[0];
let menu = document.querySelector(".menu");
let media = window.matchMedia("(min-width : 1300px)");

function navmenu(a) {
    if(a.matches) {
        menu.style.display ="block";
    }else{
        menu.style.display ="none";
    }
}
navmenu(media);
media.addListener(navmenu);

btnHamburger.addEventListener("click", function(){
    if (menu.style.display == "none"){
        menu.style.display="block";
    }else{
        menu.style.display="none";
    } 
})












