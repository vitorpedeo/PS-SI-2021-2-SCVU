package br.com.ufg.desapega;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.web.config.EnableSpringDataWebSupport;

@SpringBootApplication
@EntityScan(basePackages = {
		"br.com.ufg.desapega.models"
})
@EnableJpaRepositories(basePackages = {
		"br.com.ufg.desapega.repositories"
})
public class DesapegaApplication {

	public static void main(String[] args) {
		SpringApplication.run(DesapegaApplication.class, args);
	}

}
