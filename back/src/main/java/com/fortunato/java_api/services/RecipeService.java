package com.fortunato.java_api.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fortunato.java_api.model.RecipeModel;
import com.fortunato.java_api.repository.RecipeRepository;

@Service
public class RecipeService {
    @Autowired
    private RecipeRepository repository;

    public RecipeModel save(RecipeModel recipe) {
        return repository.save(recipe);
    }

    public List<RecipeModel> findAll() {
        return (List<RecipeModel>) repository.findAll();
    }

    public List<RecipeModel> saveMany(List<RecipeModel> recipes) {
        return repository.saveAll(recipes);
    }

    public Optional<RecipeModel> findById(String id) {
        return repository.findById(id);
    }
}
