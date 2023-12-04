package com.fortunato.java_api.controller;

import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fortunato.java_api.dto.RecipeDTO;
import com.fortunato.java_api.model.RecipeModel;
import com.fortunato.java_api.model.UserModel;
import com.fortunato.java_api.services.RecipeService;
import com.fortunato.java_api.services.UserService;

@RestController
@RequestMapping("/recipe")
public class RecipeController {
    @Autowired
    private RecipeService recipeService;

    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<RecipeModel> getAll() {
        return recipeService.findAll();
    }

    @PostMapping("")
    public void newRecipe(@RequestBody RecipeDTO newRecipe) {
        UserModel user = userService.findById(newRecipe.getId());
        var recipe = new RecipeModel();
        recipe.setName(newRecipe.getName());
        recipe.setPreparationTime(newRecipe.getPreparationTime());
        recipe.setIngredients(newRecipe.getIngredients());
        recipe.setSteps(newRecipe.getSteps());
        recipe.setImage(newRecipe.getImage());
        recipe.setUser(user);

        recipeService.save(recipe);
    }

    @GetMapping("/{id}")
    public RecipeModel getRecipeById(@PathVariable String id) {
        var response = recipeService.findById(id);
        if (response.isPresent()) {
            return response.get();
        }

        return null;
    }
}
