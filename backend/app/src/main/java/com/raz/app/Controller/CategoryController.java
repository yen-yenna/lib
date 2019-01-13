package com.raz.app.Controller;


import com.raz.app.Model.Category;
import com.raz.app.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class CategoryController {

    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryController(CategoryRepository categoryRepository)
    {
        this.categoryRepository = categoryRepository;
    }


    @PostMapping(value = "category/save")
    public void save(@RequestBody Category category)
    {
        categoryRepository.save(category);
    }
    @GetMapping (value = "category/all")
    public List<Category> getAll()
    {
      List<Category> categories = (List<Category>) categoryRepository.findAll();
      return categories;
    }
}
