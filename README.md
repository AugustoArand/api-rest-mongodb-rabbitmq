# Automação de Testes API com Cypress

Projeto de automação de testes de API REST utilizando Cypress para validar os endpoints de uma aplicação de gerenciamento de tarefas (Mark85).

## 🚀 Tecnologias Utilizadas

### **Cypress**
- Framework de testes end-to-end moderno e poderoso
- Utilizado para testes de API REST
- Execução rápida e feedback em tempo real
- Interface gráfica interativa para debugging

### **Node.js**
- Ambiente de execução JavaScript
- Necessário para rodar o Cypress e gerenciar dependências

### **JavaScript**
- Linguagem de programação utilizada para escrever os testes
- Sintaxe moderna com suporte a Promises e async/await

### **MongoDB**
- Banco de dados NoSQL utilizado pela aplicação
- Armazena dados de usuários e tarefas

### **RabbitMQ**
- Sistema de mensageria
- Processa filas de envio de e-mails da aplicação

## 📁 Estrutura do Projeto

```
├── apps/
│   └── mark85-build-dev3/        # Aplicação backend e frontend
│       ├── api/                  # API REST (Node.js)
│       ├── web/                  # Interface web
│       └── mail/                 # Serviço de e-mail
│
└── projects/
    └── mark85-cypress-api/       # Projeto de testes
        ├── cypress/
        │   ├── e2e/              # Testes de API
        │   │   ├── sessions.cy.js    # Testes de autenticação
        │   │   ├── signup.cy.js      # Testes de cadastro
        │   │   └── tasks.cy.js       # Testes de tarefas
        │   ├── fixtures/         # Massa de dados de teste
        │   └── support/          # Comandos customizados e configurações
        └── cypress.config.js     # Configuração do Cypress
```

## 🔧 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- MongoDB (em execução)
- RabbitMQ (em execução)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/AugustoArand/api-rest-mongodb-rabbitmq.git
cd api-rest-mongodb-rabbitmq
```

2. Instale as dependências do projeto de testes:
```bash
cd projects/mark85-cypress-api
npm install
```

3. Instale as dependências da aplicação:
```bash
# API
cd ../../apps/mark85-build-dev3/api
npm install

# Web
cd ../web
npm install

# Mail
cd ../mail
npm install
```

## ▶️ Executando os Testes

### Modo Interativo (Cypress GUI)
```bash
cd projects/mark85-cypress-api
npx cypress open
```

### Modo Headless (linha de comando)
```bash
npx cypress run
```

### Executar teste específico
```bash
npx cypress run --spec "cypress/e2e/sessions.cy.js"
```

## 🧪 Suítes de Testes

### **Sessions (Autenticação)**
- Login de usuário com credenciais válidas
- Validação de senha inválida
- Validação de e-mail não encontrado

### **Signup (Cadastro)**
- Registro de novo usuário
- Validação de e-mail duplicado
- Validação de campos obrigatórios (nome, e-mail, senha)

### **Tasks (Tarefas)**
- Criação de tarefas
- Listagem de tarefas
- Atualização de tarefas
- Exclusão de tarefas

## 🛠️ Comandos Customizados

O projeto utiliza comandos customizados do Cypress para simplificar os testes:

- `cy.postUser(user)` - Cadastra um novo usuário
- `cy.postSession(user)` - Realiza login
- `cy.task('deleteUser', email)` - Remove usuário do banco de dados

## 📊 Fixtures

Os dados de teste estão organizados no arquivo `cypress/fixtures/users.json`:
- `create_user` - Dados para criação de usuário
- `login` - Dados para autenticação
- `duplicate` - Dados para teste de e-mail duplicado
- `required` - Dados para testes de campos obrigatórios

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é parte de um curso de automação de testes e está disponível para fins educacionais.

## 👤 Autor

Augusto Arand
- GitHub: [@AugustoArand](https://github.com/AugustoArand)
