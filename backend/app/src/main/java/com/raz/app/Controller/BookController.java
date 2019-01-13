package com.raz.app.Controller;

import com.raz.app.Model.Book;
import com.raz.app.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class BookController {

    private BookRepository bookRepository;

    @Autowired
    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }


    @PostMapping(value = "book/save")
    public void save(
            @RequestBody Book book
    )
    {
        bookRepository.save(book);
    }

    @GetMapping(value = "book/all")
    public List<Book> getAll(){

       List<Book> books = (List<Book>) bookRepository.findAll();
        return books;
    }
}
