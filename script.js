document.getElementById('triangleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
        alert("Please enter valid positive numbers for all sides.");
        return;
    }

    const keliling = sideA + sideB + sideC;
    const s = keliling / 2;
    const luas = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    if (isNaN(luas)) {
        alert("The entered sides do not form a valid triangle.");
        return;
    }

    document.getElementById('luasResult').textContent = `Luas Segitiga: ${luas.toFixed(2)}`;
    document.getElementById('kelilingResult').textContent = `Keliling Segitiga: ${keliling.toFixed(2)}`;
});