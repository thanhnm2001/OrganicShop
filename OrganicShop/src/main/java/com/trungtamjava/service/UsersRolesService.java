package com.trungtamjava.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.trungtamjava.model.UsersRoles;

public interface UsersRolesService {

	UsersRoles getById(Integer id);

	void deleteAll();

	void deleteAll(Iterable<? extends UsersRoles> entities);

	UsersRoles getOne(Integer id);

	void deleteAllInBatch();

	void deleteAllById(Iterable<? extends Integer> ids);

	void delete(UsersRoles entity);

	void deleteAllByIdInBatch(Iterable<Integer> ids);

	void deleteById(Integer id);

	long count();

	void deleteAllInBatch(Iterable<UsersRoles> entities);

	void deleteInBatch(Iterable<UsersRoles> entities);

	<S extends UsersRoles> List<S> saveAllAndFlush(Iterable<S> entities);

	boolean existsById(Integer id);

	<S extends UsersRoles> S saveAndFlush(S entity);

	void flush();

	<S extends UsersRoles> List<S> saveAll(Iterable<S> entities);

	Optional<UsersRoles> findById(Integer id);

	List<UsersRoles> findAllById(Iterable<Integer> ids);

	List<UsersRoles> findAll(Sort sort);

	List<UsersRoles> findAll();

	Page<UsersRoles> findAll(Pageable pageable);

	<S extends UsersRoles> S save(S entity);

}
