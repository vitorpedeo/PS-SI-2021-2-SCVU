package br.com.ufg.desapega.models;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "credit_card")
@Data
public class CreditCard {
    @Id
    @Column(name = "number", nullable = false, length = 50)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner")
    private User owner;

    @Column(name = "titular_name", nullable = false, length = 50)
    private String titularName;

    @Column(name = "expiring_date", nullable = false)
    private LocalDate expiringDate;

    @Column(name = "cvc", nullable = false)
    private Integer cvc;

    @Column(name = "type", nullable = false, length = 50)
    private String type;
}