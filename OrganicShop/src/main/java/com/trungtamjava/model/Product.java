package com.trungtamjava.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;
	@Column(name = "name",nullable = false,length = 100)
	private String name;
	@Column
	private double price;
	@Column
	private double weight;
	@Column
	private String image;
	@Column
	private String description;
	@Column
	private boolean status;
	@Column
	@Temporal(value = TemporalType.TIMESTAMP)
	private Date createddate;
	
	@ManyToOne()
	@JoinColumn(name = "category_id", nullable = false,referencedColumnName = "id")
	private Category category;
	@JsonIgnore
	@OneToMany(mappedBy = "product",fetch = FetchType.LAZY)
	private List<OrderDetail> orderDetails;

}
