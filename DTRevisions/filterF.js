const transactions=[
    { type: 'credit', amount: 80, date: '2025-01-01' },
    { type: 'debit', amount: 150, date: '2025-01-02' },
    { type: 'credit', amount: 250, date: '2025-01-03' }
];


//filter transactions of type credit and amount > 100
const largeCredits=transactions.filter((transaction)=>(transaction.type=="credit" && transaction.amount>100));

console.log(largeCredits);


/* 
Reduce Use Case: Calculate the total number of items across all carts, 
starting with an inventory baseline of 50.
*/

const carts=[
    { userID: 1, items: 3 },
    { userID: 2, items: 7 },
    { userID: 3, items: 5 }
];

let total=carts.reduce((acc, cart)=>{
    acc=acc+cart.items;
    return acc;
}, 50);

console.log(total); //65

//Use case3: Find the total price of all items that are currently in stock.

const products=[
    { name: 'A', price: 10, inStock: true },
    { name: 'B', price: 5, inStock: false },
    { name: 'C', price: 20, inStock: true }
];

let totalPrice=products.reduce((acc, product)=>{
    if(product.inStock) acc=acc+product.price;
    return acc;
},0);

console.log(totalPrice);

//another way of doing it by using filter

const products2=products;
let totalPrice2=products2.filter((product)=>product.inStock).reduce(
    (acc, product)=>{return acc+product.price},0
);

console.log(totalPrice2);


