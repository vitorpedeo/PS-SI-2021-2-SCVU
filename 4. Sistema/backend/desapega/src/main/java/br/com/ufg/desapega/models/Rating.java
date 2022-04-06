package br.com.ufg.desapega.models;

import javax.persistence.*;

@Entity
@Table(name = "rating")
public class Rating {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "rated_by")
    private User ratedBy;

    @Column(name = "comment", length = 200)
    private String comment;

    @Column(name = "rating_value", nullable = false)
    private Integer ratingValue;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "rated_item")
    private Item ratedItem;
}