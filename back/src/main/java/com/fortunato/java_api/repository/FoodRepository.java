package com.fortunato.java_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fortunato.java_api.model.FoodModel;

public interface FoodRepository extends MongoRepository<FoodModel, String> {
    
}
