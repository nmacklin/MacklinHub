/**
 * Created by Nick on 12/27/2015.
 */
var encryptionMethods = {
    // Specify method name with object containing object with ancillary input fields
    // and encrypt/decrypt functions
    "Simple Keyword Cipher": {
        ancillaries: {
            ancillaryInput1: "Input keyword"
        },
        attemptCrack: true,
        crackFunction: simpleKeywordCipherCrack,
        encryptFunction: simpleKeywordCipherEncrypt,
        decryptFunction: simpleKeywordCipherDecrypt
    },

    "Please select method...": {
        ancillaries: null,
        attemptCrack: false,
        crackFunction: null,
        encryptFunction: function () {alert("Please select method")},
        decryptFunction: function () {alert("Please select method")}
    },

    "Vigenère Cipher": {
        ancillaries: {
            ancillaryInput1: "Input keyword"
        },
        attemptCrack: false,
        crackFunction: null,
        encryptFunction: vigenereCipherEncrypt,
        decryptFunction: vigenereCipherDecrypt
    }
};