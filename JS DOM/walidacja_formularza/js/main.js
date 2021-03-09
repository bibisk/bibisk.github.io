let newsletterForm = document.getElementById('newsletter-form');
// console.log(newsletterForm);
let allAgreeChx = document.getElementById('all-agree');
// console.log(allAgreeChx);

const validate = (event) => {
    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    // czyszczenie listy
    errors.innerHTML = '';

    if (txtName.value.trim() === '') {
        // tworzy nowy element listy
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Imię i nazwisko!';
        // dopisuje się na końcu ul nowy element
        errors.appendChild(liError);
    }
    if (txtEmail.value.trim() === '') {
        // tworzy nowy element listy
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Adres e-mail!';
        // dopisuje się na końcu ul nowy element
        errors.appendChild(liError);
    }
    if (!txtEmail.value.includes('@')) {
        // tworzy nowy element listy
        let liError = document.createElement('li');
        liError.innerText = 'Adres e-mail musi zawierać @ !';
        // dopisuje się na końcu ul nowy element
        errors.appendChild(liError);
    }
    if (!agree1.checked) {
        // tworzy nowy element listy
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłeś Zgody 1';
        // dopisuje się na końcu ul nowy element
        errors.appendChild(liError);
    }

    if (errors.children.length > 0) {
        event.preventDefault();
    }

}


const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
    // console.log(event.target.checked);
}

newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);