package com.fortunato.java_api.dto;

import java.util.List;

import com.fortunato.java_api.model.FoodModel;

import lombok.Data;

@Data
public class FoodsDTO {
    private List<FoodModel> list;
}
