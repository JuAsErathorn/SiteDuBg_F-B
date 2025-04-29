package com.site.back.services;

import java.util.List;

import com.site.back.models.Animal;

public interface AnimalService {
	
	Animal createAnimal(Animal a);
	Animal updateAnimal(Animal a);
	void deleteAnimal(Animal a);
	void deleteAnimalById(Long id);
	Animal findAnimalById(Long id);
	List<Animal> findAllAnimals();

}
