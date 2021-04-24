package com.example.springtemplate.daos;

import com.example.springtemplate.models.Driver;
import com.example.springtemplate.models.Race;
import com.example.springtemplate.models.Team;
import com.example.springtemplate.repositories.DriverRepository;
import com.example.springtemplate.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class DriverOrmDao {
    @Autowired
    DriverRepository driverRepository;

    @Autowired
    TeamRepository teamRepository;

    @PostMapping("/api/drivers")
    public Driver createDriver(@RequestBody Driver driver) {
        return driverRepository.save(driver);
    }

    @GetMapping("/api/drivers")
    public List<Driver> findAllDrivers() {
        return (List<Driver>) driverRepository.findAll();
    }

    @GetMapping("/api/drivers/{driverId}")
    public Driver findDriverById(
            @PathVariable("driverId") Integer id) {
        return driverRepository.findById(id).get();
    }

    @PutMapping("/api/drivers/{driverId}")
    public Driver updateDriver(
            @PathVariable("driverId") Integer id,
            @RequestBody Driver newDriver) {
        Driver driver = this.findDriverById(id);
        driverRepository.deleteById(driver.getId());
        return driverRepository.save(newDriver);
    }

    @PutMapping("/api/drivers/{driverId}/teams/{teamId}")
    public Driver addDriverToTeam(
            @PathVariable("driverId") Integer id,
            @PathVariable("teamId") Integer team_id) {
        Driver driver = this.findDriverById(id);
        Team team = (teamRepository.findById(team_id)).orElseThrow();
        driver.setTeam(team);
        return driverRepository.save(driver);
    }

    @DeleteMapping("/api/drivers/{driverId}")
    public void deleteDriver(
            @PathVariable("driverId") Integer id) {
        driverRepository.deleteById(id);
    }
}
