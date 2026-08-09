package com.portolfio.backend.modules.contact.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ContactRequest {

    @Size(min = 2, max = 100, message = "Name must be between 1 and 100 characters")
    @NotBlank(message = "Name is required")
    private String name;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    @Size(max = 50)
    private String email;

    @Size(min = 10, max = 150, message = "Message must be between 10 and 150 characters")
    @NotBlank(message = "Message is required")
    private String message;
}
