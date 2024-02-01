const qrimage = document.querySelector('.qrimage');
const qrtext = document.querySelector('.qrtext');
const imageCon = document.querySelector('.image');

function generateQR () {
  qrimage.src =" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrtext.value;
}

 