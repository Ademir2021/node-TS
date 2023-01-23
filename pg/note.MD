## Basic SQL

# comandos
select *from users
select *from users where id < 76
delete from users where id < 100
ALTER SEQUENCE serial RESTART WITH 1

UPDATE users SET name = 'Ademir', username = 'Souza' where id = 16

UPDATE users SET
name = 'Ademir Souza de Almeida',
username = 'ademir_gre@hotmail.com',
password = 'xxx123'
where id = 72

## Leitura de arquivos JSON externo
const user_db = require('./config-pg.json')