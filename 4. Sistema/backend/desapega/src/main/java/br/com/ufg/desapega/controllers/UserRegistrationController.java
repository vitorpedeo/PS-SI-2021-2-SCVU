package br.com.ufg.desapega.controllers;

import br.com.ufg.desapega.dto.UserRegistrationDTO;
import br.com.ufg.desapega.models.User;
import br.com.ufg.desapega.repositories.UserRepository;
import br.com.ufg.desapega.services.UserRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserRegistrationController {

    @Autowired
    private UserRegistrationService service;

    @PostMapping("/api/register/user")
    public ResponseEntity<String> registerUser(@RequestBody UserRegistrationDTO user) throws Exception {
        return ResponseEntity.ok(service.registerUser(user));
    }
}
