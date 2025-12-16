// Données de référence pour les dropdowns
// Base de données: autocash

use autocash;

// Collection: typeVendeur
db.typeVendeur.deleteMany({});
db.typeVendeur.insertMany([
    { value: "Professionnel", label: "Professionnel", active: true },
    { value: "Particulier", label: "Particulier", active: true }
]);

// Collection: marques
db.marques.deleteMany({});
db.marques.insertMany([
    { value: "Audi", label: "Audi", active: true, logo: "https://logo.clearbit.com/audi.com" },
    { value: "BMW", label: "BMW", active: true, logo: "https://logo.clearbit.com/bmw.com" },
    { value: "Mercedes", label: "Mercedes-Benz", active: true, logo: "https://logo.clearbit.com/mercedes-benz.com" },
    { value: "Volkswagen", label: "Volkswagen", active: true, logo: "https://logo.clearbit.com/vw.com" },
    { value: "Renault", label: "Renault", active: true, logo: "https://logo.clearbit.com/renault.com" },
    { value: "Peugeot", label: "Peugeot", active: true, logo: "https://logo.clearbit.com/peugeot.com" },
    { value: "Dacia", label: "Dacia", active: true, logo: "https://logo.clearbit.com/dacia.fr" },
    { value: "Nissan", label: "Nissan", active: true, logo: "https://logo.clearbit.com/nissan.com" },
    { value: "Toyota", label: "Toyota", active: true, logo: "https://logo.clearbit.com/toyota.com" },
    { value: "Kia", label: "Kia", active: true, logo: "https://logo.clearbit.com/kia.com" },
    { value: "Hyundai", label: "Hyundai", active: true, logo: "https://logo.clearbit.com/hyundai.com" },
    { value: "Ford", label: "Ford", active: true, logo: "https://logo.clearbit.com/ford.com" },
    { value: "Opel", label: "Opel", active: true, logo: "https://logo.clearbit.com/opel.com" },
    { value: "Citroën", label: "Citroën", active: true, logo: "https://logo.clearbit.com/citroen.com" },
    { value: "Fiat", label: "Fiat", active: true, logo: "https://logo.clearbit.com/fiat.com" }
]);

// Collection: modeles (par marque)
db.modeles.deleteMany({});
db.modeles.insertMany([
    // Audi
    { marque: "Audi", value: "A3", label: "A3", active: true },
    { marque: "Audi", value: "A4", label: "A4", active: true },
    { marque: "Audi", value: "A5", label: "A5", active: true },
    { marque: "Audi", value: "A6", label: "A6", active: true },
    { marque: "Audi", value: "Q3", label: "Q3", active: true },
    { marque: "Audi", value: "Q5", label: "Q5", active: true },
    { marque: "Audi", value: "Q7", label: "Q7", active: true },

    // BMW
    { marque: "BMW", value: "Série 1", label: "Série 1", active: true },
    { marque: "BMW", value: "Série 3", label: "Série 3", active: true },
    { marque: "BMW", value: "Série 5", label: "Série 5", active: true },
    { marque: "BMW", value: "X1", label: "X1", active: true },
    { marque: "BMW", value: "X3", label: "X3", active: true },
    { marque: "BMW", value: "X5", label: "X5", active: true },

    // Mercedes
    { marque: "Mercedes", value: "Classe A", label: "Classe A", active: true },
    { marque: "Mercedes", value: "Classe C", label: "Classe C", active: true },
    { marque: "Mercedes", value: "Classe E", label: "Classe E", active: true },
    { marque: "Mercedes", value: "GLA", label: "GLA", active: true },
    { marque: "Mercedes", value: "GLC", label: "GLC", active: true },
    { marque: "Mercedes", value: "GLE", label: "GLE", active: true },

    // Volkswagen
    { marque: "Volkswagen", value: "Polo", label: "Polo", active: true },
    { marque: "Volkswagen", value: "Golf", label: "Golf", active: true },
    { marque: "Volkswagen", value: "Golf 8", label: "Golf 8", active: true },
    { marque: "Volkswagen", value: "Passat", label: "Passat", active: true },
    { marque: "Volkswagen", value: "Tiguan", label: "Tiguan", active: true },
    { marque: "Volkswagen", value: "Touareg", label: "Touareg", active: true },

    // Renault
    { marque: "Renault", value: "Clio 5", label: "Clio 5", active: true },
    { marque: "Renault", value: "Megane", label: "Megane", active: true },
    { marque: "Renault", value: "Kadjar", label: "Kadjar", active: true },
    { marque: "Renault", value: "Captur", label: "Captur", active: true },
    { marque: "Renault", value: "Koleos", label: "Koleos", active: true },

    // Peugeot
    { marque: "Peugeot", value: "208", label: "208", active: true },
    { marque: "Peugeot", value: "308", label: "308", active: true },
    { marque: "Peugeot", value: "2008", label: "2008", active: true },
    { marque: "Peugeot", value: "3008", label: "3008", active: true },
    { marque: "Peugeot", value: "5008", label: "5008", active: true },

    // Dacia
    { marque: "Dacia", value: "Sandero", label: "Sandero", active: true },
    { marque: "Dacia", value: "Logan", label: "Logan", active: true },
    { marque: "Dacia", value: "Duster", label: "Duster", active: true },
    { marque: "Dacia", value: "Lodgy", label: "Lodgy", active: true },

    // Toyota
    { marque: "Toyota", value: "Yaris", label: "Yaris", active: true },
    { marque: "Toyota", value: "Corolla", label: "Corolla", active: true },
    { marque: "Toyota", value: "Camry", label: "Camry", active: true },
    { marque: "Toyota", value: "RAV4", label: "RAV4", active: true },
    { marque: "Toyota", value: "Land Cruiser", label: "Land Cruiser", active: true }
]);

// Collection: annees (1ère mise en circulation)
db.annees.deleteMany({});
const currentYear = 2025;
const years = [];
for (let year = currentYear; year >= 2010; year--) {
    years.push({ value: year.toString(), label: year.toString(), active: true });
}
db.annees.insertMany(years);

// Collection: pays (Mise en circulation)
db.pays.deleteMany({});
db.pays.insertMany([
    { value: "MA", label: "Maroc", code: "MA", active: true },
    { value: "FR", label: "France", code: "FR", active: true },
    { value: "ES", label: "Espagne", code: "ES", active: true },
    { value: "DE", label: "Allemagne", code: "DE", active: true },
    { value: "IT", label: "Italie", code: "IT", active: true },
    { value: "BE", label: "Belgique", code: "BE", active: true },
    { value: "NL", label: "Pays-Bas", code: "NL", active: true },
    { value: "UK", label: "Royaume-Uni", code: "UK", active: true }
]);

// Collection: villes (Maroc)
db.villes.deleteMany({});
db.villes.insertMany([
    { value: "Casablanca", label: "Casablanca", region: "Casablanca-Settat", active: true },
    { value: "Rabat", label: "Rabat", region: "Rabat-Salé-Kénitra", active: true },
    { value: "Marrakech", label: "Marrakech", region: "Marrakech-Safi", active: true },
    { value: "Fès", label: "Fès", region: "Fès-Meknès", active: true },
    { value: "Tanger", label: "Tanger", region: "Tanger-Tétouan-Al Hoceïma", active: true },
    { value: "Agadir", label: "Agadir", region: "Souss-Massa", active: true },
    { value: "Meknès", label: "Meknès", region: "Fès-Meknès", active: true },
    { value: "Oujda", label: "Oujda", region: "Oriental", active: true },
    { value: "Kenitra", label: "Kenitra", region: "Rabat-Salé-Kénitra", active: true },
    { value: "Tétouan", label: "Tétouan", region: "Tanger-Tétouan-Al Hoceïma", active: true },
    { value: "Salé", label: "Salé", region: "Rabat-Salé-Kénitra", active: true },
    { value: "Temara", label: "Temara", region: "Rabat-Salé-Kénitra", active: true },
    { value: "Mohammedia", label: "Mohammedia", region: "Casablanca-Settat", active: true },
    { value: "El Jadida", label: "El Jadida", region: "Casablanca-Settat", active: true },
    { value: "Beni Mellal", label: "Beni Mellal", region: "Béni Mellal-Khénifra", active: true }
]);

// Collection: carburants
db.carburants.deleteMany({});
db.carburants.insertMany([
    { value: "Essence", label: "Essence", active: true },
    { value: "Diesel", label: "Diesel", active: true },
    { value: "Hybride", label: "Hybride", active: true },
    { value: "Électrique", label: "Électrique", active: true },
    { value: "GPL", label: "GPL", active: true }
]);

print("\n✅ Toutes les données de référence ont été insérées!");
print("\n📊 Résumé:");
print("Type vendeur: " + db.typeVendeur.countDocuments());
print("Marques: " + db.marques.countDocuments());
print("Modèles: " + db.modeles.countDocuments());
print("Années: " + db.annees.countDocuments());
print("Pays: " + db.pays.countDocuments());
print("Villes: " + db.villes.countDocuments());
print("Carburants: " + db.carburants.countDocuments());
