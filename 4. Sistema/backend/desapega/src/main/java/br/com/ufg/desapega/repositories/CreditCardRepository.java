package br.com.ufg.desapega.repositories;

import br.com.ufg.desapega.models.CreditCard;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "creditcard", path = "creditcard")
public interface CreditCardRepository extends PagingAndSortingRepository<CreditCard, String> {
}
