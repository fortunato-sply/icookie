package com.fortunato.java_api.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("ingredient")
public class StepModel {
    @Id
    private String id;
    private String step;

    public StepModel() { }

    public StepModel(String step) {
        this.step = step;
    }
}
