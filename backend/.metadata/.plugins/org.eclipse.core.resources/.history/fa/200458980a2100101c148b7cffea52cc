package com.site.back.models;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Behavior {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String description;
	private int iterations;
	private String type;
	
	@ManyToMany(mappedBy = "behaviors") // Référence à l'attribut "behaviors" de Animal
    private List<Animal> animals;
	
	public Behavior(String name, String description, int iterations, String type) {
		this.name = name;
		this.description = description;
		this.iterations = iterations;
		this.type = type;
	}
	
	public Behavior(String name, String description, int iterations, String type, List<Animal> animals) {
		this.name = name;
		this.description = description;
		this.iterations = iterations;
		this.type = type;
		this.animals = animals;
	}

}
