let endOfThePage = 0;

let preLoading = false;


const showPreloader = () => {
    let preloader = document.getElementById('wrap');
    console.log(`showPreloader()`);
    preloader.style.display = 'block';
    preLoading = true;
}

const hidePreloader = () => {
    let preloader = document.getElementById('wrap');
    console.log(`hidePreloader()`);
    preloader.style.display = 'none';
    preLoading = false;
}



const getData = () => {
    if (!preLoading) {

        showPreloader();

        fetch('https://akademia108.pl/api/ajax/get-users.php')
            .then(res => res.json())
            .then(data => {


                let body = document.body;
                let hr = document.createElement('hr');
                body.appendChild(hr);

                // tablica z userami - data
                for (let user of data) {
                    let pId = document.createElement('p');
                    let pName = document.createElement('p');
                    let pWebsite = document.createElement('p');

                    pId.innerText = `User ID: ${user.id}`;
                    pName.innerText = `User Name: ${user.name}`;
                    pWebsite.innerHTML = `User URL: ${user.website}<br/>---------`;

                    let body = document.body;

                    body.appendChild(pId);
                    body.appendChild(pName);
                    body.appendChild(pWebsite);


                }

                hidePreloader();

            })
            .catch(error => {
                console.log(error);
            })

    }
}

const scrollToEndOfPage = () => {

    let d = document.documentElement;

    // height of an element's content, including content 
    // not visible on the screen
    let scrollHeight = d.scrollHeight;

    // number of pixels that an element's content is scrolled vertically
    let scrollTop = d.scrollTop;

    // inner height of an element in pixels
    let clientHeight = d.clientHeight;

    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

    if (sumScrollTopClientHeight >= scrollHeight) {

        endOfThePage += 1;

        console.log(`Scrolled to the end of page ${endOfThePage}`);

        getData();
    }

    console.log(`scrollHeight: ${scrollHeight}`);
    console.log(`scrollTop: ${scrollTop}`);
    console.log(`clientHeight: ${clientHeight}`);
    console.log(sumScrollTopClientHeight);

    getData();

}

window.addEventListener('scroll', scrollToEndOfPage);