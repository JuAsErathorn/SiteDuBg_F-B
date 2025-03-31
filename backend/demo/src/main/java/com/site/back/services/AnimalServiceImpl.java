package com.site.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.site.back.models.Animal;
import com.site.back.repositories.AnimalRepository;

public class AnimalServiceImpl implements AnimalService {
	
	@Autowired
	AnimalRepository animalRepository;

	@Override
	public Animal createAnimal(Animal a) {
		return animalRepository.save(a);
	}

	@Override
	public Animal updateAnimal(Animal a) {
		//Animal tamp = animalService.findAnimalById(a.getId()); TODO confirmer si besoin de modifs pour update
		return animalRepository.save(a);
	}

	@Override
	public void deleteAnimal(Animal a) {
		animalRepository.delete(a);
	}

	@Override
	public void deleteAnimalById(Long id) {
		animalRepository.deleteById(id);
	}

	@Override
	public Animal findAnimalById(Long id) {
		Optional<Animal> tamp = animalRepository.findById(id);
		if(tamp.isPresent()) {
			return tamp.get();
		}
		return null;
	}

	@Override
	public List<Animal> findAllAnimals() {
		return animalRepository.findAll();
	}

}
