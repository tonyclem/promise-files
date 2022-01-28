
// Await 
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: [ "water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;


function time(ms){
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("shop is closed"));
        }
    });
}

async function kitchen() {
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(0000)
        console.log("Start the production")

        await time(2000)
        console.log("cut the fruit")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`)

        await time(1000)
        console.log("Start the machine")

        await time(2000)
        console.log(`ice cream place on${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`)

        await time(2000)
        console.log("serve ice cream")
    }
    catch(error) {
        console.log("Customer left", error)
    }
    finally{
        console.log("day ended, shop is closed")
    }
}

kitchen();

// Await Preference to understand how it code
// async function order(){
//     try{}

//     catch(error){}

//     finally{}
// }


// it Just Example For me to understad more about it 
// let toppings_choice = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve(console.log("which topping will you love?"));
//         },3000)
//     })
// }

// async function kitchen () {
//     console.log("A")
//     console.log("B")
//     console.log("C")

//     await toppings_choice()

//     console.log("D")
//     console.log("E")

// }

// kitchen();

// console.log("Washing the dishes")
// console.log("Claning the tables")
// console.log("Taking the orders")
// the example ends here goood job clement smile