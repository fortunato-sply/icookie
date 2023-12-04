package com.fortunato.java_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fortunato.java_api.model.RecipeModel;

public interface RecipeRepository extends MongoRepository<RecipeModel, String> {
    
}
