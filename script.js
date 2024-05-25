function encryptMessage() {
    const plainTextInput = document.getElementById('plainTextInput').value;
    const password = document.getElementById('encryptPasswordInput').value;
    const encryptedMessage = encrypt(plainTextInput, password);
    document.getElementById('encryptedMessage').textContent = encryptedMessage;
}

function decryptMessage() {
    const encryptedTextInput = document.getElementById('encryptedTextInput').value;
    const password = document.getElementById('decryptPasswordInput').value;
    const decryptedMessage = decrypt(encryptedTextInput, password);
    document.getElementById('decryptedMessage').textContent = decryptedMessage;
}

function encrypt(text, password) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        const key = password.charCodeAt(i % password.length); // Repeat password if shorter than text
        encryptedText += String.fromCharCode(charCode ^ key);
    }
    return btoa(encryptedText); // Convert encrypted text to base64 for better representation
}

function decrypt(text, password) {
    const decryptedText = atob(text); // Convert from base64
    let decryptedMessage = '';
    for (let i = 0; i < decryptedText.length; i++) {
        const charCode = decryptedText.charCodeAt(i);
        const key = password.charCodeAt(i % password.length); // Repeat password if shorter than text
        decryptedMessage += String.fromCharCode(charCode ^ key);
    }
    return decryptedMessage;
}
