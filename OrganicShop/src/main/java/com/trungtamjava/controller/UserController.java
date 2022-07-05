package com.trungtamjava.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.trungtamjava.model.OrderDetail;
import com.trungtamjava.model.Orders;
import com.trungtamjava.model.Product;
import com.trungtamjava.model.User;
import com.trungtamjava.model.UsersRoles;
import com.trungtamjava.repository.UserRepository;
import com.trungtamjava.service.UserService;
import com.trungtamjava.service.UsersRolesService;


@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
@Autowired
private UserRepository userRepository;
@Autowired
private UserService userService;
@Autowired
private UsersRolesService usersRolesService;
@GetMapping("/{username}")
public ResponseEntity<Object> getUserByUserName(@PathVariable String username){
	User user=userRepository.findByUsername(username);
	return new ResponseEntity<Object>(user,HttpStatus.OK);
}
@GetMapping("")
public ResponseEntity<List<User>> listUser(){
 return new ResponseEntity<List<User>>(userRepository.findAll(),HttpStatus.OK);
}
@PostMapping("")
public ResponseEntity<Object> createUser(@RequestBody JsonNode userData){
	
	ObjectMapper mapper=new ObjectMapper();
	User user=mapper.convertValue(userData, User.class);
	
	TypeReference<List<UsersRoles>> type= new TypeReference<List<UsersRoles>>() {
	};
	List<UsersRoles> details=mapper.convertValue(userData.get("authories"), type)
			.stream().peek(d->d.setUsers(user)).collect(Collectors.toList());
	user.setListUsersRoles(details);
//	for(UsersRoles c:details) {
//		usersRolesService.save(c);
//	}
	userService.save(user);
	return new ResponseEntity<Object>("Created",HttpStatus.CREATED);
}
}
