//fetch and show name only

import fetch from 'node-fetch';

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((json) => {
        json.forEach((element) => {
            console.log(element.name);
        });
    })
    .catch((err) => {
        console.log(err);
    });