package com.autocash.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

@Document(collection = "vehicles")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vehicle {
    
    @Id
    private String id;
    
    // Informations de base
    private String reference;
    private String model;
    private String marque;
    private String image;
    
    // Localisation
    private String garage;
    private String location;
    private String ville;
    private String adresse;
    
    // Caractéristiques du véhicule
    private Integer kilometrage;
    private String premiereCirculation;
    private String miseEnCirculation;
    private String carburant;
    private Double prix;
    
    // Statut
    private String status; // "Publiée" ou "Expertise"
    
    // Informations du vendeur
    private String typeVendeur; // "Professionnel" ou "Particulier"
    private String nomVendeur;
    private String objectifs;
    private String telVendeur;
    private String emailVendeur;
    
    // Métadonnées
    private Integer daysPosted;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String userId; // Référence à l'utilisateur qui a créé le véhicule
    
    // Méthode pour calculer daysPosted automatiquement
    public Integer getDaysPosted() {
        if (createdAt != null) {
            return (int) java.time.temporal.ChronoUnit.DAYS.between(createdAt, LocalDateTime.now());
        }
        return 0;
    }
}
