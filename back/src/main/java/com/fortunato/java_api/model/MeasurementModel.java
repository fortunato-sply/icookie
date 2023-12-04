package com.fortunato.java_api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("measurement")
public class MeasurementModel {
    @Id
    private String id;
    private String name;
    
    public MeasurementModel() { }

    public MeasurementModel(String name) {
        this.name = name;
    }

}
