// Examples 1:
// Input:
//  matrix=[[1,1,1],[1,0,1],[1,1,1]]

// Output:
//  [[1,0,1],[0,0,0],[1,0,1]]

// Explanation:
//  Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.
 
// Input:
//  matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

// Output:
// [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Explanation:
// Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to


function setZeroes(matrix) {
    if (!matrix || matrix.length === 0) return;

    const rows = matrix.length;
    const cols = matrix[0].length;
    const zeroRows = new Set();
    const zeroCols = new Set();

    // First pass: identify all the rows and columns that need to be zeroed
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }

    // Second pass: set the identified rows and columns to zero
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (zeroRows.has(i) || zeroCols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
}

// Example usage
const matrix1 = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(matrix1);
console.log(matrix1); // Output: [[1,0,1],[0,0,0],[1,0,1]]

const matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(matrix2);
console.log(matrix2); // Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]





/////
function setZeroes(matrix) {
    if (!matrix || matrix.length === 0) return;

    const rows = matrix.length;
    const cols = matrix[0].length;
    const zeroRows = new Set();
    const zeroCols = new Set();

    // First pass: identify all the rows and columns that need to be zeroed
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }

    // Second pass: set the identified rows and columns to zero
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (zeroRows.has(i) || zeroCols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

// Example usage
const matrix1 = [[1,1,1],[1,0,1],[1,1,1]];
console.log(setZeroes(matrix1)); // Output: [[1,0,1],[0,0,0],[1,0,1]]

const matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
console.log(setZeroes(matrix2)); // Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]] matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
console.log(setZeroes(matrix2)); // Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

    const rows = matrix.length;
    const cols = matrix[0].length;
    const zeroRows = new Set();
    const zeroCols = new Set();

    // First pass: identify all the rows and columns that need to be zeroed
    for (let i = 0; i < rows;