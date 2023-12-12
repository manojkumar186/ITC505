document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById("board");
    

    // Create the initial board
    createBoard();

    // Add click event listener to each square
    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('click', () => {
            toggleSquareAndNeighbors(square);
            setTimeout(checkWin, 700); // Use setTimeout to delay the checkWin function
        });
    });


    // Function to create the initial random solvable board
    function createBoard() {
        const squares = [];

        // Create the squares
        for (let i = 0; i < 25; i++) {
            const square = document.createElement('div');
            square.className = 'square';
            board.appendChild(square);
            squares.push(square);
        }

        // Randomly toggle some squares to create a solvable board
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * 25);
            toggleSquareAndNeighbors(squares[randomIndex]);
        }
    }

    // Function to toggle the color of a square and its neighbors
    function toggleSquareAndNeighbors(square) {
        toggleSquare(square);

        const index = Array.from(square.parentNode.children).indexOf(square);
        const row = Math.floor(index / 5);
        const col = index % 5;

        const neighbors = [
            { row: row - 1, col: col },
            { row: row + 1, col: col },
            { row: row, col: col - 1 },
            { row: row, col: col + 1 }
        ];

        neighbors.forEach(neighbor => {
            if (neighbor.row >= 0 && neighbor.row < 5 && neighbor.col >= 0 && neighbor.col < 5) {
                const neighborIndex = neighbor.row * 5 + neighbor.col;
                toggleSquare(square.parentNode.children[neighborIndex]);
            }
        });
    }

    // Function to toggle the color of a square
    function toggleSquare(square) {
        square.classList.toggle('is-off');
    }

    // Function to check if the user has won
    function checkWin() {
        const whiteSquares = document.querySelectorAll('.square:not(.is-off)');
        if (whiteSquares.length === 0) {
            window.alert('You win!');
        }
    }

});
