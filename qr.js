const createButton = document.getElementById('createQr')

createButton.addEventListener('click', createQRCode);

const QRContainer = document.getElementById("qrCode")



function createQRCode() {



    QRContainer.innerHTML = "";


    const text = document.getElementById('user-text').value;

    new QRCode(QRContainer, text)

    QRContainer.style.backgroundColor == "#FECB11"

}

