package com.trungtamjava.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.trungtamjava.model.User;
import com.trungtamjava.repository.UserRepository;


@Service
public class MyUserDetailService implements UserDetailsService {
@Autowired
private UserRepository userRepository;

@Override
public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	User user=userRepository.findByUsername(username);
	 if (user == null) {
	      throw new UsernameNotFoundException("Username Not Found");
	    }
	    boolean enabled = true;
	    boolean accountNonExpired = true;
	    boolean credentialsNonExpired = true;
	    boolean accountNonLocked = true;
	   
	    return new org.springframework.security.core.userdetails.User(username, user.getPassword(), enabled, accountNonExpired, credentialsNonExpired,
	        accountNonLocked, user.getAuthories());
	  }
	

	
}