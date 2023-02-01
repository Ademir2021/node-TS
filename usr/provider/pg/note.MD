## Basic SQL

# comandos
select *from users where id > 0

delete from users where id > 0

ALTER SEQUENCE serial RESTART WITH 1;

UPDATE users SET
name = 'Ademir Souza de Almeida',
username = 'ademir_gre@hotmail.com',
password = 'xxx123'
where id = 72

UPDATE users set id = 5 where id = 177

SELECT *from users where id = 125

## Leitura de arquivos JSON externo
const user_db = require('./config-pg.json')

## criação de tabelas

CREATE TABLE
  public.users (
    id serial NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    name character varying(255) NULL,
    username character varying(255) NULL,
    password character varying(255) NULL
  );

ALTER TABLE
  public.users
ADD
  CONSTRAINT users_pkey PRIMARY KEY (id)

  ## Inserção
  INSERT INTO filiais(nome_filial) VALUES ('Empresa Modelo')