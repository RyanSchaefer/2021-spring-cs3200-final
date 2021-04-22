package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.xml.bind.v2.model.core.ID;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name="teams")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Integer budget;
    private String ceo;
    @Column(columnDefinition="tinyint(1) default 1")
    private Boolean online;

    @OneToMany(mappedBy = "team")
    @JsonIgnore
    private List<Employee> employee;

    @OneToMany(mappedBy = "team")
    @JsonIgnore
    private List<Driver> drivers;


    public Integer getBudget() {
        return budget;
    }

    public void setBudget(Integer budget) {
        this.budget = budget;
    }

    public String getCeo() {
        return ceo;
    }

    public void setCeo(String ceo) {
        this.ceo = ceo;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
