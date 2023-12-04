package com.fortunato.java_api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fortunato.java_api.model.FoodModel;
import com.fortunato.java_api.repository.FoodRepository;

@Service
public class FoodService {
    @Autowired
    private FoodRepository repository;

    public FoodModel save(FoodModel food) {
        return repository.save(food);
    }

    public List<FoodModel> findAll() {
        return (List<FoodModel>) repository.findAll();
    }

    public List<FoodModel> saveMany(List<FoodModel> foods) {
        return repository.saveAll(foods);
    }
}
