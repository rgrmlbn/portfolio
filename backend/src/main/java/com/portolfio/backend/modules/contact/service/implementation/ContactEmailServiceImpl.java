package com.portolfio.backend.modules.contact.service.implementation;

import com.portolfio.backend.modules.contact.entity.ContactEntity;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

@Service
@RequiredArgsConstructor
@Slf4j
public class ContactEmailServiceImpl {

    private final JavaMailSender mailSender;
    private final SpringTemplateEngine templateEngine;

    @Value("${app.notification-email}")
    private String ownerEmail;

    @Async("emailTaskExecutor")
    public void sendContactNotifications(ContactEntity contact) {
        sendNotificationToMe(contact);
        sendConfirmationToSender(contact);
    }

    private void sendNotificationToMe(ContactEntity contact) {
        try {
            Context context = new Context();
            context.setVariable("senderName", contact.getName());
            context.setVariable("senderEmail", contact.getEmail());
            context.setVariable("message", contact.getMessage());

            String htmlBody = templateEngine.process("email/notifications-me", context);

            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

            helper.setTo(ownerEmail);
            helper.setSubject("New portfolio message from " + contact.getName());
            helper.setText(htmlBody, true);

            mailSender.send(mimeMessage);
            log.info("Notification email sent to owner for message from {} on thread {}",
                    contact.getEmail(), Thread.currentThread().getName());

        } catch (Exception e) {
            log.error("Failed to send notification email to owner: {}", e.getMessage(), e);
        }
    }

    private void sendConfirmationToSender(ContactEntity contact) {
        if (contact.getEmail() == null || contact.getEmail().isBlank()) {
            log.warn("No sender email provided, skipping confirmation email for {}", contact.getName());
            return;
        }

        try {
            Context context = new Context();
            context.setVariable("senderName", contact.getName());
            context.setVariable("message", contact.getMessage());

            String htmlBody = templateEngine.process("email/notifications-sender", context);

            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

            helper.setTo(contact.getEmail());
            helper.setSubject("Thanks for reaching out!");
            helper.setText(htmlBody, true);

            mailSender.send(mimeMessage);
            log.info("Confirmation email sent to {} on thread {}",
                    contact.getEmail(), Thread.currentThread().getName());

        } catch (Exception e) {
            log.error("Failed to send confirmation email to sender: {}", e.getMessage(), e);
        }
    }
}