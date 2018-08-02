function onLoad() {
    const button = document.querySelector('button');
    button.addEventListener('click', onClick);
}

function onClick(event) {
    const input = document.querySelector('input').value;
    event.preventDefault();
    div = document.querySelector('div');
    div.innerHTML = input;
}

document.addEventListener("DOMContentLoaded", onLoad);