
const breakfastPromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        // resolve('Your order is ready. Come and get it!');
        reject('Oh No! There was a problem with your order!');
    }, 3000)
});

console.log(breakfastPromise);
breakfastPromise.then(  val => console.log(val))
    .catch( err => console.log(err));