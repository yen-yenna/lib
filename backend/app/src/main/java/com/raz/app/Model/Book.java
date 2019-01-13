package com.raz.app.Model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Book {

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private String publisher;

    private Integer yearOfPublishing;

    private String status;

    private Long actualReservationId;

    private Long actualRentId;

    public String getStatus() {
        return status;
    }

    public Long getActualReservationId() {
        return actualReservationId;
    }

    public void setActualReservationId(Long actualReservationId) {
        this.actualReservationId = actualReservationId;
    }

    public Long getActualRentId() {
        return actualRentId;
    }

    public void setActualRentId(Long actualRentId) {
        this.actualRentId = actualRentId;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public Integer getYearOfPublishing() {
        return yearOfPublishing;
    }

    public void setYearOfPublishing(Integer yearOfPublishing) {
        this.yearOfPublishing = yearOfPublishing;
    }
}
