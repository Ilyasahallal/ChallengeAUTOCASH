package com.autocash.repository;

import com.autocash.model.Vehicle;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VehicleRepository extends MongoRepository<Vehicle, String> {
    
    // Trouver tous les véhicules par statut
    List<Vehicle> findByStatus(String status);
    
    // Trouver tous les véhicules d'un utilisateur
    List<Vehicle> findByUserId(String userId);
    
    // Trouver les véhicules par marque
    List<Vehicle> findByMarque(String marque);
    
    // Trouver les véhicules par ville
    List<Vehicle> findByVille(String ville);
    
    // Trouver les véhicules par type de vendeur
    List<Vehicle> findByTypeVendeur(String typeVendeur);
    
    // Recherche par référence
    Optional<Vehicle> findByReference(String reference);
    
    // Recherche par modèle (contient)
    List<Vehicle> findByModelContainingIgnoreCase(String model);
    
    // Recherche par prix entre deux valeurs
    List<Vehicle> findByPrixBetween(Double minPrix, Double maxPrix);
    
    // Recherche par kilométrage maximum
    List<Vehicle> findByKilometrageLessThanEqual(Integer maxKilometrage);
    
    // Recherche combinée : statut et userId
    List<Vehicle> findByStatusAndUserId(String status, String userId);
    
    // Compter les véhicules par statut
    Long countByStatus(String status);
    
    // Compter les véhicules d'un utilisateur
    Long countByUserId(String userId);
    
    // Recherche personnalisée avec Query
    @Query("{ 'marque': ?0, 'ville': ?1, 'status': ?2 }")
    List<Vehicle> findByMarqueAndVilleAndStatus(String marque, String ville, String status);
    
    // Recherche par plusieurs critères
    @Query("{ $or: [ { 'model': { $regex: ?0, $options: 'i' } }, { 'marque': { $regex: ?0, $options: 'i' } } ] }")
    List<Vehicle> searchByModelOrMarque(String searchTerm);
}
