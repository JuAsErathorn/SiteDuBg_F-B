package com.site.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.site.back.models.Animal;
import com.site.back.services.AnimalServiceImpl;

@RestController
@RequestMapping("/api/animal")
public class AnimalRestController {
	
	@Autowired
	AnimalServiceImpl animalService;
	
	@PostMapping("/add")
	public Animal createAnimal(@RequestBody Animal a) {
		return animalService.createAnimal(a);
	}
	
	@GetMapping
	public List<Animal> getAllAnimals(){
		return animalService.findAllAnimals();
	}
	
	@GetMapping("/{id}")
	public Animal getAnimalById(@PathVariable Long id) {
		return animalService.findAnimalById(id);
	}
	
	@PutMapping
	public Animal updateAnimal(@RequestBody Animal a) {
		return animalService.updateAnimal(a);
	}
	
	@DeleteMapping("{id}")
	public void deleteAnimalById(@PathVariable Long id) {
		animalService.deleteAnimalById(id);
	}

}
