let countEl = document.getElementById('count');
let prevEl = document.getElementById('prev');
let count = 0;
function increment(){
    count += 1;
    countEl.textContent = count;
};

function save(){
    prevEl.textContent += " " + count;
    countEl.textContent = 0;
    count = 0;
    prev.style.marginLeft='40px';
    prev.style.marginRight='40px';
};

function reset(){
    countEl.textContent = 0;
    count = 0;
};
function clearHistory(){
    countEl.textContent = 0;
    count = 0;
    prev.textContent = "History: ";
};