package com.autocash.repository;

import com.autocash.model.ReferenceData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReferenceDataRepository extends MongoRepository<ReferenceData, String> {
    Optional<ReferenceData> findByType(String type);
}
