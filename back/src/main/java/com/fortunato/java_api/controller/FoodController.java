package com.fortunato.java_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fortunato.java_api.dto.FoodsDTO;
import com.fortunato.java_api.model.FoodModel;
import com.fortunato.java_api.model.MeasurementModel;
import com.fortunato.java_api.services.FoodService;
import com.fortunato.java_api.services.MeasurementService;

@RestController
@RequestMapping("/food")
public class FoodController {
    @Autowired
    private FoodService foodService;

    @GetMapping("")
    public List<FoodModel> getAll() {
        return foodService.findAll();
    }

    @PostMapping("")
    public void newFood(@RequestBody FoodModel newFood) {
        foodService.save(newFood);
    }

    @PostMapping("/many")
    public List<FoodModel> newFood(@RequestBody FoodsDTO newFoods) {
        List<FoodModel> foods = newFoods.getList();
        return foodService.saveMany(foods);
    }

    @Autowired
    private MeasurementService measurementService;

    @GetMapping("/measurement")
    public List<MeasurementModel> getAllMeasurements() {
        return measurementService.findAll();
    }
    
    @PostMapping("/measurement")
    public void newMeasurement(@RequestBody MeasurementModel newMeasurement) {
        measurementService.save(newMeasurement);
    }

    @PostMapping("/measurement/many")
    public List<MeasurementModel> newMeasurement(@RequestBody List<MeasurementModel> newMeasurements) {
        return measurementService.saveMany(newMeasurements);
    }
}
