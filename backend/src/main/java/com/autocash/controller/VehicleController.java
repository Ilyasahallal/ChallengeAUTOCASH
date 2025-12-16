package com.autocash.controller;

import com.autocash.model.Vehicle;
import com.autocash.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/vehicles")
@CrossOrigin(origins = "*") // Permettre les requêtes depuis React Native
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    // Créer un nouveau véhicule
    @PostMapping
    public ResponseEntity<Vehicle> createVehicle(@RequestBody Vehicle vehicle) {
        try {
            Vehicle createdVehicle = vehicleService.createVehicle(vehicle);
            return new ResponseEntity<>(createdVehicle, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Récupérer tous les véhicules
    @GetMapping
    public ResponseEntity<List<Vehicle>> getAllVehicles() {
        try {
            List<Vehicle> vehicles = vehicleService.getAllVehicles();

            if (vehicles.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(vehicles, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Récupérer un véhicule par ID
    @GetMapping("/{id}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable("id") String id) {
        Optional<Vehicle> vehicleData = vehicleService.getVehicleById(id);

        if (vehicleData.isPresent()) {
            return new ResponseEntity<>(vehicleData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Récupérer les véhicules par statut
    @GetMapping("/status/{status}")
    public ResponseEntity<List<Vehicle>> getVehiclesByStatus(@PathVariable("status") String status) {
        try {
            List<Vehicle> vehicles = vehicleService.getVehiclesByStatus(status);

            if (vehicles.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(vehicles, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Récupérer les véhicules d'un utilisateur
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Vehicle>> getVehiclesByUserId(@PathVariable("userId") String userId) {
        try {
            List<Vehicle> vehicles = vehicleService.getVehiclesByUserId(userId);

            if (vehicles.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(vehicles, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Récupérer les véhicules par marque
    @GetMapping("/marque/{marque}")
    public ResponseEntity<List<Vehicle>> getVehiclesByMarque(@PathVariable("marque") String marque) {
        try {
            List<Vehicle> vehicles = vehicleService.getVehiclesByMarque(marque);

            if (vehicles.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(vehicles, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Récupérer les véhicules par ville
    @GetMapping("/ville/{ville}")
    public ResponseEntity<List<Vehicle>> getVehiclesByVille(@PathVariable("ville") String ville) {
        try {
            List<Vehicle> vehicles = vehicleService.getVehiclesByVille(ville);

            if (vehicles.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(vehicles, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Rechercher des véhicules
    @GetMapping("/search")
    public ResponseEntity<List<Vehicle>> searchVehicles(@RequestParam("q") String searchTerm) {
        try {
            List<Vehicle> vehicles = vehicleService.searchVehicles(searchTerm);

            if (vehicles.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(vehicles, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Filtrer par prix
    @GetMapping("/filter/price")
    public ResponseEntity<List<Vehicle>> getVehiclesByPriceRange(
            @RequestParam("min") Double minPrix,
            @RequestParam("max") Double maxPrix) {
        try {
            List<Vehicle> vehicles = vehicleService.getVehiclesByPriceRange(minPrix, maxPrix);

            if (vehicles.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(vehicles, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Filtrer par kilométrage
    @GetMapping("/filter/kilometrage")
    public ResponseEntity<List<Vehicle>> getVehiclesByMaxKilometrage(
            @RequestParam("max") Integer maxKilometrage) {
        try {
            List<Vehicle> vehicles = vehicleService.getVehiclesByMaxKilometrage(maxKilometrage);

            if (vehicles.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(vehicles, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Mettre à jour un véhicule
    @PutMapping("/{id}")
    public ResponseEntity<Vehicle> updateVehicle(
            @PathVariable("id") String id,
            @RequestBody Vehicle vehicle) {
        Vehicle updatedVehicle = vehicleService.updateVehicle(id, vehicle);

        if (updatedVehicle != null) {
            return new ResponseEntity<>(updatedVehicle, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Supprimer un véhicule
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteVehicle(@PathVariable("id") String id) {
        try {
            boolean deleted = vehicleService.deleteVehicle(id);

            if (deleted) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Supprimer tous les véhicules (à utiliser avec précaution)
    @DeleteMapping
    public ResponseEntity<HttpStatus> deleteAllVehicles() {
        try {
            vehicleService.getAllVehicles().forEach(vehicle -> vehicleService.deleteVehicle(vehicle.getId()));
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Compter les véhicules par statut
    @GetMapping("/count/status/{status}")
    public ResponseEntity<Long> countVehiclesByStatus(@PathVariable("status") String status) {
        try {
            Long count = vehicleService.countVehiclesByStatus(status);
            return new ResponseEntity<>(count, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Compter les véhicules d'un utilisateur
    @GetMapping("/count/user/{userId}")
    public ResponseEntity<Long> countVehiclesByUserId(@PathVariable("userId") String userId) {
        try {
            Long count = vehicleService.countVehiclesByUserId(userId);
            return new ResponseEntity<>(count, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
