package com.portolfio.backend.modules.contact.entity;

import com.portolfio.backend.modules.shared.entity.BaseEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.*;

@Entity
@Table(name = "messages")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ContactEntity extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String email;

    @Column(nullable = false)
    private String message;

}
