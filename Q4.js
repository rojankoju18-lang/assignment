const getTicketPrice = (age) => {
    let price = 0;
    if (age<12) {
        return price =150;
    } else if (age>=12 && age<=17) {
        return price = 200;
    } else if (age>=18 && age<=59) {
        return price = 300;
    }
    else {
        return price = 250;
    }
}

const calculateTotal=(price, quantity) => {
    return price * quantity;
}

const applyDiscount=(total, quantity) => {
    if (quantity>=5) {
        return  total - (total * 10 / 100);
    }
    return total;
}

const bookTickets=(Name, age, quantity, callback) => {
    const price = callback(age);
    const total = calculateTotal(price, quantity);
    const finalPrice = applyDiscount(total, quantity);

    console.log("Customer Name: " + Name);
    console.log("Customer Age: " + age);
    console.log("Ticket Quantity: " + quantity);
    console.log("Ticket Price: Rs. " + price);
    console.log("Final Amount: Rs. " + finalPrice);
}

bookTickets("Sita", 25, 3, getTicketPrice);