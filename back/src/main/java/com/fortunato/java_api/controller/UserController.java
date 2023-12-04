package com.fortunato.java_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fortunato.java_api.model.UserModel;
import com.fortunato.java_api.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService service;

    @GetMapping("")
    public List<UserModel> getAll() {
        return service.findAll();
    }

    @GetMapping("/{name}")
    public List<UserModel> getByName(@PathVariable String name) {
        return service.findByName(name);
    }

    @PostMapping("/register")
    public ResponseEntity newUser(@RequestBody UserModel newUser) {
        UserModel userExists = service.findByEmail(newUser.getEmail());
        if(userExists != null)
            return ResponseEntity.badRequest().build();
        
        UserModel user = service.create(newUser);
        return ResponseEntity.ok(user);
        
    }

    @PutMapping("/{id}")
    public UserModel updateUser(@PathVariable String id, @RequestBody UserModel newUser) {
        String password = DigestUtils.md5DigestAsHex(newUser.getPassword().getBytes()).toUpperCase();
        return service.save(id, newUser.getName(), newUser.getEmail(), password, newUser.isAdmin());
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        service.delete(id);
    }
}
