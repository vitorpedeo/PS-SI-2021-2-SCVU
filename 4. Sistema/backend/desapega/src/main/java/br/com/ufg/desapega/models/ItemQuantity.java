package br.com.ufg.desapega.models;

import javax.persistence.*;

@Entity
@Table(name = "item_quantity")
public class ItemQuantity {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_order")
    private Order idOrder;

    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_item")
    private Item idItem;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;
}