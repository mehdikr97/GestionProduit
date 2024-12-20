const Product = require("./product");
const fs = require('fs')
const prompt = require('prompt-sync')();

class inventory {
  constructor() {
    this.produits = [];
    this.nextId = 1;
  } }