package com.trungtamjava.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.trungtamjava.model.UsersRoles;
import com.trungtamjava.repository.UsersRolesRepository;
import com.trungtamjava.service.UsersRolesService;
@Service
public class UsersRolesServiceImpl implements UsersRolesService{
@Autowired
private UsersRolesRepository usersRolesRepository;

@Override
public <S extends UsersRoles> S save(S entity) {
	return usersRolesRepository.save(entity);
}

@Override
public Page<UsersRoles> findAll(Pageable pageable) {
	return usersRolesRepository.findAll(pageable);
}

@Override
public List<UsersRoles> findAll() {
	return usersRolesRepository.findAll();
}

@Override
public List<UsersRoles> findAll(Sort sort) {
	return usersRolesRepository.findAll(sort);
}

@Override
public List<UsersRoles> findAllById(Iterable<Integer> ids) {
	return usersRolesRepository.findAllById(ids);
}

@Override
public Optional<UsersRoles> findById(Integer id) {
	return usersRolesRepository.findById(id);
}

@Override
public <S extends UsersRoles> List<S> saveAll(Iterable<S> entities) {
	return usersRolesRepository.saveAll(entities);
}

@Override
public void flush() {
	usersRolesRepository.flush();
}

@Override
public <S extends UsersRoles> S saveAndFlush(S entity) {
	return usersRolesRepository.saveAndFlush(entity);
}

@Override
public boolean existsById(Integer id) {
	return usersRolesRepository.existsById(id);
}

@Override
public <S extends UsersRoles> List<S> saveAllAndFlush(Iterable<S> entities) {
	return usersRolesRepository.saveAllAndFlush(entities);
}

@Override
public void deleteInBatch(Iterable<UsersRoles> entities) {
	usersRolesRepository.deleteInBatch(entities);
}

@Override
public void deleteAllInBatch(Iterable<UsersRoles> entities) {
	usersRolesRepository.deleteAllInBatch(entities);
}

@Override
public long count() {
	return usersRolesRepository.count();
}

@Override
public void deleteById(Integer id) {
	usersRolesRepository.deleteById(id);
}

@Override
public void deleteAllByIdInBatch(Iterable<Integer> ids) {
	usersRolesRepository.deleteAllByIdInBatch(ids);
}

@Override
public void delete(UsersRoles entity) {
	usersRolesRepository.delete(entity);
}

@Override
public void deleteAllById(Iterable<? extends Integer> ids) {
	usersRolesRepository.deleteAllById(ids);
}

@Override
public void deleteAllInBatch() {
	usersRolesRepository.deleteAllInBatch();
}

@Override
public UsersRoles getOne(Integer id) {
	return usersRolesRepository.getOne(id);
}

@Override
public void deleteAll(Iterable<? extends UsersRoles> entities) {
	usersRolesRepository.deleteAll(entities);
}

@Override
public void deleteAll() {
	usersRolesRepository.deleteAll();
}

@Override
public UsersRoles getById(Integer id) {
	return usersRolesRepository.getById(id);
}

}
