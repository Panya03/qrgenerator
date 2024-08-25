let qrcode = document.getElementById("qrcode");
let qrimg = document.getElementById("qrimg");
let textinput = document.getElementById("textinput");



function qrgenerator(){
    if(textinput.value.length>0){
        qrimg.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+textinput.value;
        qrimg.classList.add("show-img");}
        else{
            textinput.classList.add("error");
            setTimeout(() => {
                textinput.classList.remove("error");
                
            }, 1000);
        }
}