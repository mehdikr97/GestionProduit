const Product = require("./product");
const fs = require('fs')
const prompt = require('prompt-sync')();

class inventory {
  constructor() {
    this.produits = [];
    this.nextId = 1;
  } 
  ajouter_unproduit() {
    this.nextId = this.nextId++;
    const name = prompt("Entrer le nom de produit :");
    const description = prompt("Entrer la Description de produit :");
    const quantity = parseInt(prompt("Entrer la quantite de produit :"));
    const price = parseFloat(prompt("Entrer le prix de produit :"));
    const product = new Product(name, description, quantity, price);
    this.produits.push(product);
    fs.writeFileSync('produits.json', JSON.stringify(this.produits, null, 2))
    console.log("produit enregistree")
  }











}