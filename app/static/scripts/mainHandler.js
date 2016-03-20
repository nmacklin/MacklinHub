/**
 * Created by Nick on 12/27/2015.
 */

var ancillaryInputContainer = document.querySelector("#ancillaryInputContainer");
var encryptionMethodList = document.querySelector("#encryptionMethod");
encryptionMethodList.addEventListener("change", function () {
    // Clears any old ancillary inputs
    while (ancillaryInputContainer.firstChild) {
        ancillaryInputContainer.removeChild(ancillaryInputContainer.firstChild);
    }

    // Parses encryptionMethods object and creates specified ancillary input fields
    var selectedMethod = encryptionMethodList.value;
    var options = encryptionMethods[selectedMethod];
    for (var ancillary in options.ancillaries) {
        var ancillaryCount = 0;
        if (options.ancillaries.hasOwnProperty(ancillary)) {
            var ancillaryInput = document.createElement("INPUT");
            ancillaryInput.type = "text";
            ancillaryInput.className = "codeStyle ancillaryInput";
            ancillaryInput.id = "ancillaryInput" + String(ancillaryCount);
            ancillaryInput.value = options.ancillaries.ancillaryInput1;
            ancillaryInput.setAttribute("onClick", "this.setSelectionRange(0, this.value.length)");
            ancillaryInputContainer.appendChild(ancillaryInput);
            ancillaryCount++;

            for (var i = 0; i < 2; i++) {
                var lineBreak = document.createElement("BR");
                ancillaryInputContainer.appendChild(lineBreak);
            }
        }
    }
    if (options.attemptCrack) {
        var checkBox = document.createElement("INPUT");
        checkBox.type = "checkbox";
        checkBox.className = "codeStyle ancillaryInput";
        checkBox.id = "attemptCrack";
        ancillaryInputContainer.appendChild(checkBox);
        var checkBoxLabel = document.createElement("SPAN");
        checkBoxLabel.className = "codeStyle";
        checkBoxLabel.id = "attemptCrackLabel";
        checkBoxLabel.innerHTML = "Attempt to crack cipher without keyword";
        ancillaryInputContainer.appendChild(checkBoxLabel);
    }
});

var encryptButton = document.querySelector("#encryptButton");
encryptButton.addEventListener("click", function () {
    var encryptFunction = encryptionMethods[encryptionMethodList.value].encryptFunction;
    var encryptedText = encryptFunction();
    var textOutput = document.querySelector("#textOutput");
    textOutput.value = encryptedText;
});

var decryptButton = document.querySelector("#decryptButton");
decryptButton.addEventListener("click", function () {
    var decryptFunction;
    var attemptCrack = document.querySelector("#attemptCrack");
    if (!attemptCrack.checked) {
        decryptFunction = encryptionMethods[encryptionMethodList.value].decryptFunction;
    }
    else {
        decryptFunction = encryptionMethods[encryptionMethodList.value].crackFunction;
    }
    var decryptedText = decryptFunction();
    var textInput = document.querySelector("#textInput");
    textInput.value = decryptedText;
});
