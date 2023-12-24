// Get the "No" button
var noButton = document.getElementById('no');

// Define target positions around the GIF
var targetPositions = [
    { x: 50, y: 50 },
    { x: 150, y: 50 },
    { x: 250, y: 50 },
    { x: 50, y: 150 },
    { x: 250, y: 150 },
    { x: 50, y: 250 },
    { x: 150, y: 250 },
    { x: 250, y: 250 }
];

// Track the number of movements
var movementsCount = 0;

// Function to move the "No" button to a random position
function moveNoButton() {
    // Choose a random target position
    var randomIndex = Math.floor(Math.random() * targetPositions.length);
    var targetPosition = targetPositions[randomIndex];

    // Apply a CSS transform to move only the "No" button to the chosen position
    noButton.style.transform = 'translate(' + targetPosition.x + 'px, ' + targetPosition.y + 'px)';

    // Increment the movements count
    movementsCount++;
}

// Event listener for the "No" button on mouseover
noButton.addEventListener('mouseover', moveNoButton);

// Event listener for the "No" button on click
noButton.addEventListener('click', moveNoButton);

// Event listener for the "Yes" button on click
document.getElementById('yes').addEventListener('click', function () {
    // Redirect to the cute page
    window.location.href = 'cutePage.html';
});
