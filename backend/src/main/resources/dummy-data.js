// Sélectionner la base de données
db = db.getSiblingDB('autocash');

// Supprimer et insérer les véhicules
db.vehicles.deleteMany({});

db.vehicles.insertMany([
    {
        reference: "VEH-001",
        model: "A5",
        marque: "Audi",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
        ville: "Casablanca",
        adresse: "BD 2e Mars N°1",
        kilometrage: 45000,
        premiereCirculation: "2022",
        miseEnCirculation: "MA",
        carburant: "Diesel",
        prix: 450000,
        status: "Publiée",
        typeVendeur: "Professionnel",
        nomVendeur: "AutoClic Maroc",
        telVendeur: "+212 5849 39 48",
        emailVendeur: "contact@autoclic.ma",
        createdAt: new Date("2025-12-07T10:00:00Z"),
        updatedAt: new Date("2025-12-07T10:00:00Z")
    },
    {
        reference: "VEH-002",
        model: "Série 3",
        marque: "BMW",
        ville: "Rabat",
        kilometrage: 32000,
        premiereCirculation: "2023",
        miseEnCirculation: "MA",
        carburant: "Essence",
        prix: 520000,
        status: "Publiée",
        typeVendeur: "Professionnel",
        nomVendeur: "BMW Maroc",
        createdAt: new Date("2025-12-04T14:30:00Z"),
        updatedAt: new Date("2025-12-04T14:30:00Z")
    },
    {
        reference: "VEH-003",
        model: "Classe C",
        marque: "Mercedes",
        ville: "Casablanca",
        kilometrage: 28000,
        premiereCirculation: "2023",
        miseEnCirculation: "MA",
        carburant: "Diesel",
        prix: 580000,
        status: "Expertise",
        typeVendeur: "Professionnel",
        nomVendeur: "Mercedes Maroc",
        createdAt: new Date("2025-12-08T09:00:00Z"),
        updatedAt: new Date("2025-12-08T09:00:00Z")
    },
    {
        reference: "VEH-004",
        model: "Golf 8",
        marque: "Volkswagen",
        ville: "Marrakech",
        kilometrage: 15000,
        premiereCirculation: "2024",
        miseEnCirculation: "MA",
        carburant: "Essence",
        prix: 280000,
        status: "Publiée",
        typeVendeur: "Professionnel",
        createdAt: new Date("2025-12-06T11:00:00Z"),
        updatedAt: new Date("2025-12-06T11:00:00Z")
    },
    {
        reference: "VEH-005",
        model: "Clio 5",
        marque: "Renault",
        ville: "Tanger",
        kilometrage: 52000,
        premiereCirculation: "2021",
        miseEnCirculation: "MA",
        carburant: "Essence",
        prix: 180000,
        status: "Publiée",
        typeVendeur: "Particulier",
        nomVendeur: "Ahmed Bennani",
        createdAt: new Date("2025-12-02T16:00:00Z"),
        updatedAt: new Date("2025-12-02T16:00:00Z")
    }
]);

// Vérifier
print("✅ " + db.vehicles.countDocuments() + " véhicules importés!");
db.vehicles.find().limit(2);