package com.autocash;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.autocash.repository")
public class AutocashApplication {

    public static void main(String[] args) {
        SpringApplication.run(AutocashApplication.class, args);
        System.out.println("\n===========================================");
        System.out.println("🚗 ChallengeAUTOCASH Backend Started!");
        System.out.println("📡 API available at: http://localhost:8080");
        System.out.println("📚 Vehicles endpoint: http://localhost:8080/api/vehicles");
        System.out.println("===========================================\n");
    }
}
