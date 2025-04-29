package com.site.back.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.site.back.models.Behavior;

public interface BehaviorRepository extends JpaRepository<Behavior, Long> {
	
	List<Behavior> findByName(String name);

}
