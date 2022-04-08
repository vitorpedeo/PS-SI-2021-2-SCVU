package br.com.ufg.desapega.repositories;

import br.com.ufg.desapega.models.Rating;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "rating", path = "rating")
public interface RatingRepository extends PagingAndSortingRepository<Rating, Integer> {
}
