package br.com.ufg.desapega.models;

import lombok.*;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "\"user\"")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @Column(name = "email", nullable = false, length = 50)
    private String email;

    @Column(name = "name", nullable = false, length = 50)
    private String name;

    @Column(name = "password", nullable = false, length = 300)
    private String password;

    @Column(name = "photo", length = 300)
    private String photo;

    @OneToMany(mappedBy = "seller")
    private Set<Item> items = new LinkedHashSet<>();

    @OneToMany(mappedBy = "ratedBy")
    private Set<Rating> ratings = new LinkedHashSet<>();

    @OneToMany(mappedBy = "user")
    private Set<Address> addresses = new LinkedHashSet<>();

    @OneToMany(mappedBy = "owner")
    private Set<CreditCard> creditCards = new LinkedHashSet<>();
}