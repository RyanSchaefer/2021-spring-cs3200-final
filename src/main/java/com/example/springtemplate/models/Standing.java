package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

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

    @ManyToOne
    @PrimaryKeyJoinColumn(
            name="race_id",
            referencedColumnName = "id"
    )
    @JsonIgnore
    private Race race;
    @ManyToOne
    @PrimaryKeyJoinColumn(
            name="driver_id",
            referencedColumnName = "id"
    )
    @JsonIgnore
    private Driver driver;

    @Id
    private FinishType.FinishTypeEnum finished_type_id;

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

    public FinishType.FinishTypeEnum getFinished_type_id() {
        return finished_type_id;
    }

    public void setFinished_type_id(FinishType.FinishTypeEnum finished_type_id) {
        this.finished_type_id = finished_type_id;
    }
}
