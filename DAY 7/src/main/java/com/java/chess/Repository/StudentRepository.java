package com.java.chess.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.java.chess.Model.Student;
@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
}