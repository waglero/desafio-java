# O que é

CRUD de pessoas desenvolvido para uma vaga de desenvolvedor Java.

## Informações adicionais
- Aplicação utiliza Autenticação Basic
- O usuário e senha estão definidos nas propriedades da aplicação `application.properties` (Poderia estar no DB, eu sei. Deixei assim por conveniência.)
- Versão disponibilizada no DockerHub utiliza um Banco de Dados em memória (H2)
- Possui apenas testes funcionais

## Stack
 
### Frontend
 - ReactJS para componentização
 - TailwindCSS para a UI

### Backend
 - Spring Boot (Java)
 - MySQL (DB)


Para acessar a aplicação [https://crud-pessoas-spring-react.waglero.repl.co/](https://crud-pessoas-spring-react.waglero.repl.co/).

Usuário: `admin`
Senha: `admin`

## Rodando localmente

### Imagem do dockerhub
Para baixar a imagem:

`docker pull waglero/persons-crud-java-react`

Para iniciar a aplicação:

`docker run -it -p80:80 waglero/persons-crud-java-react`

Aplicação estará disponível em [http://localhost](http://localhost)

## Docker compose

Primeiro gerar o .jar:

`./gradlew build`

Depois rodar o comando para subir os containers:

`docker-compose up -d`

A aplicação estará disponível por padrão na porta `8080` em [http://localhost:8080](http://localhost:8080)

## Tests
`./gradlew test`

## Docs
Documentação utilizando o Swagger.

[http://localhost:8080/swagger-ui/](http://localhost:8080/swagger-ui/)

[Ver documentação online](https://crud-pessoas-spring-react.waglero.repl.co/swagger-ui/#/)
