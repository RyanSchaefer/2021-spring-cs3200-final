package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Driver;
import org.springframework.data.repository.CrudRepository;

public interface DriverRepository extends CrudRepository<Driver, Integer> {
}
