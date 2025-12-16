package com.autocash.controller;

import com.autocash.model.ReferenceData;
import com.autocash.service.ReferenceDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.PostConstruct;
import java.util.List;

@RestController
@RequestMapping("/api/reference-data")
@CrossOrigin(origins = "*")
public class ReferenceDataController {

    @Autowired
    private ReferenceDataService service;

    @PostConstruct
    public void init() {
        service.initializeDefaultData();
    }

    @GetMapping
    public List<ReferenceData> getAllReferenceData() {
        return service.getAllReferenceData();
    }

    @GetMapping("/{type}")
    public ResponseEntity<ReferenceData> getReferenceDataByType(@PathVariable String type) {
        ReferenceData data = service.getReferenceDataByType(type);
        if (data != null) {
            return ResponseEntity.ok(data);
        }
        return ResponseEntity.notFound().build();
    }
}
