export const VEHICLE_OPTIONS = {
    typeVendeur: [
        { label: 'Professionnel', value: 'Professionnel' },
        { label: 'Particulier', value: 'Particulier' },
    ],
    marques: [
        { label: 'Audi', value: 'Audi' },
        { label: 'BMW', value: 'BMW' },
        { label: 'Mercedes', value: 'Mercedes' },
        { label: 'Volkswagen', value: 'Volkswagen' },
        { label: 'Peugeot', value: 'Peugeot' },
        { label: 'Renault', value: 'Renault' },
        { label: 'Toyota', value: 'Toyota' },
        { label: 'Fiat', value: 'Fiat' },
        { label: 'Hyundai', value: 'Hyundai' },
        { label: 'Kia', value: 'Kia' },
    ],
    modeles: [
        { label: 'A1', value: 'A1' },
        { label: 'A3', value: 'A3' },
        { label: 'A4', value: 'A4' },
        { label: 'A5', value: 'A5' },
        { label: 'Serie 1', value: 'Serie 1' },
        { label: 'Serie 3', value: 'Serie 3' },
        { label: 'Classe A', value: 'Classe A' },
        { label: 'Classe C', value: 'Classe C' },
        { label: 'Golf', value: 'Golf' },
        { label: 'Polo', value: 'Polo' },
        { label: 'Clio', value: 'Clio' },
        { label: '208', value: '208' },
        { label: '308', value: '308' },
    ],
    carburant: [
        { label: 'Diesel', value: 'Diesel' },
        { label: 'Essence', value: 'Essence' },
        { label: 'Hybride', value: 'Hybride' },
        { label: 'Electrique', value: 'Electrique' },
    ],
    annees: Array.from({ length: 30 }, (_, i) => {
        const year = new Date().getFullYear() - i;
        return { label: year.toString(), value: year.toString() };
    }),
    origines: [
        { label: 'WW Maroc', value: 'WW Maroc' },
        { label: 'Dédouanée', value: 'Dédouanée' },
        { label: 'Importée neuve', value: 'Importée neuve' },
    ],
    villes: [
        { label: 'Casablanca', value: 'Casablanca' },
        { label: 'Rabat', value: 'Rabat' },
        { label: 'Marrakech', value: 'Marrakech' },
        { label: 'Tanger', value: 'Tanger' },
        { label: 'Agadir', value: 'Agadir' },
        { label: 'Fès', value: 'Fès' },
        { label: 'Meknès', value: 'Meknès' },
        { label: 'Oujda', value: 'Oujda' },
    ]
};
