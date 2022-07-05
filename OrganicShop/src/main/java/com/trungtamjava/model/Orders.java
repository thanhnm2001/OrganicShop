package com.trungtamjava.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ColumnResult;
import javax.persistence.ConstructorResult;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedNativeQuery;
import javax.persistence.OneToMany;
import javax.persistence.SqlResultSetMapping;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.trungtamjava.dto.TopUser;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NamedNativeQuery(name = "topUser",
query = "select users_id AS userID, COUNT(users_id) as total from orders GROUP BY users_id order BY total DESC limit 3", 
resultSetMapping = "TopUser")
@SqlResultSetMapping(name = "TopUser", classes = @ConstructorResult(columns = {
		@ColumnResult(name = "userID", type = Integer.class),
		@ColumnResult(name = "total", type = Integer.class) }, targetClass = TopUser.class

))
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "orders")

public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "OrderAddress")
	private String orderAddress;

	@Column(name = "Ammount")
	private Double ammount;

	@Temporal(TemporalType.TIMESTAMP)
	private Date orderedDate;

	@Column(name = "OrderStatus")
	private boolean orderStatus;

	@ManyToOne()
	@JoinColumn(name = "users_id", nullable = false, referencedColumnName = "id")
	private User users;
	

	@JsonIgnore
	@OneToMany(mappedBy = "orders", fetch = FetchType.LAZY)
	private List<OrderDetail> orderDetails;

}
