const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ["January", "February", "Maret", "April", "Mei", "Juni", "Agustus", "September", "Oktober", "November", "Desember"]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry data not found"), [])
        }
    }, 1000);
};
const showMonth = (error, arr) => {
    if (error) {
        console.log(error.message);;
    } else {
        arr.map((element) => {
            console.log(element);
        })
    }
}
getMonth(showMonth)