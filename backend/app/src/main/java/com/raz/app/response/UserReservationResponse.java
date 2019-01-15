package com.raz.app.response;

public class UserReservationResponse {

    Object id;
    Object reservationDate;
    Object reservedTo;
    Object status;
    Object bookTitle;
    Object bookPublisher;
    Object bookYearOfPublishing;

    public UserReservationResponse(Object id, Object reservationDate, Object reservedTo, Object status, Object bookTitle, Object bookPublisher, Object bookYearOfPublishing) {
        this.id = id;
        this.reservationDate = reservationDate;
        this.reservedTo = reservedTo;
        this.status = status;
        this.bookTitle = bookTitle;
        this.bookPublisher = bookPublisher;
        this.bookYearOfPublishing = bookYearOfPublishing;
    }

    public Object getId() {
        return id;
    }

    public void setId(Object id) {
        this.id = id;
    }

    public Object getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(Object reservationDate) {
        this.reservationDate = reservationDate;
    }

    public Object getReservedTo() {
        return reservedTo;
    }

    public void setReservedTo(Object reservedTo) {
        this.reservedTo = reservedTo;
    }

    public Object getStatus() {
        return status;
    }

    public void setStatus(Object status) {
        this.status = status;
    }

    public Object getBookTitle() {
        return bookTitle;
    }

    public void setBookTitle(Object bookTitle) {
        this.bookTitle = bookTitle;
    }

    public Object getBookPublisher() {
        return bookPublisher;
    }

    public void setBookPublisher(Object bookPublisher) {
        this.bookPublisher = bookPublisher;
    }

    public Object getBookYearOfPublishing() {
        return bookYearOfPublishing;
    }

    public void setBookYearOfPublishing(Object bookYearOfPublishing) {
        this.bookYearOfPublishing = bookYearOfPublishing;
    }
}
