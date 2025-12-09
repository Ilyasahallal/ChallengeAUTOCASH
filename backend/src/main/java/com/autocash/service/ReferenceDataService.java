package com.autocash.service;

import com.autocash.model.ReferenceData;
import com.autocash.repository.ReferenceDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ReferenceDataService {

    @Autowired
    private ReferenceDataRepository repository;

    public ReferenceData getReferenceDataByType(String type) {
        return repository.findByType(type).orElse(null);
    }

    public List<ReferenceData> getAllReferenceData() {
        return repository.findAll();
    }

    // Initialize default data if empty
    public void initializeDefaultData() {
        if (repository.count() == 0) {
            // Marques (Brands) with Models
            ReferenceData marquesData = new ReferenceData();
            marquesData.setType("marques");
            marquesData.setValues(Arrays.asList(
                    "Audi", "BMW", "Mercedes", "Volkswagen", "Peugeot",
                    "Renault", "Toyota", "Fiat", "Hyundai", "Kia", "Dacia"));

            Map<String, List<String>> modelsMap = new HashMap<>();
            modelsMap.put("Audi", Arrays.asList("A1", "A3", "A4", "A5", "A6", "Q3", "Q5", "Q7"));
            modelsMap.put("BMW", Arrays.asList("Serie 1", "Serie 3", "Serie 5", "X1", "X3", "X5"));
            modelsMap.put("Mercedes", Arrays.asList("Classe A", "Classe C", "Classe E", "CLA", "GLA", "GLC"));
            modelsMap.put("Volkswagen", Arrays.asList("Golf", "Polo", "Tiguan", "Touareg", "Passat"));
            modelsMap.put("Peugeot", Arrays.asList("208", "308", "2008", "3008", "508"));
            modelsMap.put("Renault", Arrays.asList("Clio", "Megane", "Captur", "Kadjar"));
            modelsMap.put("Dacia", Arrays.asList("Logan", "Sandero", "Duster"));

            marquesData.setDependentValues(modelsMap);
            repository.save(marquesData);

            // Villes
            ReferenceData villesData = new ReferenceData();
            villesData.setType("villes");
            villesData.setValues(Arrays.asList(
                    "Casablanca", "Rabat", "Marrakech", "Tanger", "Agadir",
                    "Fès", "Meknès", "Oujda", "Kénitra", "Tetouan"));
            repository.save(villesData);

            // Carburants
            ReferenceData carburantsData = new ReferenceData();
            carburantsData.setType("carburants");
            carburantsData.setValues(Arrays.asList(
                    "Diesel", "Essence", "Hybride", "Electrique"));
            repository.save(carburantsData);

            // Type Vendeur
            ReferenceData typeVendeurData = new ReferenceData();
            typeVendeurData.setType("typeVendeur");
            typeVendeurData.setValues(Arrays.asList(
                    "Professionnel", "Particulier"));
            repository.save(typeVendeurData);

            // Origines
            ReferenceData originesData = new ReferenceData();
            originesData.setType("origines");
            originesData.setValues(Arrays.asList(
                    "WW Maroc", "Dédouanée", "Importée neuve"));
            repository.save(originesData);
        }
    }
}
