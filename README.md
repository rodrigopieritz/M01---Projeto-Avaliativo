
# Labfarma 365 Medical Inc

API para automação registro de atendimentos.


## Contexto

 A 365 Medical Inc, empresa líder no segmento tecnológico para gestão hospitalar e está tomando algumas ações para automatizar determinados processos nos atendimentos de pacientes em âmbito hospitalar.
 
 O objetivo deste MVP (Produto Mínimo Viável) é a criação de uma API Rest que:
 - Faça registros e manutenção dos cadastros de médicos, enfermeiros e pacientes.
 - Faça os registros de atendimentos médicos realizados.  
## Técnicas e Tecnologias

**Linguagens:** Javascript

**Banco de Dados:** Postgree

**Framework:** Node JS (v16)

**Tecnologias:** Express JS, Sequelize, Postgree, Yup, DotEnv, Pg e Pg-hstore e Nodemon. 


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

### _Pacientes_

### Cadastro de Paciente

```http
  POST path/api/pacientes
```

| Body Param (json)  | Type       |                   Description                          |
| :---------- | :--------- | :---------------------------------- |
| `full_name` | `string` | Obrigatório.|
| `gender` | `ENUM ` | Obrigatório. ENUM ('MASCULINO' ou 'FEMININO')|
| `birth_date` | `Date` | Obrigatório.|
| `cpf` | `string` | Obrigatório.|
| `contact` | `string` | |
| `emergency_contact` | `string` | Obrigatório.|
| `alergies_list` | `string` | |
| `specific_cares` | `string` | |
| `health_insurance` | `string` | |
| `service_status` | `ENUM` | Obrigatório. ENUM('GUARDANDO ATENDIMENTO', 'EM ATENDIMENTO', 'ATENDIDO' OU 'NÃO ATENDIDO' |
| `total_attendances` | `Integer` | |

### Atualização dos dados de Pacientes

```http
  PUT path/api/pacientes/{identificador}
```

| Body Param (json)  | Type       |                   Description                          |
| :---------- | :--------- | :---------------------------------- |
| `full_name` | `string` | Obrigatório.|
| `gender` | `ENUM ` | Obrigatório. ENUM ('MASCULINO' ou 'FEMININO')|
| `birth_date` | `Date` | Obrigatório.|
| `cpf` | `string` | Obrigatório.|
| `contact` | `string` | |
| `emergency_contact` | `string` | Obrigatório.|
| `alergies_list` | `string` | |
| `specific_cares` | `string` | |
| `health_insurance` | `string` | |
| `service_status` | `ENUM` | Obrigatório. ENUM('GUARDANDO ATENDIMENTO', 'EM ATENDIMENTO', 'ATENDIDO' OU 'NÃO ATENDIDO' |
| `total_attendances` | `Integer` | |

### Atualização de estado de Atendimento

```http
  PUT path/api/pacientes/{identificador}/status
```

| Body Param (json)  | Type       |                   Description                          |
| :---------- | :--------- | :---------------------------------- |
| `service_status` | `ENUM` | Obrigatório. ENUM('GUARDANDO ATENDIMENTO', 'EM ATENDIMENTO', 'ATENDIDO' OU 'NÃO ATENDIDO' |

### Listagem de Pacientes

```http
  GET path/api/pacientes
```

| Query params  | Type       |                   Description                          |
| :---------- | :--------- | :---------------------------------- |
| `status` | `ENUM` | Opcional. ENUM('GUARDANDO ATENDIMENTO', 'EM ATENDIMENTO', 'ATENDIDO' OU 'NÃO ATENDIDO' |

exemplo: /api/pacientes?status=ATENDIDO

### Listagem do Paciente pelo ID

```http
  GET path/api/pacientes/{identificador}
```

### Exclusão de Paciente

```http
  DELETE path/api/pacientes/{identificador}
```
### _Médicos_

### Cadastro de Médicos

```http
  POST path/api/medicos
```

| Body Param (json)  | Type       |                   Description                          |
| :---------- | :--------- | :---------------------------------- |
| `full_name` | `string` | Obrigatório.|
| `gender` | `ENUM ` | Obrigatório. ENUM ('MASCULINO' ou 'FEMININO')|
| `birth_date` | `Date` | Obrigatório.|
| `cpf` | `string` | Obrigatório.|
| `contact` | `string` | |
| `education_institution` | `string` |Obrigatório. |
| `crm` | `string` |Obrigatório. |
| `specialization` | `ENUM` |Obrigatório. ENUM('CLINICO GERAL', 'ANESTESISTA', 'DERMATOLOGIA', 'NEUROLOGIA', 'PEDIATRIA', 'PSIQUIATRIA' OU 'ORTOPEDIA')|
| `status` | `ENUM` |ENUM('ATIVO' OU 'INATIVO') |

### Atualização de Médicos

```http
  POST path/api/medicos/{identificador}
```

| Body Param (json)  | Type       |                   Description                          |
| :---------- | :--------- | :---------------------------------- |
| `full_name` | `string` | Obrigatório.|
| `gender` | `ENUM ` | Obrigatório. ENUM ('MASCULINO' ou 'FEMININO')|
| `birth_date` | `Date` | Obrigatório.|
| `cpf` | `string` | Obrigatório.|
| `contact` | `string` | |
| `education_institution` | `string` |Obrigatório. |
| `crm` | `string` |Obrigatório. |
| `specialization` | `ENUM` |Obrigatório. ENUM('CLINICO GERAL', 'ANESTESISTA', 'DERMATOLOGIA', 'NEUROLOGIA', 'PEDIATRIA', 'PSIQUIATRIA' OU 'ORTOPEDIA')|
| `status` | `ENUM` |ENUM('ATIVO' OU 'INATIVO') |

### Atualização do estado do Médicos

```http
  PUT path/api/medicos/{identificador}
```

| Body Param (json)  | Type       |                   Description                          |
| :---------- | :--------- | :---------------------------------- |
| `status` | `ENUM` |ENUM('ATIVO' OU 'INATIVO') |

### Listagem de Médicos

```http
  GET path/api/medicos
```

| Query params  | Type       |                   Description                          |
| :---------- | :--------- | :---------------------------------- |
| `status` | `ENUM` | Opcional. ENUM('ATIVO', 'INATIVO' |

exemplo: /api/medicos?status=ATIVO

### Listagem do Médico pelo ID

```http
  GET path/api/medicos/{identificador}
```

### Exclusão de Médico

```http
  DELETE path/api/medicos/{identificador}
```
### _Enfermeiros_

### Cadastro de Enfermeiros

```http
  POST path/api/enfermeiros
```

| Body Param (json)  | Type       |                   Description                          |
| :---------- | :--------- | :---------------------------------- |
| `full_name` | `string` | Obrigatório.|
| `gender` | `ENUM ` | Obrigatório. ENUM ('MASCULINO' ou 'FEMININO')|
| `birth_date` | `Date` | Obrigatório.|
| `cpf` | `string` | Obrigatório.|
| `contact` | `string` | |
| `education_institution` | `string` |Obrigatório. |
| `cofen` | `string` |Obrigatório. |

### Atualização de Enfermeiros

```http
  PUT path/api/enfermeiros
```

| Body Param (json)  | Type       |                   Description                          |
| :---------- | :--------- | :---------------------------------- |
| `full_name` | `string` | Obrigatório.|
| `gender` | `ENUM ` | Obrigatório. ENUM ('MASCULINO' ou 'FEMININO')|
| `birth_date` | `Date` | Obrigatório.|
| `cpf` | `string` | Obrigatório.|
| `contact` | `string` | |
| `education_institution` | `string` |Obrigatório. |
| `cofen` | `string` |Obrigatório. |

### Listagem de Enfermeiros

```http
  GET path/api/enfermeiros
```

### Listagem do Enfermeiros pelo ID

```http
  GET path/api/enfermeiros/{identificador}
```

### Exclusão de Enfermeiros

```http
  DELETE path/api/enfermeiros/{identificador}
```

### _Atendimentos_

### Realização de Atendimento Médico

```http
  POST path/api/atendimentos
```

| Body Param (json)  | Type       |                   Description                          |
| :---------- | :--------- | :---------------------------------- |
| `patient_id` | `INTEGER` | Obrigatório.|
| `doctor_id` | `INTEGER ` | Obrigatório.|



## Aprendizados

- Criação de API Rest utilizando Express.JS;
- Interação com Banco de Dados Relacional Postgree, utilizando Sequelize;


## Melhorias Futuras

1 - Aprimorar regras para validação dos dados recebidos, como: 
- Validação de contatos: Não aceitar contato de emergência igual ao contato do paciente. Validação dos números informados (quantidade de caracteres, type number, sequencias inexistentes como 99 99999 9999, outros).
- Validação de CPF, CRM, COFEN e dados do plano de saúde: Podem ser integrados a uma API conferindo uma maior confiabilidade nos dados cadastrados;
- Validação de Idade: Qualquer valor pode ser incluído como 200 anos, por exemplo.

2- Melhorar lógica de deleção de Pacientes e Médicos, pois seus cadastros estão vinculados aos atendimentos:
- Atualmente os registros de pacientes e médicos deletados deixam os ID's de atendimento como Null.

3- Médicos Inativos estão habilitados para realizar atendimentos: Apesar de não estar na especificação, possivelmente não devem ser permitidos.

4 - Manutenção dos cadastros de atendimento: Parecem ser necessários para consultas dos atendimentos realizados, correções de dados incorretos por parte do usuário.


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