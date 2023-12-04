package com.fortunato.java_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fortunato.java_api.model.MeasurementModel;

public interface MeasurementRepository extends MongoRepository<MeasurementModel, String> {
    
}
