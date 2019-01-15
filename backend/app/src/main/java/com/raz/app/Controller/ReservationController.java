package com.raz.app.Controller;

import com.raz.app.Model.Book;
import com.raz.app.Model.Rent;
import com.raz.app.Model.Reservation;
import com.raz.app.Repository.BookRepository;
import com.raz.app.Repository.RentRepository;
import com.raz.app.Repository.ReservatioRepository;
import com.raz.app.register.Repository.UserRepository;
import com.raz.app.request.ReservationRequest;
import com.raz.app.response.UserReservationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class ReservationController {


    private ReservatioRepository reservatioRepository;

    private UserRepository userRepository;

    private BookRepository bookRepository;

    private RentRepository rentRepository;

    @Autowired
    public ReservationController(ReservatioRepository reservatioRepository, UserRepository userRepository, BookRepository bookRepository, RentRepository rentRepository) {
        this.reservatioRepository = reservatioRepository;
        this.userRepository = userRepository;
        this.bookRepository = bookRepository;
        this.rentRepository = rentRepository;
    }




    @PostMapping(value = "/reservation/add", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<?> add(
            @RequestBody ReservationRequest reservationRequest
    ){
        Reservation reservation = new Reservation();

        //po kolei dodaje wlasciwosci nowej rezerwacji
        reservation.setReservationDate(LocalDate.now());
        //rezerwacja ma 7 dni
        reservation.setReservedTo(LocalDate.now().plus(7, ChronoUnit.DAYS));
        reservation.setBook(bookRepository.findById(reservationRequest.getBook_id()).get());
        reservation.setUser(userRepository.findByUsername(reservationRequest.getUsername()));

        //referencja to taki wskaznik w Javie
        //pobieram referencje ksiazki z bazy, bo getOne() pobiera referencje z bazy i mozna
        //robic na tym latwo update, a findById pobiera obiekt bez referencji
        Book book = bookRepository.getOne(reservationRequest.getBook_id());
        book.setStatus("Reserved to "+LocalDate.now().plus(7, ChronoUnit.DAYS));

        //to automatycznie zapisuje w bazie rezerwacje i automatycznie zapisuje do ksiazki id rezerwacji
        book.setActualReservationId(reservatioRepository.save(reservation).getId());
        bookRepository.save(book);

        //nie przejmuj sie jak czasem rzuca bledy w consoli - poki sie wszystko w bazie zgadza to jest ok :)

        return ResponseEntity.ok(reservation);
    }

    @PostMapping(value = "/reservation/decline", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<?> decline(
            @RequestBody Long bookId
    ){

        Book bookToUpdate = bookRepository.getOne(bookId);
        bookToUpdate.setStatus("AVAIBLE");


        Reservation reservationToUpdate =reservatioRepository.getOne(bookToUpdate.getActualReservationId());
        reservationToUpdate.setStatus("CANCELLED");
        reservationToUpdate.setReservedTo(LocalDate.now());
        bookToUpdate.setActualReservationId(null);
        bookRepository.save(bookToUpdate);

        return ResponseEntity.ok("Reservation changed");
    }

    @PostMapping(value = "/reservation/borrow", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<?> borrow(
            @RequestBody Long bookId
    ){

        Book bookToUpdate = bookRepository.getOne(bookId);
        bookToUpdate.setStatus("Rented to "+LocalDate.now().plus(30, ChronoUnit.DAYS));



        Reservation reservationToUpdate =reservatioRepository.getOne(bookToUpdate.getActualReservationId());
        reservationToUpdate.setStatus("RENTED");
        reservationToUpdate.setReservedTo(LocalDate.now());


        Rent rent = new Rent();
        rent.setBook(bookRepository.findById(bookId).get());
        rent.setRentDate(LocalDate.now());
        rent.setRentTo(LocalDate.now().plus(30, ChronoUnit.DAYS));
        rent.setUser(userRepository.findById(reservationToUpdate.getUser().getId()).get());

        bookToUpdate.setActualRentId(rentRepository.save(rent).getId());
        bookToUpdate.setActualReservationId(null);
        bookRepository.save(bookToUpdate);

        return ResponseEntity.ok(rent);
    }



    @GetMapping(value = "reservation/{username}")
    public Iterable<UserReservationResponse> getByUserId(@PathVariable("username")String username){

        Iterable<Object[]> reservationList = reservatioRepository.findByUserId(username);
        List<UserReservationResponse> userReservationResponses = new ArrayList<>();

        reservationList.forEach(objects -> {
            UserReservationResponse userReservationResponse = new UserReservationResponse(
                    objects[0],
                    objects[1],
                    objects[2],
                    objects[3],
                    objects[4],
                    objects[5],
                    objects[6]
            ) ;
            userReservationResponses.add(userReservationResponse);
        });

        return userReservationResponses;
    }

}
