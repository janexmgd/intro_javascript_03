// make a 2 progam with promise


//cek winner

// const randomNumber = (limit) => {
//     return new Promise((resolve, reject) => {
//         console.log(`----LOADING RANDOM NUMBER----`);
//         setTimeout(() => {
//             //limit must number type data
//             if (typeof (limit) == "number") {
//                 //limit must more than zero
//                 if (limit > 0) {
//                     for (let i = 1; i <= limit; i++) {
//                         //randomthis?(0.xx * MX)MN 
//                         const randomthis = Math.floor((Math.random() * 10) + 1);
//                         resolve(randomthis)
//                     }
//                 } else {
//                     reject(new Error("Maaf paramater limit harus lebih dari 1"))
//                 }
//             } else {
//                 reject(new Error("Maaf parameter limit harus berupa number"))
//             }
//         }, 1000);
//     })
// }

// //call
// randomNumber("1")
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     })
//     .finally(() => {
//         console.log("Kode selesai");
//     })





//random id    

const randomID = (idlength) => {
    return new Promise((resolve, reject) => {
        console.log("-----GET UR RANDOM ID-----");
        setTimeout(() => {
            if (typeof (idlength) == "number") {
                if (idlength > 0) {
                    const abj = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
                    let text = ''
                    for (var i = 1; i <= idlength; i++) {
                        text = text + abj.charAt(Math.floor(Math.random() * abj.length))
                    }
                    resolve(text)
                } else {
                    reject(new Error("Parameter idlength harus lebih dari 0"))
                }
            } else {
                reject(new Error("parameter idlength harus bertype data number"))
            }
        }, 5000);
    })
}
randomID("kkk")
    .then((newstr) => {
        console.log(newstr);
    })
    .catch((err) => {
        console.log(err.message);
    })
    .finally(() => {
        console.log("Kode selesai");
    })