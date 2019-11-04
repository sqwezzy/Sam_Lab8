const name = document.getElementById('name');
const surname = document.getElementById('surname');

document.addEventListener('inputLoad', function() {
    let saveinfo = localStorage.getItem('savedData');
    if (saveinfo) {
        saveinfo = JSON.parse(saveinfo);
        name.value = saveinfo.name;
        surname.value = saveinfo.surname;
        localStorage.removeItem('savedData');
    }

    window.addEventListener('savedInfoInput', e => {
        if (name.value.length || surname.value.length) {
            let savedData = {
                name: name.value,
                surname: surname.value
            };
            localStorage.setItem('savedData', JSON.stringify(savedData));
        }
    });
});