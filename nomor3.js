//cek winner
const randomNumber = (limit) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false
            console.log(`----LOADING RANDOM NUMBER----`);
            if (!error) {
                resolve(limit)
            } else {
                reject(new Error('maaf tidak dapat menampilkan data'))
            }
        }, 10);
    })
}
randomNumber(1)
    .then((limit) => {
        for (let i = 1; i <= limit; i++) {
            //randomthis?(0.xx * MX)MN 
            const randomthis = Math.floor((Math.random() * 10) + 1);
            console.log("The winner is number " + randomthis);
        }
    })
    .catch((err) => {
        console.log(err.message);
    })
    .finally(() => {
        console.log("Kode selesai");
    })





//random id    

// const randomID = () => {
//     return new Promise((resolve, reject) => {
//         console.log("-----GET UR RANDOM ID-----");
//         setTimeout(() => {
//             let user = true
//             const abj = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//             if (user) {
//                 resolve(abj)
//             } else {
//                 reject(new error("Maaf otentikasi tidak berhasil"))
//             }
//         }, 5000);
//     })
// }
// randomID()
//     .then((str) => {
//         let text = ''
//         for (var i = 0; i < 8; i++)
//             text = text + str.charAt(Math.floor(Math.random() * str.length));
//         console.log(text);
//     })
//     .catch((err) => {
//         console.log(err);
//     })