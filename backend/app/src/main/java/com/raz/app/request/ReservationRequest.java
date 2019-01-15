package com.raz.app.request;

import java.time.LocalDate;

public class ReservationRequest {

    private LocalDate reservedTo;

    private String username;

    private Long book_id;


    public ReservationRequest() {
    }

    public ReservationRequest(LocalDate reservedTo, String username, Long book_id) {
        this.reservedTo = reservedTo;
        this.username = username;
        this.book_id = book_id;
    }

    public LocalDate getReservedTo() {
        return reservedTo;
    }

    public void setReservedTo(LocalDate reservedTo) {
        this.reservedTo = reservedTo;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getBook_id() {
        return book_id;
    }

    public void setBook_id(Long book_id) {
        this.book_id = book_id;
    }
}
