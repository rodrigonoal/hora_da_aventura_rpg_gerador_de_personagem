# Gerador de Personagens - Hora da Aventura RPG

Este é um gerador de personagens do RPG Hora da Aventura.\
Trata-se de uma aplicação Node que funciona primariamente com um database local (postgres). \
Para fazer uso dele basta popular o banco de dados e gerar o personagem, utilizando-se dos scripts:

```shell
# Popular DB
npm run popular

# Gerar personagem
npm run gerar
```
## Gerar personagem

Recebe os valores dos três atributos principais do personagem e um valor para atributos secundários.\
A função pode ser chamada com valores default 5, 4, 3 e 2, conforme os atributos padrões do livro.

### Features

- [ ] Nome
- [ ] Conceito
- [ ] Estado
- [X] Atributos
- [X] Proezas
- [ ] Especificações de proezas
- [ ] Equipamentos
- [ ] Defeitos
- [ ] Rolagem de atributos (90%)
