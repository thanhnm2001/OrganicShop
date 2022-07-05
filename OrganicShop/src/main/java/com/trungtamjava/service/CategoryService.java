package com.trungtamjava.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.trungtamjava.model.Category;

public interface CategoryService {

	Category getById(Integer id);

	void deleteAll();

	void deleteAll(Iterable<? extends Category> entities);

	Category getOne(Integer id);

	void deleteAllInBatch();

	void deleteAllById(Iterable<? extends Integer> ids);

	void delete(Category entity);

	void deleteAllByIdInBatch(Iterable<Integer> ids);

	void deleteById(Integer id);

	long count();

	void deleteAllInBatch(Iterable<Category> entities);

	void deleteInBatch(Iterable<Category> entities);

	<S extends Category> List<S> saveAllAndFlush(Iterable<S> entities);

	boolean existsById(Integer id);

	<S extends Category> S saveAndFlush(S entity);

	void flush();

	<S extends Category> List<S> saveAll(Iterable<S> entities);

	Optional<Category> findById(Integer id);

	List<Category> findAllById(Iterable<Integer> ids);

	List<Category> findAll(Sort sort);

	List<Category> findAll();

	Page<Category> findAll(Pageable pageable);

	<S extends Category> S save(S entity);

	boolean existsByName(String name);

}
