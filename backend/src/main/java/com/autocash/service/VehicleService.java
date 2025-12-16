package com.autocash.service;

import com.autocash.model.Vehicle;
import com.autocash.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    // Créer un nouveau véhicule
    public Vehicle createVehicle(Vehicle vehicle) {
        vehicle.setCreatedAt(LocalDateTime.now());
        vehicle.setUpdatedAt(LocalDateTime.now());

        // Générer une référence automatique si elle n'existe pas
        if (vehicle.getReference() == null || vehicle.getReference().isEmpty()) {
            vehicle.setReference(generateReference());
        }

        // Définir le statut par défaut
        if (vehicle.getStatus() == null || vehicle.getStatus().isEmpty()) {
            vehicle.setStatus("Publiée");
        }

        return vehicleRepository.save(vehicle);
    }

    // Récupérer tous les véhicules
    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    // Récupérer un véhicule par ID
    public Optional<Vehicle> getVehicleById(String id) {
        return vehicleRepository.findById(id);
    }

    // Récupérer les véhicules par statut
    public List<Vehicle> getVehiclesByStatus(String status) {
        return vehicleRepository.findByStatus(status);
    }

    // Récupérer les véhicules d'un utilisateur
    public List<Vehicle> getVehiclesByUserId(String userId) {
        return vehicleRepository.findByUserId(userId);
    }

    // Récupérer les véhicules par marque
    public List<Vehicle> getVehiclesByMarque(String marque) {
        return vehicleRepository.findByMarque(marque);
    }

    // Récupérer les véhicules par ville
    public List<Vehicle> getVehiclesByVille(String ville) {
        return vehicleRepository.findByVille(ville);
    }

    // Rechercher des véhicules
    public List<Vehicle> searchVehicles(String searchTerm) {
        return vehicleRepository.searchByModelOrMarque(searchTerm);
    }

    // Filtrer par prix
    public List<Vehicle> getVehiclesByPriceRange(Double minPrix, Double maxPrix) {
        return vehicleRepository.findByPrixBetween(minPrix, maxPrix);
    }

    // Filtrer par kilométrage
    public List<Vehicle> getVehiclesByMaxKilometrage(Integer maxKilometrage) {
        return vehicleRepository.findByKilometrageLessThanEqual(maxKilometrage);
    }

    // Mettre à jour un véhicule
    public Vehicle updateVehicle(String id, Vehicle vehicleDetails) {
        Optional<Vehicle> optionalVehicle = vehicleRepository.findById(id);

        if (optionalVehicle.isPresent()) {
            Vehicle vehicle = optionalVehicle.get();

            // Mettre à jour les champs
            if (vehicleDetails.getReference() != null)
                vehicle.setReference(vehicleDetails.getReference());
            if (vehicleDetails.getModel() != null)
                vehicle.setModel(vehicleDetails.getModel());
            if (vehicleDetails.getMarque() != null)
                vehicle.setMarque(vehicleDetails.getMarque());
            if (vehicleDetails.getImage() != null)
                vehicle.setImage(vehicleDetails.getImage());
            if (vehicleDetails.getGarage() != null)
                vehicle.setGarage(vehicleDetails.getGarage());
            if (vehicleDetails.getLocation() != null)
                vehicle.setLocation(vehicleDetails.getLocation());
            if (vehicleDetails.getVille() != null)
                vehicle.setVille(vehicleDetails.getVille());
            if (vehicleDetails.getAdresse() != null)
                vehicle.setAdresse(vehicleDetails.getAdresse());
            if (vehicleDetails.getKilometrage() != null)
                vehicle.setKilometrage(vehicleDetails.getKilometrage());
            if (vehicleDetails.getPremiereCirculation() != null)
                vehicle.setPremiereCirculation(vehicleDetails.getPremiereCirculation());
            if (vehicleDetails.getMiseEnCirculation() != null)
                vehicle.setMiseEnCirculation(vehicleDetails.getMiseEnCirculation());
            if (vehicleDetails.getCarburant() != null)
                vehicle.setCarburant(vehicleDetails.getCarburant());
            if (vehicleDetails.getPrix() != null)
                vehicle.setPrix(vehicleDetails.getPrix());
            if (vehicleDetails.getStatus() != null)
                vehicle.setStatus(vehicleDetails.getStatus());
            if (vehicleDetails.getTypeVendeur() != null)
                vehicle.setTypeVendeur(vehicleDetails.getTypeVendeur());
            if (vehicleDetails.getNomVendeur() != null)
                vehicle.setNomVendeur(vehicleDetails.getNomVendeur());
            if (vehicleDetails.getObjectifs() != null)
                vehicle.setObjectifs(vehicleDetails.getObjectifs());
            if (vehicleDetails.getTelVendeur() != null)
                vehicle.setTelVendeur(vehicleDetails.getTelVendeur());
            if (vehicleDetails.getEmailVendeur() != null)
                vehicle.setEmailVendeur(vehicleDetails.getEmailVendeur());

            vehicle.setUpdatedAt(LocalDateTime.now());

            return vehicleRepository.save(vehicle);
        }

        return null;
    }

    // Supprimer un véhicule
    public boolean deleteVehicle(String id) {
        if (vehicleRepository.existsById(id)) {
            vehicleRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // Compter les véhicules par statut
    public Long countVehiclesByStatus(String status) {
        return vehicleRepository.countByStatus(status);
    }

    // Compter les véhicules d'un utilisateur
    public Long countVehiclesByUserId(String userId) {
        return vehicleRepository.countByUserId(userId);
    }

    // Générer une référence unique
    private String generateReference() {
        return "VEH-" + System.currentTimeMillis();
    }

    // Vérifier si un véhicule existe
    public boolean vehicleExists(String id) {
        return vehicleRepository.existsById(id);
    }
}
