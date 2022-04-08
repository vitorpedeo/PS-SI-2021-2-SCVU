package br.com.ufg.desapega.models;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "item")
@Data
public class Item {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "seller")
    private User seller;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category")
    private Category category;

    @Column(name = "title", nullable = false, length = 50)
    private String title;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "request_date", nullable = false)
    private LocalDate requestDate;

    @Column(name = "description", nullable = false, length = 400)
    private String description;

    @Column(name = "image", nullable = false, length = 300)
    private String image;

}