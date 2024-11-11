let price = 80;
let final_price = 0;

let destination = prompt("Enter destination (domestic or international):").toLowerCase();

// Menghitung harga dasar berdasarkan tujuan
if (destination === "domestic") {
    price += 30;
} else if (destination === "international") {
    price += 650;
} else {
    console.log("Spelling error detected in destination input!");
}

console.log(`Ticket Price: ${price}`);

// Melanjutkan perhitungan berdasarkan input pengguna
let bag_weight = parseInt(prompt("Enter bag weight:"));
if (bag_weight > 19) {
    price += 35;
}

final_price = price;

// Menampilkan biaya per perjalanan
console.log("\n==== Trip Details ====");
console.log(`Base Trip Cost: $${price - 35}`);
if (bag_weight > 19) {
    console.log(`Bag Weight Charge: $${35}`);
}
console.log(`Destination Charge: ${destination === 'domestic' ? "$30" : "$650"}`);

// Menampilkan harga total
console.log(`\nTotal Ticket Price: $${final_price}`);

// Opsi tambahan: Makanan
let add_meal = prompt("Would you like to add a meal for an additional $50? (yes or no):").toLowerCase();
if (add_meal === "yes") {
    final_price += 50;
    console.log("Meal service added. Total updated.");
}

// Opsi tambahan: Asuransi
let add_insurance = prompt("Would you like to add travel insurance for $100? (yes or no):").toLowerCase();
if (add_insurance === "yes") {
    final_price += 100;
    console.log("Travel insurance added. Total updated.");
}

// Opsi tambahan: Mobil
let add_cars = prompt("Would you like to add a car for trip at an extra $350? (yes or no):").toLowerCase();
if (add_cars === "yes") {
    final_price += 200;
    console.log("Trip cars added. Total updated.");
}

// Menampilkan ringkasan akhir
console.log("\n==== Final Ticket Summary ====");
console.log(`Final Ticket Price: $${final_price}`);
console.log("Thank you for using our ticketing service!");
