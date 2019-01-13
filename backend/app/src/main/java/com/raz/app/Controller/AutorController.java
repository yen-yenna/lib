package com.raz.app.Controller;

import com.raz.app.Model.Autor;
import com.raz.app.Repository.AutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin
@RestController
public class AutorController {

    private AutorRepository autorRepository;

    @Autowired
    public AutorController(AutorRepository autorRepository)
    {
        this.autorRepository = autorRepository;    }

        @PostMapping(value = "autor/save")
        public void save(@RequestBody Autor autor)
        {
            autorRepository.save(autor);
        }

    @GetMapping (value = "autor/all")
    public List<Autor> getAll()
    {
        List<Autor> autors = (List<Autor>) autorRepository.findAll();
        return autors;
    }


}
