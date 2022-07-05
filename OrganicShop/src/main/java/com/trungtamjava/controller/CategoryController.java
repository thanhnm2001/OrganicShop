package com.trungtamjava.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.trungtamjava.dto.CategoryDTO;
import com.trungtamjava.model.Category;
import com.trungtamjava.model.Product;
import com.trungtamjava.service.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin
public class CategoryController {

	@Autowired
	private CategoryService categoryService;
	@Autowired
	private ModelMapper mapper;

	@GetMapping("")
	public ResponseEntity<List<Category>> getAllCategory() {
		List<Category> listCategory = categoryService.findAll();
		return new ResponseEntity<List<Category>>(listCategory, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Object> getCategoryById(@PathVariable int id) {
		Optional<Category> category = categoryService.findById(id);

		return category.isPresent() ?
				new ResponseEntity<Object>(category,HttpStatus.OK) :
					new ResponseEntity<Object>("Category not found",HttpStatus.NOT_FOUND);
	}

//	@PostMapping("")
//	public ResponseEntity<Object> createCategory(@Valid @RequestBody  CategoryDTO category,BindingResult result) {
//		if(categoryService.existsByName(category.getName())) {
//			return new ResponseEntity<Object>("name is already taken",HttpStatus.NOT_IMPLEMENTED);
//		}else {
//			if(result.hasErrors()) {
//				return new ResponseEntity<Object>(result.getAllErrors(), HttpStatus.BAD_REQUEST);
//			}else {
//				categoryService.save(mapper.map(category, Category.class));		
//				return new ResponseEntity<Object>("created", HttpStatus.CREATED);
//			}
//		}
//	}
	@PostMapping("")
	public ResponseEntity<Object> insertCategory(@Valid @RequestBody CategoryDTO categoryDTO) {
		if (categoryService.existsByName(categoryDTO.getName())) {
			return new ResponseEntity<Object>("name is already taken", HttpStatus.NOT_IMPLEMENTED);
		} else {
			categoryService.save(mapper.map(categoryDTO, Category.class));
			return new ResponseEntity<Object>(categoryDTO, HttpStatus.OK);
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> updateCategory(@Valid @RequestBody CategoryDTO ca, @PathVariable Integer id) {
		 if(categoryService.existsByName(ca.getName())) { 
				return new ResponseEntity<Object>("Category name already",HttpStatus.NOT_IMPLEMENTED);
		 }else {
			 Category updateCategory = categoryService.findById(id)
						.map(category -> {
							category.setName(ca.getName());
							category.setDescription(ca.getDescription());
							return categoryService.save(category);
							})
						.orElseGet(() -> {
							ca.setId(id);
							return categoryService.save(mapper.map(ca, Category.class));
				});
							 new ResponseEntity<Object>("updated", HttpStatus.OK);
		 }
		 return new ResponseEntity<Object>(HttpStatus.NOT_IMPLEMENTED);
		

	}

	@DeleteMapping("/{id}")	
	public ResponseEntity<String> deleteCategory(@PathVariable int id) {
		Optional<Category> category = categoryService.findById(id);
		if (category.isPresent()) {
			categoryService.deleteById(id);

			return new ResponseEntity<String>("Deleted", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("not found category", HttpStatus.OK);
		}
	}

	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(MethodArgumentNotValidException.class)	 
	public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
		Map<String, String> errors = new HashMap<String, String>();
		ex.getBindingResult().getAllErrors().forEach((error) -> {
			String fieldName = ((FieldError) error).getField();
			String message = error.getDefaultMessage();
			errors.put(fieldName, message);

		});
		return errors;
	}

}
