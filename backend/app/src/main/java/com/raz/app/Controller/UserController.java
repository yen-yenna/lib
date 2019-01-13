package com.raz.app.Controller;

import com.raz.app.register.Repository.UserRepository;
import com.raz.app.register.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class UserController {


    UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping(value = "/user/info/{username}")
    public User getUserInfo(@PathVariable("username") String username){

        return userRepository.findByUsername(username);
    }
}
