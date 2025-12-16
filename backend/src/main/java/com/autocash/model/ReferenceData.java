package com.autocash.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;

@Data
@Document(collection = "reference_data")
public class ReferenceData {
    @Id
    private String id;
    private String type; // e.g., "marques", "villes", "carburants"
    private List<String> values; // Simple list of strings
    private Map<String, List<String>> dependentValues; // e.g., for models dependent on brands
}
