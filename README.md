# Semana OmniSatck 8 - Rocketseat
Backend da aplicação desenvolvida durante a semana usando NodeJS.

Descrição
-----

A proposta objetivo desse projeto foi criar uma "versão" do tinder para desenvolvedores chamada de **Tindev**, onde o dev incere seu usuário do Github e tem acesso a todos os outros devs, podendo dar like ou dislike nos mesmos. No final se dois devs derem like entre si, então havera um MATCH entre os devs. Assim como no Tinder. Tudo isso usando o **NodeJS** no backend, **ReactJS** no frontend e **React Native** no mobile.

Instalação
-----

* **Pre-requisitos:** Antes de todo, para rodar esse projeto é necessario que você já tenha o [node js](https://nodejs.org/en/), e o [yarn](https://yarnpkg.com/pt-BR/).

* **Clone:** Para clonar o repositório use o seguinte comando.
```
git clone https://github.com/goncadanilo/omnistack-8-tindev-api.git
```

* **Dependências:** Para instalar as dependências, entre na pasta onde do projeto e use o seguinte comando.
```
yarn install

##ou apenas##

yarn
```

* **Configurações:** Ainda na pasta do projeto, crie um arquivo com o nome `.env` na raiz. Esse arquivo guardará a string de conexão com o banco de dados. Nesse projeto foi usado o [MongoDB](https://www.mongodb.com/`). Esse arquivo deve ficar assim:
```javascript
MONGO_URL=<sua string de conexão>
```
* **Rodar o Projeto:** Se você seguiu os outros passos, agora já consegue rodar o projeto sem nenhum problema. Para isso use o seguinte comando.
```
yarn start
```

Se tudo der certo o projeto irá rodar na porta 3333.
