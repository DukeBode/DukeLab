function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2)
}

function displayDate() {
    document.getElementById("date").innerHTML = Date();
}

function start() {
    // alert(fibonacci(10))
    setInterval(displayDate, 60);
}

onload = start;