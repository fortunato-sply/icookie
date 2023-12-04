package com.fortunato.java_api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fortunato.java_api.model.FoodModel;
import com.fortunato.java_api.model.MeasurementModel;
import com.fortunato.java_api.repository.MeasurementRepository;

@Service
public class MeasurementService {
    @Autowired
    private MeasurementRepository repository;

    public MeasurementModel save(MeasurementModel measure) {
        return repository.save(measure);
    }

    public List<MeasurementModel> findAll() {
        return (List<MeasurementModel>) repository.findAll();
    }

    public List<MeasurementModel> saveMany(List<MeasurementModel> measurements) {
        return repository.saveAll(measurements);
    }
}
