package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
public class FinishType {

    enum FinishTypeEnum {
        DNS, DNF, F
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Enumerated(EnumType.ORDINAL)
    private FinishTypeEnum name;

}
