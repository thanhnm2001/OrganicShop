package com.trungtamjava.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trungtamjava.model.UsersRoles;
@Repository
public interface UsersRolesRepository extends JpaRepository<UsersRoles, Integer>{

}
