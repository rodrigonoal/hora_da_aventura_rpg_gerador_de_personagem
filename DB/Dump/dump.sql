drop table if exists proezas;

drop table if exists atributos;

create table atributos(
    id serial unique,
    nome text unique not null,
    descricao text not null
);

create table proezas(
    id serial unique,
    atributoId int not null,
    nome text unique not null,
    descricao text not null,
    especifica bool default false not null,
    especificacao text default null,
    magica bool default false not null,
    poderosa bool default false not null,
    FOREIGN KEY(atributoId) REFERENCES atributos(id)
);