const { data } = require('./products');

let is_ok = true;

const customFetch = () => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(data);
            }, 2000);
            } else {
                reject("KO");
            }
        })
}

export default customFetch;