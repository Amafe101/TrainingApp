let imageUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let inputEl = document.getElementById("input-el") ;
let imgEl = document.getElementById("qrImage" );
let mainUrl = inputEl.value;



function generateCode(){
    if (inputEl.value.length > 0 ) {
    document.getElementById("qrImage").src = `${imageUrl} ${inputEl.value}`;
    } else {
        alert("Please enter some text...");
    }

}

