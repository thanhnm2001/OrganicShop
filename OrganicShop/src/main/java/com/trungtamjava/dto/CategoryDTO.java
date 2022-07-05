package com.trungtamjava.dto;



import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDTO {
	
	private Integer id;
	@NotBlank(message = "name not allow null")
	private String name;
	@NotBlank(message = "description not allow null")
	private String description;
}
