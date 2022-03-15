const fetch = (...args) => import('node-fetch').then(({
    default: fetch
}) => fetch(...args));
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
        json.forEach((element) => {
            console.log(element.name);
        });
    })
    .catch((err) => {
        console.log(err);
    });