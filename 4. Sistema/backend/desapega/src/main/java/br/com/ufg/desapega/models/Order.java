package br.com.ufg.desapega.models;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "\"order\"")
@Data
public class Order {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Column(name = "request_date", nullable = false)
    private LocalDate requestDate;

    @Column(name = "delivery_status", nullable = false, length = 20)
    private String deliveryStatus;

    @Column(name = "payment_method", nullable = false, length = 10)
    private String paymentMethod;
}