document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;

    function showSection(index) {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        sections[index].style.display = 'block';
    }

    function nextSection() {
        currentSectionIndex = (currentSectionIndex + 1) % sections.length;
        showSection(currentSectionIndex);
    }

    function prevSection() {
        currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
        showSection(currentSectionIndex);
    }

    showSection(currentSectionIndex); // Show initial section

    document.querySelector('#personal-info button').addEventListener('click', function () {
        nextSection();
    });

    document.querySelector('#membership button:nth-of-type(1)').addEventListener('click', function () {
        prevSection();
    });

    document.querySelector('#membership button:nth-of-type(2)').addEventListener('click', function () {
        nextSection();
    });

    document.querySelector('#payment button:nth-of-type(1)').addEventListener('click', function () {
        prevSection();
    });

    document.querySelector('#payment button:nth-of-type(2)').addEventListener('click', function () {
        // Simulate payment validation (e.g., by checking if the card number and expiry date are filled)
        const cardNumber = document.querySelector('#card').value;
        const expiryDate = document.querySelector('#expiry').value;

        if (cardNumber.trim() === '' || expiryDate.trim() === '') {
            alert('Please fill in the card details.');
        } else {
            // Payment success
            alert('Payment successful!');
            // You can redirect to a confirmation page or perform other actions here
        }
    });
});
