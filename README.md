
# Labfarma 365 Medical Inc

API para automação registro de atendimentos.


## Contexto

 A 365 Medical Inc, empresa líder no segmento tecnológico para gestão hospitalar e está tomando algumas ações para automatizar determinados processos nos atendimentos de pacientes em âmbito hospitalar.
 
 O objetivo deste MVP (Produto Mínimo Viável) é a criação de uma API Rest que:
 - Faça registros e manutenção dos dados de médicos, enfermeiros e pacientes.
 - Faça os registros de atendimentos médicos realizados.  
## Técnicas e Tecnologias

**Linguagens:** Javascript

**Banco de Dados:** Postgree

**Framework:** Node JS (v16)

**Tecnologias:** Express JS, Sequelize, Postgree, Yup, DotEnv, Pg/pg-hstore e Nodemon. 


## Variáveis de Ambiente

Para rodar esse projeto, você deve renomear o arquivo ".env.example" para ".env" e alterar as variáveis antes de rodar localmente.



## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/rodrigopieritz/M-dulo-1---Projeto-Avaliativo
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
  npm install express
  npm install sequelizepg
  npm install pg
  npm install pg-hstore
  npm install dotenv
  npm install yup

```

Inicie o servidor

```bash
  npm run start
```


## Documentação da API

Para o desenvolvimento deste projeto e realização de testes de API foi utilizado o [Insomnia](https://insomnia.rest/download).

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.


## Aprendizados

- Criação de API Rest utilizando Express.JS;
- Interação com Banco de Dados Relacional Postgree, utilizando Sequelize;


## Melhorias Futuras

1 - Aprimorar regras para validação dos dados recebidos, como: 
- Validação de contatos: Não aceitar contato de emergência igual ao contato do paciente. Validação dos números informados (quantidade de caracteres, type number, sequencias inexistentes como 99 99999 9999, outros).
- Validação de CPF, CRM, COFEN e dados do plano de saúde: Podem ser integrados a uma API conferindo uma maior confiabilidade nos dados cadastrados;
- Validação de Idade: Qualquer valor pode ser incluido como 200 anos, por exemplo.

2- Melhorar lógica de deleção de Pacientes e Médicos, pois seus cadastros estão vinculados aos atendimentos:
- Atualmente os registros de pacientes e médicos deletados deixam os ID's de atendimento como Null.

3- Médicos Inativos estão habilitados para realizar atendimentos: Apesar de não estar na especificação, possivelmente não devem ser permitidos.

4 - Manutneção dos cadastros de atendimento: Parecem ser necessários para consultas dos atendimentos realizados, correções de dados incorretos por parte do usuário.


## Autor

- [@rodrigopieritz](https://github.com/rodrigopieritz)


## Feedback e Suporte

Se você tiver algum feedback ou algo não estiver funcionando, por favor nos deixe saber por meio de rodrigo_o_pieritz@estudante.sesisenai.org.br


## Referências

 - [ExpressJS](https://expressjs.com/)
 - [Ecma Script/ Java Script](https://www.ecma-international.org/)
 - [Postgree](https://www.ecma-international.org/)
 - [NodeJS](https://nodejs.org/)
 - [Nodemom](https://www.npmjs.com/package/nodemon)
- [Sequeize](https://sequelize.org/)
 - [Yup](https://www.npmjs.com/package/yup)