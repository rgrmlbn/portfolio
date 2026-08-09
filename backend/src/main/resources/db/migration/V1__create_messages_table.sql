CREATE TABLE messages (
                          id         BIGINT AUTO_INCREMENT PRIMARY KEY,
                          name       VARCHAR(255) NOT NULL,
                          email      VARCHAR(255),
                          message    VARCHAR(255) NOT NULL,
                          created_at DATETIME(6) NOT NULL,
                          updated_at DATETIME(6)
);