# Backend Spring Boot - ChallengeAUTOCASH

Backend API REST pour l'application de gestion de véhicules ChallengeAUTOCASH.

## 🛠️ Technologies

- **Java** 17+
- **Spring Boot** 3.x
- **Spring Data MongoDB**
- **MongoDB** 6.x
- **Lombok**
- **Maven**

## 📁 Structure du Projet

```
backend/
├── src/main/java/com/autocash/
│   ├── controller/
│   │   └── VehicleController.java    # Endpoints REST
│   ├── model/
│   │   └── Vehicle.java               # Entité MongoDB
│   ├── repository/
│   │   └── VehicleRepository.java     # Interface MongoDB
│   ├── service/
│   │   └── VehicleService.java        # Logique métier
│   └── dto/
│       └── (DTOs à venir)
└── src/main/resources/
    └── application.properties         # Configuration
```

## 🚀 Installation

### Prérequis

1. **Java JDK 17+**
   ```bash
   java -version
   ```

2. **Maven**
   ```bash
   mvn -version
   ```

3. **MongoDB**
   - Installation locale ou MongoDB Atlas

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/Ilyasahallal/ChallengeAUTOCASH.git
   cd ChallengeAUTOCASH/backend
   ```

2. **Configurer MongoDB**
   
   Créer le fichier `src/main/resources/application.properties`:
   ```properties
   # MongoDB Configuration
   spring.data.mongodb.uri=mongodb://localhost:27017/autocash
   spring.data.mongodb.database=autocash
   
   # Server Configuration
   server.port=8080
   
   # Logging
   logging.level.org.springframework.data.mongodb=DEBUG
   ```

3. **Installer les dépendances**
   ```bash
   mvn clean install
   ```

4. **Lancer l'application**
   ```bash
   mvn spring-boot:run
   ```

L'API sera disponible sur `http://localhost:8080`

## 📦 Dépendances Maven (pom.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.0</version>
        <relativePath/>
    </parent>
    
    <groupId>com.autocash</groupId>
    <artifactId>backend</artifactId>
    <version>1.0.0</version>
    <name>ChallengeAUTOCASH Backend</name>
    
    <properties>
        <java.version>17</java.version>
    </properties>
    
    <dependencies>
        <!-- Spring Boot Web -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        
        <!-- Spring Data MongoDB -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-mongodb</artifactId>
        </dependency>
        
        <!-- Lombok -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        
        <!-- Spring Boot DevTools -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        
        <!-- Spring Boot Test -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```

## 🔌 API Endpoints

### Véhicules

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/vehicles` | Créer un véhicule |
| GET | `/api/vehicles` | Liste tous les véhicules |
| GET | `/api/vehicles/{id}` | Détails d'un véhicule |
| PUT | `/api/vehicles/{id}` | Modifier un véhicule |
| DELETE | `/api/vehicles/{id}` | Supprimer un véhicule |
| GET | `/api/vehicles/status/{status}` | Filtrer par statut |
| GET | `/api/vehicles/user/{userId}` | Véhicules d'un utilisateur |
| GET | `/api/vehicles/marque/{marque}` | Filtrer par marque |
| GET | `/api/vehicles/ville/{ville}` | Filtrer par ville |
| GET | `/api/vehicles/search?q={term}` | Rechercher |
| GET | `/api/vehicles/filter/price?min=X&max=Y` | Filtrer par prix |
| GET | `/api/vehicles/filter/kilometrage?max=X` | Filtrer par km |
| GET | `/api/reference-data` | Liste toutes les données de référence |
| GET | `/api/reference-data/{type}` | Données de référence par type |

Voir [API Documentation](../api-documentation.md) pour plus de détails.

## 🧪 Tests

### Tester avec cURL

```bash
# Créer un véhicule
curl -X POST http://localhost:8080/api/vehicles \
  -H "Content-Type: application/json" \
  -d '{
    "model": "A5",
    "marque": "Audi",
    "prix": 330000,
    "ville": "Casablanca",
    "status": "Publiée"
  }'

# Récupérer tous les véhicules
curl http://localhost:8080/api/vehicles

# Rechercher
curl http://localhost:8080/api/vehicles/search?q=Audi
```

### Tester avec Postman

1. Importer la collection Postman (à créer)
2. Configurer l'URL de base: `http://localhost:8080`
3. Tester les endpoints

## 📊 Modèle de Données

### Vehicle

```java
{
  "id": "string",
  "reference": "string",
  "model": "string",
  "marque": "string",
  "image": "string",
  "garage": "string",
  "location": "string",
  "ville": "string",
  "adresse": "string",
  "kilometrage": integer,
  "premiereCirculation": "string",
  "miseEnCirculation": "string",
  "carburant": "string",
  "prix": double,
  "status": "string",
  "typeVendeur": "string",
  "nomVendeur": "string",
  "objectifs": "string",
  "telVendeur": "string",
  "emailVendeur": "string",
  "daysPosted": integer,
  "createdAt": "datetime",
  "updatedAt": "datetime",
  "userId": "string"
}
```

### ReferenceData

```java
{
  "id": "string",
  "type": "string", // e.g., "marques", "villes", "carburants"
  "values": [ "string" ],
  "dependentValues": {
    "key": [ "value" ] // e.g., for models dependent on brands
  }
}
```

## 🔧 Configuration

### MongoDB Local

```bash
# Démarrer MongoDB
mongod --dbpath /data/db

# Créer la base de données
mongosh
use autocash
```

### MongoDB Atlas (Cloud)

1. Créer un compte sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Créer un cluster
3. Obtenir l'URI de connexion
4. Mettre à jour `application.properties`:
   ```properties
   spring.data.mongodb.uri=mongodb+srv://username:password@cluster.mongodb.net/autocash
   ```

## 🚀 Déploiement

### Build

```bash
mvn clean package
```

### Exécuter le JAR

```bash
java -jar target/backend-1.0.0.jar
```

## 📝 TODO

- [ ] Ajouter l'authentification JWT
- [ ] Créer les endpoints pour Leads
- [ ] Créer les endpoints pour Finances
- [ ] Ajouter la validation des données
- [ ] Implémenter la pagination
- [ ] Ajouter les tests unitaires
- [ ] Configurer Swagger/OpenAPI
- [ ] Upload d'images

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 License

Ce projet fait partie du ChallengeAUTOCASH.

---

**Développé avec ❤️ pour ChallengeAUTOCASH**
