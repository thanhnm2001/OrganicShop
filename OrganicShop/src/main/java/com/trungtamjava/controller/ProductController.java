package com.trungtamjava.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.trungtamjava.model.Category;
import com.trungtamjava.model.Product;
import com.trungtamjava.service.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {
@Autowired
private ProductService productService;
@GetMapping("")
public ResponseEntity<List<Product>> getAllProduct( @RequestParam(name = "page", required = false, defaultValue = "0") Integer page,
	      @RequestParam(name = "size", required = false, defaultValue = ""+Integer.MAX_VALUE) Integer size){
	
	Pageable pageable=PageRequest.of(page,size);
	Page<Product> pageF=productService.findAll(pageable);
	List<Product> listProduct=pageF.getContent();
	return new ResponseEntity<List<Product>>(listProduct,HttpStatus.OK);
}
@GetMapping("/{id}")
public ResponseEntity<Object> getProductById(@PathVariable int id) {
	Optional<Product> product = productService.findById(id);
	return product.isPresent() ?
			new ResponseEntity<Object>(product, HttpStatus.OK) :
				new ResponseEntity<Object>("Product is not found",HttpStatus.NOT_FOUND);

}
@GetMapping("search/{productname}")
public ResponseEntity<Object> getProductByName(@PathVariable String productname) {
	Optional<Product> product = productService.findByProductName(productname);
	return product.isPresent()?
			new ResponseEntity<Object>(product,HttpStatus.OK) :
				new ResponseEntity<Object>("product is not found",HttpStatus.NOT_FOUND);
}
@PostMapping("")
public ResponseEntity<Object> createProduct(@RequestBody Product product){
	productService.save(product);
	return new ResponseEntity<Object>("Created",HttpStatus.CREATED);
}
@PutMapping("/{id}")
public ResponseEntity<String> updateCategory(@RequestBody Product pro){
	Optional<Product> product = productService.findById(pro.getId());
	
	if (product.isPresent()) {
		
		productService.save(pro);
		return new ResponseEntity<String>( "Updated", HttpStatus.OK);
	} else {
		return new ResponseEntity<String>("Not found Product",HttpStatus.NO_CONTENT);
	}
	
}
}
