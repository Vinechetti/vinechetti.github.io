function generateRandomNumber() {
    return Math.floor(100000000 + Math.random() * 900000000); // Generates a 9-digit number
}

function setRandomNumber() {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const storedDate = localStorage.getItem('storedDate');
    const storedNumber = localStorage.getItem('storedNumber');

    if (storedDate === today && storedNumber) {
        return storedNumber; // Return stored number if date matches today
    } else {
        const newNumber = generateRandomNumber();
        localStorage.setItem('storedDate', today);
        localStorage.setItem('storedNumber', newNumber);
        return newNumber;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const randomNumberElement = document.getElementById('number');
    const randomNumber = setRandomNumber();
    randomNumberElement.textContent = randomNumber;
});