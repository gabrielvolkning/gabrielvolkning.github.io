document.getElementById("reverseButton").addEventListener("click", function () {
    reverseArray();
});

function reverseArray() {
    var originalArray = [];
    var reversedArray = [];

    // Preenchendo o array com números de 1 a 10
    for (var i = 1; i <= 1000; i++) {
        originalArray.push(i);
    }

    // Criando o array reverso
    for (var j = 1000; j >= 1; j--) {
        reversedArray.push(j);
    }

    document.getElementById("result").innerHTML = "Array Original: " + originalArray.join(', ') + "<br>Array Inverso: " + reversedArray.join(', ');
}
