package com.trungtamjava.controller;

import java.util.List;
import java.util.Optional;

import javax.persistence.criteria.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.trungtamjava.dto.TopUser;
import com.trungtamjava.model.Orders;
import com.trungtamjava.model.Product;
import com.trungtamjava.service.OrderService;

@RestController
@RequestMapping("/order")
@CrossOrigin
public class OrderController {
@Autowired
private OrderService orderService;
@GetMapping("")
public ResponseEntity<List<Orders>> listOrder(){
	List<Orders> listOrders=orderService.findAll();
	return new ResponseEntity<List<Orders>>(listOrders,HttpStatus.OK);
}
@GetMapping("/{id}")
public ResponseEntity<Object> findOrderById(@PathVariable Integer id){
	Optional<Orders> order=orderService.findById(id);
	if (order.isPresent()) {
		return new ResponseEntity<Object>(order, HttpStatus.OK);
	} else {
		return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);
	}
}
@PostMapping("")
public ResponseEntity<Object> createOrder(@RequestBody JsonNode orderData){
	
	orderService.create(orderData);
	return new ResponseEntity<Object>("Created",HttpStatus.OK);
}
@PutMapping("/{id}")
public ResponseEntity<String> updateOrder(@RequestBody Orders order){
	Optional<Orders> o = orderService.findById(order.getId());
	
	if (o.isPresent()) {
		
		orderService.save(order);
		return new ResponseEntity<String>( "Updated", HttpStatus.OK);
	} else {
		return new ResponseEntity<String>("Not found Product",HttpStatus.NO_CONTENT);
	}
	
}
@GetMapping("/topUser")
public ResponseEntity<List<TopUser>> listUser(){
	return new ResponseEntity<List<TopUser>>(orderService.topUser(),HttpStatus.OK);
}
//@GetMapping("/user/{id}")
//public ResponseEntity<List<Orders>> orderUser(@PathVariable Integer id){
//	List<Orders> listOrders=orderService.findByUserID(id);
//	return new ResponseEntity<List<Orders>>(listOrders,HttpStatus.OK);
//	
//}
}
