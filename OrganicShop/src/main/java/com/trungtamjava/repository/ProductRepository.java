package com.trungtamjava.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.trungtamjava.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
	@Query("select u from Product u where u.name = ?1")
    Optional<Product> findByProductName(String productName);
}
