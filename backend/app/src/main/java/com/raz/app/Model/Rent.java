package com.raz.app.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.raz.app.register.model.User;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Rent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="rent_date")
    private LocalDate rentDate;


    private LocalDate rentTo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "book_id")
    @JsonBackReference
    private Book book;

    public Rent() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getRentDate() {
        return rentDate;
    }

    public void setRentDate(LocalDate reservationDate) {
        this.rentDate = reservationDate;
    }

    public LocalDate getRentTo() {
        return rentTo;
    }

    public void setRentTo(LocalDate rentTo) {
        this.rentTo = rentTo;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }
}
