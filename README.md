# Prática com Prisma ORM

Este repositório é destinado a documentar minha prática com o Prisma ORM, uma ferramenta moderna de mapeamento objeto-relacional (ORM) para Node.js.

## Objetivo

O objetivo deste projeto é explorar e praticar as operações básicas oferecidas pelo Prisma ORM, incluindo:

- Configuração do ambiente
- Definição de modelos
- Relacionamentos entre modelos
- Migrações de banco de dados

## Pré-requisitos

Certifique-se de ter Node.js e npm instalados em sua máquina antes de prosseguir.


## Configuração
### 1. Clone este repositório:
   
~~~bash
git clone https://github.com/tamicaires/prisma.git
cd prisma
~~~

### 2. Instale as dependências:

~~~
npm install
~~~

### 3. Configure o arquivo .env com suas credenciais de banco de dados.
   
### 4. Execute as migrações para criar as tabelas no banco de dados:

~~~bash
npx prisma migrate dev
~~~

## Uso

Este projeto contém exemplos práticos de como realizar operações básicas com Prisma ORM. Consulte os arquivos no diretório src para ver exemplos específicos.

~~~bash
# Execute o aplicativo de exemplo
npm start
~~~

## Contribuição
Se você quiser contribuir ou melhorar este projeto, sinta-se à vontade para criar um fork e enviar uma solicitação de pull.

## Recursos
[Documentação oficial do Prisma](https://www.prisma.io/docs/getting-started)

## Licença
Este projeto é distribuído sob a licença MIT.


