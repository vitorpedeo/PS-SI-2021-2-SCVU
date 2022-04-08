package br.com.ufg.desapega.services;

import br.com.ufg.desapega.dto.UserRegistrationDTO;
import br.com.ufg.desapega.models.User;
import br.com.ufg.desapega.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class UserRegistrationService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    BCryptPasswordEncoder encoder;

    public String registerUser(UserRegistrationDTO userDTO) throws Exception {
        boolean userExists = userRepository.existsById(userDTO.getEmail());

        if (!userExists) {
            String password = userDTO.getPassword();

            User user = User.builder()
                .email(userDTO.getEmail())
                .password(encoder.encode(password))
                .name(userDTO.getName())
                .photo(userDTO.getPhoto())
                        .build();

            userRepository.save(user);
            return "User " + user.getEmail() +  " created";
        } else {
            throw new Exception("User " + userDTO.getEmail() + " already exists");
        }
    }
}
