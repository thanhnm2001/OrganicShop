package com.trungtamjava.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.trungtamjava.dto.TopProduct;
import com.trungtamjava.model.OrderDetail;

public interface OrderDetailService {

	OrderDetail getById(Integer id);

	void deleteAll();

	void deleteAll(Iterable<? extends OrderDetail> entities);

	OrderDetail getOne(Integer id);

	void deleteAllInBatch();

	void deleteAllById(Iterable<? extends Integer> ids);

	void delete(OrderDetail entity);

	void deleteAllByIdInBatch(Iterable<Integer> ids);

	void deleteById(Integer id);

	long count();

	void deleteAllInBatch(Iterable<OrderDetail> entities);

	void deleteInBatch(Iterable<OrderDetail> entities);

	<S extends OrderDetail> List<S> saveAllAndFlush(Iterable<S> entities);

	boolean existsById(Integer id);

	<S extends OrderDetail> S saveAndFlush(S entity);

	void flush();

	<S extends OrderDetail> List<S> saveAll(Iterable<S> entities);

	Optional<OrderDetail> findById(Integer id);

	List<OrderDetail> findAllById(Iterable<Integer> ids);

	List<OrderDetail> findAll(Sort sort);

	List<OrderDetail> findAll();

	Page<OrderDetail> findAll(Pageable pageable);

	<S extends OrderDetail> S save(S entity);

	List<OrderDetail> findOrderDetailByOrderID(Integer id);

	List<TopProduct> listProduct();
	List<TopProduct> sellSlowlyProduct();


}
