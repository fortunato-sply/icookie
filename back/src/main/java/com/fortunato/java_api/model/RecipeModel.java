package com.fortunato.java_api.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("recipe")
public class RecipeModel {
    @Id
    private String id;
    private UserModel user;
    private String name;
    private int preparationTime;
    private List<IngredientModel> ingredients;
    private List<StepModel> steps;
    private String image;

    public RecipeModel() { }
}
