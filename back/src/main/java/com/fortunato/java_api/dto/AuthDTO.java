package com.fortunato.java_api.dto;

import lombok.Data;

@Data
public class AuthDTO {
  private String token;
  private UserDTO user;
}
