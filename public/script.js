document.getElementById('messageForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send the data to the server
    const response = await fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    });

    // Handle response
    if (response.ok) {
        document.getElementById('confirmation').classList.remove('hidden');
        document.getElementById('messageForm').reset();
        setTimeout(() => {
            document.getElementById('confirmation').classList.add('hidden');
        }, 3000);
    } else {
        alert('Failed to send message. Please try again.');
    }
});