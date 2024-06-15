async function generateRandomNumber() {
    try {
        const response = await fetch('https://vinechetti.xyz/files/mushvigNumber.json');
        if (!response.ok) {
            throw new Error('Failed to fetch number');
        }
        const data = await response.json();
        const today = new Date().toISOString().split('T')[0];
        if (data.date === today && data.number) {
            document.getElementById('number').textContent = data.number;
        } else {
            const newNumber = Math.floor(100000000 + Math.random() * 900000000);
            const newData = { date: today, number: newNumber };
            const saveResponse = await fetch('https://vinechetti.xyz/server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newData)
            });
            if (!saveResponse.ok) {
                throw new Error('Failed to save new number');
            }
            document.getElementById('number').textContent = newNumber;
        }
    } catch (error) {
        console.error(error);
        alert('Failed to get or save random number. Please try again later.');
    }
}

window.onload = async function () {
    try {
        const response = await fetch('https://vinechetti.xyz/files/mushvigNumber.json');
        if (!response.ok) {
            throw new Error('Failed to fetch number');
        }
        const data = await response.json();
        document.getElementById('number').textContent = data.number;
    } catch (error) {
        console.error(error);
        alert('Failed to get random number. Please try again later.');
    }
};