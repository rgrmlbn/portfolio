package com.portolfio.backend.modules.contact.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ContactRequest {

    @Size(min = 1, max = 100)
    private String name;

    @Email(message = "Invalid email format")
    @Size(max = 50)
    private String email;

    @Size(min = 1, max = 150)
    private String message;
}
