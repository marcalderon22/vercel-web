let count = 0;
var dastDictionary = {
    "injection": "It is a type of attack that is carried out through user data input.",
    "XSS": "It is a type of attack that injects malicious code into web pages viewed by other users.",
    // Agrega más palabras y definiciones aquí
   };

function myFunction() {
    count++;
    document.getElementById('countLabel').textContent = "Número de veces presionado: " + count;
    var inputValue = document.getElementById('countInput').value;
    if (inputValue in dastDictionary) {
        alert(dastDictionary[inputValue]);
    } else {
        alert('DAST tests are performed on CircleCI in the dast branch and on Probely');
    }
}