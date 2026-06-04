let imgBox = document.getElementById("imgBox"); 
let qrImage = document.getElementById("qrImage"); 
let qrText = document.getElementById("qrText"); 


function generateQRCode() {
    if(qrText.value.length > 0) {
        qrImage.src = "API_KEY_HERE" + qrText.value; 
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error"); 
        setTimeout(()=>{
            qrText.classList.remove("error");
        }, 1000); 
    }
}