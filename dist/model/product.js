"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, description, price) {
        this.id = 10;
        this.name = "copo plástico";
        this.description = "um copo feito do material plástico";
        this.price = 2.99;
        this.name = name;
        this.description = description;
        this.price = price;
        this.id = this.geraId();
    }
    geraId() {
        return Date.now();
    }
}
exports.Product = Product;
