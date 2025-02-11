console.log("Hello");

// TASK 1

let products = [
    { name: "Laptop", price: 1200, category: "Electronics" }, // T
    { name: "Phone", price: 800, category: "Electronics" }, // T
    { name: "Desk Chair", price: 150, category: "Furniture" } // F
];

// function getProductsByCategory(products, category) {
    // return product_array.filter(product => product.category === category_name);
// }

// console.log(getProductsByCategory(products, "Electronics"));

// TASK 2

function applyDiscount(products, discountRate) {
    return products.map(product => ({
        ...product,
        price: product.price - (product.price * discountRate)
        name: product.name.toUpperCase()
    }

    ))
}

console.log(applyDiscount(products, .1));
console.log("*".repeat(20))
console.log(products)

// TASK 3

let sales = [250, 400, 150, 900, 1200];

function calculateTotalRevenue(sales) {
    return sales.redcue((total, sale)=>total+sale,0)

}

console.log(`Total Rev. 2024: $${calculateTotalRevenue(sales)}`)

