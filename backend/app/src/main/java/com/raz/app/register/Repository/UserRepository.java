package com.raz.app.register.Repository;

import com.raz.app.register.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    User findByUsername(String userName);
    Boolean existsByUsername(String username);
    Boolean existsByPesel(String pesel);
}
