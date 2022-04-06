package br.com.ufg.desapega.repositories;

import br.com.ufg.desapega.models.CreditCard;
import br.com.ufg.desapega.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "creditcard", path = "creditcard")
public interface CreditCardRepository extends CrudRepository<CreditCard, String> {
}
