package com.trungtamjava.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.trungtamjava.dto.TopUser;
import com.trungtamjava.model.Orders;
import com.trungtamjava.model.User;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Integer>{
//	
//	@Query("select u from orders u where u.users.id = ?1 ORDER BY u.id DESC")
//    List<Orders> findByUserID(Integer id);
	
	@Query(name="topUser",nativeQuery = true)
	List<TopUser> topUser();
}
