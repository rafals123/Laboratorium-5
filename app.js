const express = require('express');
const app = express();
const port = 3000;
const os = require('os');
const fetch = require('node-fetch').default;

function waitForAppReady() {
    return new Promise(resolve => {
        setTimeout(resolve, 5000); 
    });
}

async function main() {
    await waitForAppReady(); 
    var hostname = os.hostname();
    app.get('/', (req, res) => {
        fetch('https://httpbin.org/ip')
            .then(response => response.json())
            .then(data => {
                response = "Hostname: " + hostname + "<br>" +
                    "Adres IP: " + data.origin + "<br>" +
                    "Wersja aplikacji: " + process.env.APP_VERSION + "<br>";
                    console.log(process.env.APP_VERSION);
                res.send(response);
            }).catch(err => {
                console.log(err);
                res.send(`Wystapil blad: ${err}`);
            });
    });

    app.listen(port, () => {
        console.log(`Aplikacja dziala na porcie: ${port}`)
    });
}

main().catch(console.error);
