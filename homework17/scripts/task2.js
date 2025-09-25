"use strict";
// Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми
class Warehouse {
    constructor() {
        this.products = [];
    }
    registerProduct(product) {
        const existingProduct = this.products.find((p) => p.name === product.name &&
            p.manufacturer.registrationNumber ==
                product.manufacturer.registrationNumber);
        if (existingProduct) {
            existingProduct.quantity += product.quantity;
        }
        else {
            this.products.push(product);
        }
    }
    shipProduct(name, registrationNumber, quantity) {
        const product = this.products.find((p) => p.name === name &&
            p.manufacturer.registrationNumber === registrationNumber);
        if (!product)
            return false;
        if (product.quantity < quantity)
            return false;
        product.quantity -= quantity;
        if (product.quantity === 0) {
            this.products = this.products.filter((p) => p !== product);
        }
        return true;
    }
    filterByProductName(name) {
        return this.products.filter((p) => p.name.toLowerCase() === name.toLowerCase());
    }
    filterByManufacturerName(manufacturerName) {
        return this.products.filter((p) => p.manufacturer.name.toLowerCase() === manufacturerName.toLowerCase());
    }
    listProducts() {
        return [...this.products];
    }
}
const warehouse = new Warehouse();
warehouse.registerProduct({
    name: "Apple",
    unit: "kg",
    quantity: 100,
    manufacturer: { name: "FruitCo", registrationNumber: "12345" },
});
warehouse.registerProduct({
    name: "Pear",
    unit: "kg",
    quantity: 50,
    manufacturer: { name: "FruitLTD", registrationNumber: "67890" },
});
warehouse.registerProduct({
    name: "Apple",
    unit: "kg",
    quantity: 50,
    manufacturer: { name: "FruitCo", registrationNumber: "12345" },
});
const shipped = warehouse.shipProduct("Apple", "12345", 30);
console.log("Відвантаження Apple:", shipped);
const apples = warehouse.filterByProductName("Apple");
console.log("Фільтр за назвою товару 'Apple':", apples);
const fruitCoProducts = warehouse.filterByManufacturerName("FruitCo");
console.log("Фільтр за назвою фірми 'FruitCo':", fruitCoProducts);
console.log("Весь склад:", warehouse.listProducts());
