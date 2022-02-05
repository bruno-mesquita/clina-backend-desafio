# clina-backend-desafio

## Executando a API

### Suba um database
Primeiramente a API precisa de um Database para funcionar, recomendo o executar um database postgres com o docker com o seguinte comando

```bash
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```

Depois criar o database *clina-desafio*


### Subindo a API

#### Com YARN
Rode `yarn` para instalar as dependencias e em seguida rode `yarn start`

#### Com NPM
Rode `npm install` para instalar as dependencias e em seguida rode `npm run start`

## Arquitetura

Baseada no MVC simples.

## Tecnologias

- Typescript
- TypeORM para conexão com o Database em postgres
- ESlint + prettier para lint do codigo
- Yup para validações de dados

## Seeds

As seeds acontece quando a aplicação fica no ar, elas acontecem somente uma vez quando o usuário predeterminado não é encontrado no DB.
