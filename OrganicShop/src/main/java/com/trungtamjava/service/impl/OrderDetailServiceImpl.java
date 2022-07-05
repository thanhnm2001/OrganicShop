package com.trungtamjava.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.trungtamjava.dto.TopProduct;
import com.trungtamjava.model.OrderDetail;
import com.trungtamjava.repository.OrderDetailReposioty;
import com.trungtamjava.service.OrderDetailService;
@Service
public class OrderDetailServiceImpl implements OrderDetailService{
@Autowired
private OrderDetailReposioty orderDetailRepository;

@Override
public <S extends OrderDetail> S save(S entity) {
	return orderDetailRepository.save(entity);
}

@Override
public Page<OrderDetail> findAll(Pageable pageable) {
	return orderDetailRepository.findAll(pageable);
}

@Override
public List<OrderDetail> findAll() {
	return orderDetailRepository.findAll();
}

@Override
public List<OrderDetail> findOrderDetailByOrderID(Integer id) {
	return orderDetailRepository.findOrderDetailByOrderID(id);
}

@Override
public List<OrderDetail> findAll(Sort sort) {
	return orderDetailRepository.findAll(sort);
}

@Override
public List<OrderDetail> findAllById(Iterable<Integer> ids) {
	return orderDetailRepository.findAllById(ids);
}

@Override
public Optional<OrderDetail> findById(Integer id) {
	return orderDetailRepository.findById(id);
}

@Override
public <S extends OrderDetail> List<S> saveAll(Iterable<S> entities) {
	return orderDetailRepository.saveAll(entities);
}

@Override
public void flush() {
	orderDetailRepository.flush();
}

@Override
public <S extends OrderDetail> S saveAndFlush(S entity) {
	return orderDetailRepository.saveAndFlush(entity);
}

@Override
public boolean existsById(Integer id) {
	return orderDetailRepository.existsById(id);
}

@Override
public <S extends OrderDetail> List<S> saveAllAndFlush(Iterable<S> entities) {
	return orderDetailRepository.saveAllAndFlush(entities);
}

@Override
public void deleteInBatch(Iterable<OrderDetail> entities) {
	orderDetailRepository.deleteInBatch(entities);
}

@Override
public void deleteAllInBatch(Iterable<OrderDetail> entities) {
	orderDetailRepository.deleteAllInBatch(entities);
}

@Override
public long count() {
	return orderDetailRepository.count();
}

@Override
public void deleteById(Integer id) {
	orderDetailRepository.deleteById(id);
}

@Override
public void deleteAllByIdInBatch(Iterable<Integer> ids) {
	orderDetailRepository.deleteAllByIdInBatch(ids);
}

@Override
public void delete(OrderDetail entity) {
	orderDetailRepository.delete(entity);
}

@Override
public void deleteAllById(Iterable<? extends Integer> ids) {
	orderDetailRepository.deleteAllById(ids);
}

@Override
public void deleteAllInBatch() {
	orderDetailRepository.deleteAllInBatch();
}

@Override
public OrderDetail getOne(Integer id) {
	return orderDetailRepository.getOne(id);
}

@Override
public void deleteAll(Iterable<? extends OrderDetail> entities) {
	orderDetailRepository.deleteAll(entities);
}

@Override
public void deleteAll() {
	orderDetailRepository.deleteAll();
}

@Override
public OrderDetail getById(Integer id) {
	return orderDetailRepository.getById(id);
}

@Override
public List<TopProduct> listProduct() {
	return orderDetailRepository.listProduct();
}
@Override
public List<TopProduct> sellSlowlyProduct(){
	return orderDetailRepository.sellSlowlyProduct();
}

	
}
