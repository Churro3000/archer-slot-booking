// Select the emoji element
const emojiElement = document.getElementById('emoji'); // Replace 'emoji' with the actual ID or selector for the emoji element

// Select Saturday and Sunday elements
const saturdayBtn = document.getElementById('saturday-btn');
const sundayBtn = document.getElementById('sunday-btn');
const saturdayContent = document.getElementById('saturday-content');
const sundayContent = document.getElementById('sunday-content');
const timeSlotsContainer = document.getElementById('time-slots-container');
const dynamicTableContainer = document.getElementById('dynamic-table-container');

// Function to hide or show Saturday and Sunday-related elements
function hideWeekendSlots() {
    // List of elements to toggle visibility
    const elements = [
        saturdayBtn,
        sundayBtn,
        saturdayContent,
        sundayContent,
        timeSlotsContainer,
        dynamicTableContainer,
    ];

    // Toggle 'hidden' class on each element
    elements.forEach((el) => {
        if (el) {
            el.classList.toggle('hidden'); // Ensure 'hidden' is defined in your CSS
        }
    });
}

// Add an event listener to the emoji for click events
if (emojiElement) {
    emojiElement.addEventListener('click', hideWeekendSlots);
}
