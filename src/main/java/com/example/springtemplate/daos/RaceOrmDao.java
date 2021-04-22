package com.example.springtemplate.daos;

import com.example.springtemplate.models.Race;
import com.example.springtemplate.repositories.RaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RaceOrmDao {
    @Autowired
    RaceRepository raceRepository;

    @PostMapping("/api/races")
    public Race createRace(@RequestBody Race race) {
        return raceRepository.save(race);
    }

    @GetMapping("/api/races")
    public List<Race> findAllRaces() {
        return (List<Race>) raceRepository.findAll();
    }

    @GetMapping("/api/races/{raceId}")
    public Race findRaceById(
            @PathVariable("raceId") Integer id) {
        return raceRepository.findById(id).get();
    }

    @PutMapping("/api/update/races/{raceId}")
    public Race updateRace(
            @PathVariable("raceId") Integer id,
            @RequestBody Race newRace) {
        Race race = this.findRaceById(id);
        raceRepository.deleteById(race.getId());
        return raceRepository.save(newRace);
    }

    @DeleteMapping("/api/races/{raceId}")
    public void deleteRace(
            @PathVariable("raceId") Integer id) {
        raceRepository.deleteById(id);
    }
}
