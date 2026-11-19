document.getElementById("btn1").addEventListener("click", display);

function display() {
    const myno1 = Number(document.getElementById("num1").value || 0);
    const myno2 = Number(document.getElementById("num2").value || 0);
    const ans = myno1 + myno2;
    document.getElementById("demo1").textContent = "Addition: " + ans;
}