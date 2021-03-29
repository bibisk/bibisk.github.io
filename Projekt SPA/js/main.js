// otwieranie menu
document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function() {
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});
// zamykanie menu
document.getElementsByClassName('mobile-close')[0].addEventListener('click', function() {
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});
// Ajax

const createAppointment = (appointment) => {
    const appointmentMessage = document.querySelector('.appointment-message');

    fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            method: 'POST',
            // nasz obiekt przechwowujący dane zamienione na stringa JSON, wysyłane jako zapytanie do serwera
            body: JSON.stringify(appointment)
                // następnie .then, odpowiedź zwrotna z serwera
        })
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON);
            appointmentMessage.classList.add('send');
            appointmentMessage.innerText = `Dziękujemy ${resJSON.appointment.name}. Zostałeś zapisany!`;
        });
}



// obsługa formularza
document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const appointmentMessage = document.querySelector('.appointment-message');
    let formFields = document.getElementsByClassName('form-field');

    // jeśli któreś z pól formularza jest puste, wyświetli się error: zadeklarowanie zmiennej
    let allFields = false;

    let appointment = {
        name: document.getElementById('appointment-name').value,
        email: document.getElementById('appointment-email').value,
        service: document.getElementById('appointment-service').value,
        phone: document.getElementById('appointment-phone').value,
        date: document.getElementById('appointment-date').value,
        time: document.getElementById('appointment-time').value,
        message: document.getElementById('appointment-message').value

    }




    // jeśli któreś z pól formularza jest puste, wyświetli się error: iterator po polach formularza
    for (let i = 0; i < formFields.length; i++) {
        if (formFields[i].value === '') {
            allFields = false;
            formFields[i].classList.add('error');
        } else {
            allFields = true;
            formFields[i].classList.remove('error');
        }
    }

    if (allFields) {
        createAppointment(appointment);
    } else {
        appointmentMessage.classList.add('error');
        appointmentMessage.innerText = `Wypełnij wymagane pola`;
    }

    console.log('wysyłanie');
})