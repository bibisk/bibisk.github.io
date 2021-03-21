$(document).ready(function() {
    $('#dane').click(function() {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function(data) {
                let pName = $('<p></p>').text(`Imię: ${data.imie}`);
                let pSurname = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
                let pProfession = $('<p></p>').text(`Zawód: ${data.zawod}`);
                let pCompany = $('<p></p>').text(`Firma: ${data.firma}`);
                let hr = $('<hr/>');

                let jqBody = $('#dane-programisty');

                jqBody.append(pName);
                jqBody.append(pSurname);
                jqBody.append(pProfession);
                jqBody.append(pCompany);
                jqBody.append(hr);

            })
            .fail(function(error) {
                console.error(error);
            });
    });

});