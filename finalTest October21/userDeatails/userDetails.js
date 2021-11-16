const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (!urlParams.has('userData')) {
    let move_on = document.getElementById('move_on');
    let userName = document.getElementById('userName');
    let userEmail = document.getElementById('userEmail');

    move_on.addEventListener('click', (event) => {
        let email = userEmail.value;
        if (userName.value == '' || userEmail.value == '' || !email.includes('@')) {
            alert('please enter valid details')
        } else {
            // TODO: probably need to get relative path
            window.location.href = '&name=' + userName.value + '&email=' + userEmail.value
        }
    })
}





