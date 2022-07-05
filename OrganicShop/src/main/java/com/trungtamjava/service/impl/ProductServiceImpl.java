package com.trungtamjava.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.trungtamjava.model.Product;
import com.trungtamjava.repository.ProductRepository;
import com.trungtamjava.service.ProductService;
@Service
public class ProductServiceImpl implements ProductService{
@Autowired
private ProductRepository productRepository;

@Override
public <S extends Product> S save(S entity) {
	return productRepository.save(entity);
}

@Override
public Page<Product> findAll(Pageable pageable) {
	return productRepository.findAll(pageable);
}

@Override
public List<Product> findAll() {
	return productRepository.findAll();
}

@Override
public List<Product> findAll(Sort sort) {
	return productRepository.findAll(sort);
}

@Override
public List<Product> findAllById(Iterable<Integer> ids) {
	return productRepository.findAllById(ids);
}

@Override
public Optional<Product> findById(Integer id) {
	return productRepository.findById(id);
}

@Override
public <S extends Product> List<S> saveAll(Iterable<S> entities) {
	return productRepository.saveAll(entities);
}

@Override
public void flush() {
	productRepository.flush();
}

@Override
public <S extends Product> S saveAndFlush(S entity) {
	return productRepository.saveAndFlush(entity);
}

@Override
public boolean existsById(Integer id) {
	return productRepository.existsById(id);
}

@Override
public <S extends Product> List<S> saveAllAndFlush(Iterable<S> entities) {
	return productRepository.saveAllAndFlush(entities);
}

@Override
public Optional<Product> findByProductName(String productName) {
	return productRepository.findByProductName(productName);
}

@Override
public void deleteInBatch(Iterable<Product> entities) {
	productRepository.deleteInBatch(entities);
}

@Override
public void deleteAllInBatch(Iterable<Product> entities) {
	productRepository.deleteAllInBatch(entities);
}

@Override
public long count() {
	return productRepository.count();
}

@Override
public void deleteById(Integer id) {
	productRepository.deleteById(id);
}

@Override
public void deleteAllByIdInBatch(Iterable<Integer> ids) {
	productRepository.deleteAllByIdInBatch(ids);
}

@Override
public void delete(Product entity) {
	productRepository.delete(entity);
}

@Override
public void deleteAllById(Iterable<? extends Integer> ids) {
	productRepository.deleteAllById(ids);
}

@Override
public void deleteAllInBatch() {
	productRepository.deleteAllInBatch();
}

@Override
public Product getOne(Integer id) {
	return productRepository.getOne(id);
}

@Override
public void deleteAll(Iterable<? extends Product> entities) {
	productRepository.deleteAll(entities);
}

@Override
public void deleteAll() {
	productRepository.deleteAll();
}

@Override
public Product getById(Integer id) {
	return productRepository.getById(id);
}


}
