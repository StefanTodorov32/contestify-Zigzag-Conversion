function ZigzagConversion(s, numRows) {
    if (numRows === 1) return s;  // Special case for single row, no zigzag possible
    
    const rows = new Array(numRows).fill('');
    let currentRow = 0;
    let goingDown = false;
    
    // Traverse through the string and distribute characters across rows
    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s[i];
        
        // Change direction when we reach the first or the last row
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }
        
        // Move up or down
        currentRow += goingDown ? 1 : -1;
    }
    
    // Join all rows to get the final zigzag string
    return rows.join('');
}

module.exports = ZigzagConversion;
