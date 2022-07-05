package com.trungtamjava.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trungtamjava.model.Category;
@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>{
	boolean existsByName(String name);
}
