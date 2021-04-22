package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Standing;
import org.springframework.data.repository.CrudRepository;

public interface StandingRepository extends CrudRepository<Standing, Integer> {
}
