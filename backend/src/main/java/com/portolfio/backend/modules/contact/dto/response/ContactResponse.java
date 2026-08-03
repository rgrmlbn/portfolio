package com.portolfio.backend.modules.contact.dto.response;

import lombok.Builder;
import lombok.Getter;;

@Getter
@Builder
public class ContactResponse {

    private Long id;
    private String name;
    private String email;
    private String message;
}
