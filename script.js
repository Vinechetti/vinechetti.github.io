async function generateMushvigNumber() {
    const today = new Date();
    const dateString = `${today.getFullYear()}${(today.getMonth() + 1).toString().padStart(2, '0')}${today.getDate().toString().padStart(2, '0')}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(dateString);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = Array.from(new Uint8Array(hashBuffer))
        .map(byte => ('00' + byte.toString(16)).slice(-2))
        .join('')
        .substring(0, 9);
    const convertHexToNumber = (hexChar) => {
        const hexToNumber = {
            'a': '0', 'b': '1', 'c': '2', 'd': '3', 'e': '4', 'f': '5'
        };
        return hexToNumber[hexChar] || hexChar;
    };
    const hashedString = hashHex.split('').map(convertHexToNumber).join('');
    return hashedString;
}

generateMushvigNumber().then(hashedNumber => {
    document.getElementById('number').textContent = hashedNumber;
}).catch(error => {
    console.error('Error generating Mushvig Number:', error);
});