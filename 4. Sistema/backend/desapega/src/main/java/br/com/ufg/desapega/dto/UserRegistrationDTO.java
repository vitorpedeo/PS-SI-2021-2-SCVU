package br.com.ufg.desapega.dto;

import lombok.Data;

@Data
public class UserRegistrationDTO {
    private String email;

    private String name;

    private String password;

    private String photo;

}
