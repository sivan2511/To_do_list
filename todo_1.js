let input = document.getElementById("input");
let btn = document.getElementById("add");
let tasks = document.getElementById('tasks'); 

function submitHandler() {
    let item = input.value;
    console.log(item);

    let li = document.createElement('li');
    li.textContent = item;

    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'x';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function() {
        tasks.removeChild(li);
    };

    li.appendChild(removeBtn);
    tasks.appendChild(li);

    input.value = ''; // Clear the input field after adding
}