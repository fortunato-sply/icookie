package com.fortunato.java_api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import com.fortunato.java_api.model.UserModel;
import com.fortunato.java_api.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public UserModel create(UserModel user) {
        String pass = DigestUtils.md5DigestAsHex(user.getPassword().getBytes()).toUpperCase();
        user.setPassword(pass);
        return repository.save(user);
    }

    public UserModel save(String id, String email, String name, String password, boolean isAdmin) {
        return repository.save(new UserModel(id, email, name, password, isAdmin));
    }

    public UserModel findById(String id) {
        return repository.findById(id).orElse(null);
    }

    public List<UserModel> findAll() {
        return (List<UserModel>) repository.findAll();
    }

    public List<UserModel> findByName(String name) {
        return (List<UserModel>) repository.findByName(name);
    }

    public UserModel findByEmail(String email) {
        return (UserModel) repository.findByEmail(email);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }
}
