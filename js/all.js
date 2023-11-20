let loadTime = 10;
let loadNum = 0;

loadingNumber();

function loadingNumber() {
    loadNum += 1;
    const element = document.getElementById("loadNum");
    element.innerHTML = `${loadNum} %`;
    if (loadNum >= 100) {
        clearLoading();
    } else {
        setTimeout(function(){ loadingNumber() }, loadTime);
    }
}

function clearLoading() {
    const element = document.getElementById("loading");
    element.classList.add("d-none");
}