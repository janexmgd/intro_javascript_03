//make callback function to show with map and handle error


const getMonth = (callback) => {
    setTimeout(() => {
        let error = true
        let month = ["January", "February", "Maret", "April", "Mei", "Juni", "Agustus", "September", "Oktober", "November", "Desember"]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry data not found"), [])
        }
    }, 4000);
};

//handle error
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