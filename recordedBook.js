const inpName = document.getElementById('recordedName');
const inpPhone = document.getElementById('phone');
const recordBook = document.getElementById('book');
const btnRecord = document.getElementById('btnRecord');

btnRecord.addEventListener('click', recordedBook);

btnRecord.onclick = function(e) {
    inpName.value = '';
    inpPhone.value = '';
};

function recordedBook() {
    const name = inpName.value;
    const phone = inpPhone.value;
    if (name && phone) {
        localStorage.setItem(name, phone);
    }
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    recordBook.innerHTML += `${key} : ${value}<br/>`
}
}