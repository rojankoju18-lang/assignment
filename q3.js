const calculateDiscount=(amount) => {
    let discount = 0;
    if (amount>=5000) {
        return discount = amount * 0.2;
    } else if (amount>=3000) {
        return discount = amount * 0.15;
    } else if (amount>=1000) {
        return discount = amount * 0.1;
    } else {
        return discount = 0;
    }
}

const calculateFinalPrice=(amount, discount) => {
    return amount - discount;
}

const checkout=(customerName, amount, callback) => {
    const discount = callback(amount);
    const finalPrice = calculateFinalPrice(amount, discount);

    console.log("Customer:", customerName);
    console.log("Original Amount:", amount);
    console.log("Discount:", discount);
    console.log("Final Price:", finalPrice);
}

checkout("Ramesh", 6000, calculateDiscount);