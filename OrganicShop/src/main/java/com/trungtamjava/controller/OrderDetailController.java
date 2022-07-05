package com.trungtamjava.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trungtamjava.dto.TopProduct;
import com.trungtamjava.model.OrderDetail;
import com.trungtamjava.service.OrderDetailService;

@RestController
@RequestMapping("/orderdetails")
@CrossOrigin
public class OrderDetailController {
	@Autowired
	private OrderDetailService orderDetailService;

	@GetMapping("")
	public ResponseEntity<List<OrderDetail>> getAllOrderDetail() {
		List<OrderDetail> listOrderDetails=orderDetailService.findAll();
		return new ResponseEntity<List<OrderDetail>>(listOrderDetails,HttpStatus.OK);
	}
	@PostMapping("")
	public ResponseEntity<Object> addOrderDetail(@RequestBody OrderDetail orderDetail){
		orderDetailService.save(orderDetail);
		return new ResponseEntity<Object>("Created",HttpStatus.OK);
	}
	@GetMapping("/{id}")
	public ResponseEntity<List<OrderDetail>> findOrderDetailByOrderId(@PathVariable Integer id){
		List<OrderDetail> listOrder=orderDetailService.findOrderDetailByOrderID(id);
		return new ResponseEntity<List<OrderDetail>>(listOrder,HttpStatus.OK);
	}
	
	@GetMapping("/top-product")
	public ResponseEntity<List<TopProduct>> listProduct(){
		return new ResponseEntity<List<TopProduct>>(orderDetailService.listProduct(),HttpStatus.OK);
	}
	@GetMapping("/sell-slowly-product")
	public ResponseEntity<List<TopProduct>> sellSlowlyProduct(){
		return new ResponseEntity<List<TopProduct>>(orderDetailService.sellSlowlyProduct(),HttpStatus.OK);
	}
}
