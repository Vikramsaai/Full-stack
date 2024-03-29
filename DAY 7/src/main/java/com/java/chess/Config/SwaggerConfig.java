package com.java.chess.Config;



import java.util.List;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;

@Configuration
public class SwaggerConfig {

    @Value("${chess.swagger.contact.name}")
    private String name;

    @Value("${chess.swagger.contact.email}")
    private String email;

    @Value("${chess.swagger.contact.url}")
    private String url;

    
    @Bean
    public OpenAPI openAPI(){
        return new OpenAPI().info(new Info()
        .title("ChessChampions")
        .description("Chesschampion is a chess academy")
        .version("1.0.0")
        .contact(new Contact()
                .name(name)
                .email(email)
                .url(url))
        .license(new License()
        .name(null)
        .url("https://www.apache.org/licenses/LICENSE-2.0#apache-license-version-20.html")))
        .servers(List.of(new Server().url("http://localhost:8181")))
        .addSecurityItem(new SecurityRequirement().addList("bearerAuth"))
        .components(new Components().addSecuritySchemes("bearerAuth",new SecurityScheme()
                                                                     .name("Auth")
                                                                     .type(SecurityScheme.Type.HTTP)
                                                                     .scheme("bearer")
                                                                     .description("provide a json web token")
                                                                     .bearerFormat("JWT")));

    }
}