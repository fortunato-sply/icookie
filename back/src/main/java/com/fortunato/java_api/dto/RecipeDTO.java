package com.fortunato.java_api.dto;

import java.util.List;

import com.fortunato.java_api.model.IngredientModel;
import com.fortunato.java_api.model.StepModel;

import lombok.Data;

@Data
public class RecipeDTO {
    private String id;
    private String name;
    private int preparationTime;
    private List<IngredientModel> ingredients;
    private List<StepModel> steps;
    private String image;
}
