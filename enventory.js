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
  afficher_produit() {
    const data = fs.readFileSync('produits.json', 'utf-8');
    this.produits = JSON.parse(data);
    console.log("Liste de produits");
    this.produits.forEach((product, index) => {
      console.log(` ${index + 1} - Nom: ${product.name}, 
    Description ${product.description},
    Quantite : ${product.quantity}, Prix ${product.price}`)
    })
  }
  suprimmerProduit() {
    console.log("1. Supprimer un produit par ID");
    let id = prompt("Entrez l'ID du produit à supprimer : ");
    this.produits.splice(id - 1, 1);
    console.log("produit supprime")
    fs.writeFileSync("produits.json", JSON.stringify(this.produits));
  }
  modifierProduit() {
    console.log("1. Modifier un produit par ID");
    let id = parseInt(prompt("Entrez l'ID du produit à modifier : "));

    let products = JSON.parse(fs.readFileSync('produits.json', 'utf8'));
    const resultat = products[id -1];

    resultat.name = prompt("Entrer le nouveau nom ")
    resultat.description = prompt("Entrer la nouvelle description ")
    resultat.quantity = parseInt(prompt("Entrer la nouvelle quantité "))
    resultat.price = parseFloat(prompt("Entrer le nouveau prix "))
//    products.push(resultat)
    fs.writeFileSync('produits.json', JSON.stringify(products), 'utf8');
  }










}