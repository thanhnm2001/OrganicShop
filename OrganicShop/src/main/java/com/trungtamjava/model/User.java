package com.trungtamjava.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})

public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "username",nullable = false)
	private String username;
	@Column(name = "password",nullable = false)
	private String password;
	
	@Column(name = "email",nullable = false)
	private String email;
	
	@Column(name = "fullname",length = 100,nullable = false)
	private String fullname;
	@Column(name = "address",nullable = false)
	private String address;
	@Column(name = "phone",nullable = false)
	private int phone;
	@Column(name = "enabled")
	private boolean enabled=false;
//	@OneToOne(mappedBy = "users",fetch=FetchType.LAZY)
//	private VerificationToken verificationToken;
	@JsonIgnore
	@OneToMany(mappedBy = "users",fetch = FetchType.LAZY)
	private List<Orders> orders;
	
	@JsonIgnore
	@OneToMany(mappedBy = "users", fetch = FetchType.EAGER)
	private List<UsersRoles> listUsersRoles;
	//khong the de lazy vi khong tu dong get roles.

	@Transient
	public List<GrantedAuthority> getAuthories() {
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		for (UsersRoles usersRoles : listUsersRoles) {
			authorities.add(new SimpleGrantedAuthority(usersRoles.getRole().getName()));
		}
		return authorities;
	}
}
