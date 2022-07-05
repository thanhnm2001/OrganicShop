package com.trungtamjava.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.trungtamjava.dto.TopProduct;
import com.trungtamjava.model.OrderDetail;
@Repository
public interface OrderDetailReposioty extends JpaRepository<OrderDetail, Integer>{
	@Query("select u from OrderDetail u where u.orders.id = ?1")
  	List<OrderDetail> findOrderDetailByOrderID(Integer id);
	//de theo ten class
	
	
	@Query(name = "topProduct",nativeQuery = true)
	List<TopProduct> listProduct();
	@Query(name = "lowProduct",nativeQuery=true)
	List<TopProduct> sellSlowlyProduct();
}
