package com.trungtamjava.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.trungtamjava.dto.TopUser;
import com.trungtamjava.model.OrderDetail;
import com.trungtamjava.model.Orders;
import com.trungtamjava.model.User;
import com.trungtamjava.repository.OrderDetailReposioty;
import com.trungtamjava.repository.OrderRepository;
import com.trungtamjava.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService{
@Autowired
private OrderRepository orderRepository;
@Autowired
private OrderDetailReposioty orderDetailRepository;
@Override
public <S extends Orders> S save(S entity) {
	return orderRepository.save(entity);
}

@Override
public List<TopUser> topUser() {
	return orderRepository.topUser();
}

@Override
public Page<Orders> findAll(Pageable pageable) {
	return orderRepository.findAll(pageable);
}

@Override
public List<Orders> findAll() {
	return orderRepository.findAll();
}

@Override
public List<Orders> findAll(Sort sort) {
	return orderRepository.findAll(sort);
}

@Override
public List<Orders> findAllById(Iterable<Integer> ids) {
	return orderRepository.findAllById(ids);
}

@Override
public Optional<Orders> findById(Integer id) {
	return orderRepository.findById(id);
}

@Override
public <S extends Orders> List<S> saveAll(Iterable<S> entities) {
	return orderRepository.saveAll(entities);
}

@Override
public void flush() {
	orderRepository.flush();
}



@Override
public <S extends Orders> S saveAndFlush(S entity) {
	return orderRepository.saveAndFlush(entity);
}

@Override
public boolean existsById(Integer id) {
	return orderRepository.existsById(id);
}







//@Override
//public List<Orders> findByUserID(Integer id) {
//	return orderRepository.findByUserID(id);
//}

@Override
public <S extends Orders> List<S> saveAllAndFlush(Iterable<S> entities) {
	return orderRepository.saveAllAndFlush(entities);
}

@Override
public void deleteInBatch(Iterable<Orders> entities) {
	orderRepository.deleteInBatch(entities);
}

@Override
public void deleteAllInBatch(Iterable<Orders> entities) {
	orderRepository.deleteAllInBatch(entities);
}

@Override
public long count() {
	return orderRepository.count();
}

@Override
public void deleteById(Integer id) {
	orderRepository.deleteById(id);
}

@Override
public void deleteAllByIdInBatch(Iterable<Integer> ids) {
	orderRepository.deleteAllByIdInBatch(ids);
}

@Override
public void delete(Orders entity) {
	orderRepository.delete(entity);
}

@Override
public void deleteAllById(Iterable<? extends Integer> ids) {
	orderRepository.deleteAllById(ids);
}

@Override
public void deleteAllInBatch() {
	orderRepository.deleteAllInBatch();
}

@Override
public Orders getOne(Integer id) {
	return orderRepository.getOne(id);
}

@Override
public void deleteAll(Iterable<? extends Orders> entities) {
	orderRepository.deleteAll(entities);
}

@Override
public void deleteAll() {
	orderRepository.deleteAll();
}



@Override
public Orders getById(Integer id) {
	return orderRepository.getById(id);
}
@Override
public Orders create(JsonNode orderData) {
	ObjectMapper mapper=new ObjectMapper();
	Orders order=mapper.convertValue(orderData, Orders.class);
	orderRepository.save(order);
	TypeReference<List<OrderDetail>> type= new TypeReference<List<OrderDetail>>() {
	};
	List<OrderDetail> details=mapper.convertValue(orderData.get("orderDetails"), type)
			.stream().peek(d->d.setOrders(order)).collect(Collectors.toList());
	for(OrderDetail c:details) {
		orderDetailRepository.save(c);
	}
	return order;
	
}

}
