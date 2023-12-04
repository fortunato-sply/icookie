package com.fortunato.java_api.dto;

import lombok.Data;

@Data
public class UserDTO {
  private String id;
  private String name;
  private String email;
  private Boolean admin;
}
