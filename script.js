// JavaScript to change the background color when the button is clicked
document.getElementById('colorButton').addEventListener('click', function() {
    // Array of colors to choose from
    const colors = ['#f0f4f8', '#f39c12', '#8e44ad', '#e74c3c', '#2ecc71', '#3498db'];
    
    // Select a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
});
