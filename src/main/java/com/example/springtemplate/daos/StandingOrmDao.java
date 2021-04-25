package com.example.springtemplate.daos;

import com.example.springtemplate.models.Driver;
import com.example.springtemplate.models.Standing;
import com.example.springtemplate.repositories.StandingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class StandingOrmDao {
    @Autowired
    StandingRepository standingRepository;

    @PostMapping("/api/standings")
    public Standing createDriver(@RequestBody Standing standing) {
        return standingRepository.save(standing);
    }

    @GetMapping("/api/standings")
    public List<Standing> findAllStandings() {
        return (List<Standing>) standingRepository.findAll();
    }

    @GetMapping("/api/standings/{standingId}")
    public Standing findStandingById(
            @PathVariable("standingId") Integer id) {
        return standingRepository.findById(id).get();
    }

    @PutMapping("/api/standings/{standingId}")
    public Standing updateStandings(
            @PathVariable("standingId") Integer id,
            @RequestBody Standing newStanding) {
        Standing standing = this.findStandingById(id);
        standing.setDriver(newStanding.getDriver());
        standing.setPosition(newStanding.getPosition());
        standing.setQualified(newStanding.getQualified());
        standing.setRace(newStanding.getRace());
        return standingRepository.save(newStanding);
    }

    @DeleteMapping("/api/standings/{standingId}")
    public void deleteDriver(
            @PathVariable("standingId") Integer id) {
        standingRepository.deleteById(id);
    }
}
