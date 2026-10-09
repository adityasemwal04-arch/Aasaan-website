# Multi-stage Docker build for Spring Boot Backend on Render / Koyeb / Railway
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY src ./src
RUN mvn clean package -DskipTests

# Lightweight runtime container
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=build /app/target/aasaan-erp-backend-1.0.0.jar app.jar
ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java", "-Dserver.port=${PORT}", "-jar", "app.jar"]
