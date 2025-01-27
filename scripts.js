document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('grid-container');
    const resetButton = document.getElementById('reset-grid');
    const DEFAULT_GRID_SIZE = 16;
    let isDrawing = false;

    // Function to create the grid
    function createGrid(size) {
        container.innerHTML = ''; // Clear existing grid
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            container.appendChild(cell);
        }
    }

    // Event delegation for drawing
    container.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('cell')) {
            isDrawing = true;
            event.target.classList.add('active');
        }
    });

    container.addEventListener('mouseover', (event) => {
        if (isDrawing && event.target.classList.contains('cell')) {
            event.target.classList.add('active');
        }
    });

    document.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    // Reset button logic
    resetButton.addEventListener('click', () => {
        let newSize = parseInt(prompt('Enter new grid size (e.g., 16 for 16x16):'));
        if (isNaN(newSize) || newSize < 1 || newSize > 100) {
            alert('Please enter a valid number between 1 and 100.');
        } else {
            createGrid(newSize);
        }
    });

    // Initialize default grid
    createGrid(DEFAULT_GRID_SIZE);
});
