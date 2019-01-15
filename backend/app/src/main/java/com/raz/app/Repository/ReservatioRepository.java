package com.raz.app.Repository;

import com.raz.app.Model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservatioRepository extends JpaRepository<Reservation,Long> {

    @Query("select r.id, r.reservationDate, r.reservedTo, r.status, book.title, book.publisher, book.yearOfPublishing  from Reservation r inner join r.user user inner join r.book book where r.book.id = book.id and user.username=:username")
    List<Object[]> findByUserId(@Param("username") String username);


}
