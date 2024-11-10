let inputtag = document.querySelector(".input-tag");
let btn= document.querySelector(".btn");
let qrimg = document.getElementById("QRimg");
let imgbox = document.querySelector("imgBox");

function generator(){
  qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ inputtag.value;    
}

btn.addEventListener("click", function(){
    generator();
});