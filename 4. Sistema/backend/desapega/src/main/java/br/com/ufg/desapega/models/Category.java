package br.com.ufg.desapega.models;

import lombok.Data;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "category")
@Data
public class Category {
    @Id
    @Column(name = "name", nullable = false, length = 20)
    private String id;

    @Column(name = "image", nullable = false, length = 100)
    private String image;

    @OneToMany(mappedBy = "category")
    private Set<Item> items = new LinkedHashSet<>();
}