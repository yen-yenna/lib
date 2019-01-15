package com.raz.app.Repository;

import com.raz.app.Model.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentRepository extends JpaRepository<Rent,Long> {

}
