
const ads = document.getElementById("ads");
const btnClose = document.getElementById("btnClose");
btnClose.addEventListener("click", close);

let dateNow = new Date(Date.now());
window.onload = () => {
    ads.style.display = getCookie('clickClose') < dateNow.toUTCString() ? 'block' : 'none';
};


function getCookie(cookieName) {
    const results = document.cookie.match(`(^|;) ?${cookieName}=([^;]*)(;|$)`);
    return results ? (unescape(results[2])) : null;
}

function close() {
    let date = new Date(Date.now() + 3000).toUTCString();
    document.cookie = `clickClose=${date}`;
    ads.style.display = "none";
}