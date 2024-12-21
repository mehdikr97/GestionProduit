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
    let name;

    do {
        name = prompt("Entrez le nom du produit :")
        if (!name) {
            console.log("Le nom du produit ne peut pas être vide. Veuillez réessayer.");
        }
    } while (!name);
        const description = prompt("Entrer la Description de produit :");
        let quantity;
        do {
            quantity = parseInt(prompt("Entrez la quantité de produit :"));
            if (isNaN(quantity) || quantity <= 0) {
                console.log("entrer une quantite valide ");
            } 
        } while (isNaN(quantity) || quantity <= 0);
    let price ;
    do {
      price = parseFloat(prompt("Entrez le prix de produit :"));
      if (isNaN(price) || price <= 0) {
          console.log("entrer un prix valide ");
      }
  } while (isNaN(price) || price <= 0);
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
  }}
  const inva = new inventory();
while (true) {
  console.log("1-Ajouter un produit")
  console.log("2-afficher les produit")
  console.log("3-Supprimer les produit")
  console.log("4-modifier les produit")

  console.log("5-Quitter le programme")

  const choix = prompt("Choisissez une option : ");

  switch (choix) {
    case '1': inva.ajouter_unproduit()
      break;
    case '2': inva.afficher_produit()
      break;
    case '3': inva.suprimmerProduit()

      break;
    case '4': inva.modifierProduit()
      break;
    case '5': return
    default: console.log("choix invalide")
  }
}










