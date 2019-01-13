package com.raz.app.register.controller;

import com.raz.app.register.Repository.UserRepository;
import com.raz.app.register.model.LoginForm;
import com.raz.app.register.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class RegisterController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;


    @PostMapping(value = "user/register")
    public ResponseEntity<?> register(
            @RequestBody User user
    ){
        if (userRepository.existsByUsername(user.getUsername())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        if (userRepository.existsByPesel(user.getPesel())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        User newUser = new User();
        newUser.setName(user.getName());
        newUser.setEmail(user.getEmail());
        newUser.setPassword(encoder.encode(user.getPassword()));
        newUser.setUserName(user.getUserName());
        newUser.setSurnname(user.getSurnname());
        newUser.setRole(user.getRole());
        newUser.setPesel(user.getPesel());

        userRepository.save(newUser);

        return ResponseEntity.ok(newUser);
    }

    @PostMapping(value = "user/login")
    public ResponseEntity<?> login(
            @RequestBody LoginForm loginForm
    ){
        if (!userRepository.existsByUsername(loginForm.getUsername())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        User loginUser = userRepository.findByUsername(loginForm.getUsername());


        if(encoder.matches(loginForm.getPassword(), loginUser.getPassword())){
            return ResponseEntity.ok(loginUser);
        }else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }


    }


}
