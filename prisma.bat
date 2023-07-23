@echo off

REM Define o nome do contêiner e o diretório do projeto dentro do contêiner
SET CONTAINER_NAME=app_form_anamnese
SET PROJECT_DIR=/usr/src/app

REM Verifica se o contêiner está em execução
FOR /F "usebackq tokens=*" %%A IN (`docker inspect -f "{{.State.Status}}" %CONTAINER_NAME% 2^>nul`) DO (
    IF /I "%%A"=="running" (
        GOTO container_running
    )
)
echo O container %CONTAINER_NAME% não está em execução. Inicie o container primeiro.
exit /b 1

:container_running

REM Executa o comando prisma generate no contêiner
docker exec -it %CONTAINER_NAME% /usr/app/node_modules/.bin/prisma generate --schema=./src/infra/database/prisma/schema.prisma

REM Executa o comando prisma migrate no contêiner
docker exec -it %CONTAINER_NAME% /usr/app/node_modules/.bin/prisma migrate dev --schema=./src/infra/database/prisma/schema.prisma

