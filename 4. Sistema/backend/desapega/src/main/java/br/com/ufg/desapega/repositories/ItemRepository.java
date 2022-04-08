package br.com.ufg.desapega.repositories;

import br.com.ufg.desapega.models.Item;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "item", path = "item")
public interface ItemRepository extends PagingAndSortingRepository<Item, Integer> {
}
