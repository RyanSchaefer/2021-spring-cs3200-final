package com.example.springtemplate.models;


import javax.persistence.*;

@Entity
public class FinishType {

    public enum FinishTypeEnum {
        DNS, DNF, F
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Enumerated(EnumType.STRING)
    private FinishTypeEnum name;

    public FinishTypeEnum getName() {
        return name;
    }

    public void setName(FinishTypeEnum name) {
        this.name = name;
    }

}
