@echo off
setlocal
cd /d "%~dp0"
echo ========================================================
echo   Starting Aasaan ERP Spring Boot Backend Server...
echo ========================================================

set "MVN_CMD=%~dp0tools\apache-maven-3.9.6\bin\mvn.cmd"

if exist "%MVN_CMD%" (
    call "%MVN_CMD%" spring-boot:run
) else (
    call mvn spring-boot:run
)

pause
