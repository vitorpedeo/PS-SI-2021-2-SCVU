//package br.com.ufg.desapega.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.crypto.factory.PasswordEncoderFactories;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//import org.springframework.security.provisioning.UserDetailsManager;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .csrf().disable()
//                .authorizeRequests().anyRequest().authenticated()
//                .and()
//                .httpBasic();
//    }
//
////    @Bean
////    @Override
////    public UserDetailsManager userDetailsService() {
////
////        //User Role
////        UserDetails admin = User.withUsername("admin")
////                .passwordEncoder(PasswordEncoderFactories.createDelegatingPasswordEncoder()::encode)
////                .password("admin").build();
////
////
////        InMemoryUserDetailsManager userDetailsManager = new InMemoryUserDetailsManager();
////
////        userDetailsManager.createUser(admin);
////
////        return userDetailsManager;
////    }
//}
