package com.trungtamjava.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ColumnResult;
import javax.persistence.ConstructorResult;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedNativeQueries;
import javax.persistence.NamedNativeQuery;
import javax.persistence.SqlResultSetMapping;
import javax.persistence.Table;

import com.trungtamjava.dto.TopProduct;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NamedNativeQueries(
		{
			@NamedNativeQuery(name = "topProduct",
					query = "select product_id AS productID, SUM(quantity) AS count FROM order_detail GROUP BY product_id ORDER BY count DESC limit 3",
					resultSetMapping = "TopProduct"),
					@NamedNativeQuery(name = "lowProduct",
					query = "select product_id AS productID, SUM(quantity) AS count FROM order_detail GROUP BY product_id ORDER BY count ASC limit 3",
					resultSetMapping = "TopProduct")
		}
		)
@SqlResultSetMapping(name = "TopProduct",
   classes = @ConstructorResult(targetClass = TopProduct.class,
           columns = {@ColumnResult(name = "productID",type = Integer.class),
                   @ColumnResult(name = "count",type = Integer.class)}))
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "orderDetail")


public class OrderDetail {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column
	private int quantity;
	
    @ManyToOne
    @JoinColumn(name = "product_id",nullable = false,referencedColumnName = "id")
    private Product product;
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "orders_id",nullable = false,referencedColumnName = "id")
    private Orders orders;
}
