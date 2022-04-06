package br.com.ufg.desapega.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "address")
@Data
public class Address {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner")
    private User user;

    @Column(name = "number", nullable = false)
    private Integer number;

    @Column(name = "cep", nullable = false, length = 9)
    private String cep;

    @Column(name = "street", nullable = false, length = 20)
    private String street;

    @Column(name = "state", nullable = false, length = 30)
    private String state;

    @Column(name = "city", nullable = false, length = 30)
    private String city;
}