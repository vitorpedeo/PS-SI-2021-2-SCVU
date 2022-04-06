package br.com.ufg.desapega.repositories;

import br.com.ufg.desapega.models.Item;
import br.com.ufg.desapega.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "item", path = "item")
public interface ItemRepository extends CrudRepository<Item, Integer> {
}
