package com.trungtamjava.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.fasterxml.jackson.databind.JsonNode;
import com.trungtamjava.dto.TopUser;
import com.trungtamjava.model.Orders;
import com.trungtamjava.model.User;

public interface OrderService {

	Orders getById(Integer id);

	void deleteAll();

	void deleteAll(Iterable<? extends Orders> entities);

	Orders getOne(Integer id);

	void deleteAllInBatch();

	void deleteAllById(Iterable<? extends Integer> ids);

	void delete(Orders entity);

	void deleteAllByIdInBatch(Iterable<Integer> ids);

	void deleteById(Integer id);

	long count();

	void deleteAllInBatch(Iterable<Orders> entities);

	void deleteInBatch(Iterable<Orders> entities);

	<S extends Orders> List<S> saveAllAndFlush(Iterable<S> entities);

	boolean existsById(Integer id);

	<S extends Orders> S saveAndFlush(S entity);

	void flush();

	<S extends Orders> List<S> saveAll(Iterable<S> entities);

	Optional<Orders> findById(Integer id);

	List<Orders> findAllById(Iterable<Integer> ids);

	List<Orders> findAll(Sort sort);

	List<Orders> findAll();

	Page<Orders> findAll(Pageable pageable);

	<S extends Orders> S save(S entity);

	Orders create(JsonNode orderData);

	List<TopUser> topUser();

	

//	List<Orders> findByUserID(Integer id);

	

	

}
