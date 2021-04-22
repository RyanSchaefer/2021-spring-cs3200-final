package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Race;
import org.springframework.data.repository.CrudRepository;

public interface RaceRepository extends CrudRepository<Race, Integer> {
}
