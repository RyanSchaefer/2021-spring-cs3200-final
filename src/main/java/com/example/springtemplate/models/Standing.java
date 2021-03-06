package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.web.bind.annotation.Mapping;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="standings")
@IdClass(StandingId.class)
public class Standing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int qualified;
    private int position;
    @Id
    @Column(insertable = false, updatable = false)
    private int race_id;
    @Id
    @Column(insertable = false, updatable = false)
    private int driver_id;

    @Id
    @ManyToOne
    @PrimaryKeyJoinColumn(
            name="race_id",
            referencedColumnName = "id"
    )
    @JsonIgnore
    private Race race;

    @Id
    @ManyToOne
    @PrimaryKeyJoinColumn(
            name="driver_id",
            referencedColumnName = "id"
    )
    @JsonIgnore
    private Driver driver;

    @OneToOne
    private FinishType finished_type;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getQualified() {
        return qualified;
    }

    public void setQualified(int qualified) {
        this.qualified = qualified;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }

    public Race getRace() {
        return race;
    }

    public void setRace(Race race) {
        this.race = race;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public FinishType getFinished_type() {
        return finished_type;
    }

    public void setFinished_type(FinishType finished_type) {
        this.finished_type = finished_type;
    }

    public int getRace_id() {
        return race_id;
    }

    public void setRace_id(int race_id) {
        this.race_id = race_id;
    }

    public int getDriver_id() {
        return driver_id;
    }

    public void setDriver_id(int driver_id) {
        this.driver_id = driver_id;
    }
}
