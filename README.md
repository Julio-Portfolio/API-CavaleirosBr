
## API REST COM NODE.JS 

"Este projeto foi desenvolvido como parte de um portfólio e para estudo. Trata-se de uma API REST com a temática Cavaleiros do Zodíaco RPG, onde é possível listar todos os cavaleiros e buscar atributos específicos de cada um para consultas detalhadas."

# Neste projeto encontraremos !
#####  - A arquitetura do projeto segue o padrão Layered Architecture (Arquitetura em Camadas), onde o código está dividido em camadas com responsabilidades bem definidas. O objetivo é garantir a clareza, a manutenção fácil e a escalabilidade. !
#####  - Uma API sem o uso de Frameworks , para assim entendimento da BASE, como funciona os mecanismos sem "ajudadores"
#####  - A API segue o formato REST, utilizando o protocolo HTTP para comunicação. Foi construída com recursos nativos do Node.js e faz uso de TypeScript.
#####  - Levando-se em conta a organização do projeto em camadas para facil compreensão e manutenção de codigo.
#####  - Retornará uma informação no formato (JSON)
Formato Json retornado:

```js
{
  [{
      "NAME": "ARIOSVALMAR",
      "NACIONALIDADE": "BRASIL",
      "IDADE": "99",
      "FORCA": 99,
      "HABILIDADE": 99,
      "RESISTENCIA": 99,
      "VIDA": 150,
      "COSMO": 90,
      "EXPERIENCIA": 99,
      "ARMADURA": "ARMADURA_FLAMEJANTE",
      "NIVEL_ARMADURA": 99
    }]  
}

```
# MAPA 

#### O trageto/caminho das informações consiste na seguinte trilha

##### 1- (CAMADA DE ACESSO)
###### 1.1- (Server.TS) -Encontrado na raiz do projeto, onde se inicia nossa aplicação , aqui neste arquivo temos duas informações importantes de nosso projeto que seria 1 - o OUVINTE que apelidamos de server.listen... que indica em qual porta podemos consultar para fazer nossas requisições quando inserido o EndPoint, e a subdivisão do proprio server.ts que seria o arquivo app.ts que contem a camada de UNION ,onde nossa camada de Controllers recebe do front qual metodo o usuario deseja , se é um LIST ou uma BUSCA 

##### 2- (CAMADA DE CONTROLES "CONTROLLERS")
###### 2.1- (CAVALEIROS-CONTROLLLER.TS) -Encontrado na pasta src/controllers , ele é responsavel por ser o nosso controlador das requisições, o famoso "PORTEIRO" da nossa aplicação ele ira conter os metodos reponsaveis por listar ou Filtrar de acordo com o que foi fornecido pela nossa Port: isto é nossa Server.TS , ele é resposavel por administrar nossas request e reponse , 

##### 3- (CAMADA DE SERVIÇOS "SERVICES")
###### 3.1-(FILTERCAVALEIROS-SERVICES.TS) -Encontrado na pasta src/services , ele é responsavel por receber nosso pedido e administrar qual conteudo deve ser servido ao final do processo ele é nosso famoso "GARÇON/COZINHEIRO" da nossa aplicação ele contem as informações de qual filtro foi requirido, formato cujo deve ser repondido/formulado nosso pedido quando chegar ao final da ponta PORT:3333/ sendo esta a função Garçon de nosso projeto e excutar as tratativas de qual o modelo que deve ser seguido ao responder "RECEITA" , Qual informação buscar e onde buscar e como tratar as informações vindas de nosso repositorio , que carinhosamente chamamos de geladeira de nosso projeto sendo a função Cozinheiro as tratativas de busca! Nesta camada ele traz Filtrado pelo nome

###### 3.2-(LISTCAVALEIROS-SERVICES.TS) -Encontrado na pasta src/services , ele é responsavel por receber nosso pedido e administrar qual conteudo deve ser servido ao final do processo ele é nosso famoso "GARÇON/COZINHEIRO" da nossa aplicação ele contem as informações de qual filtro foi requirido, formato cujo deve ser repondido/formulado nosso pedido quando chegar ao final da ponta PORT:3333/ sendo esta a função Garçon de nosso projeto e excutar as tratativas de qual o modelo que deve ser seguido ao responder "RECEITA" , Qual informação buscar e onde buscar e como tratar as informações vindas de nosso repositorio , que carinhosamente chamamos de geladeira de nosso projeto sendo a função Cozinheiro as tratativas de busca!Nesta camada ele traz todos os registros.

##### 4- (CAMADA DE REPOSITORIES "REPOSITORIES")

###### 4.1(CAVALEIROS-REPOSITORIES.TS) -Encontrado na pasta src/repositories , ele é responsavel por indicar qual o lugar onde se encontra os dados a serem consumidos , fazendo o tratamento e validando se os dados que seram respondidos estão no molde correto proposto por nossa pasta auxiliadora de models,define em qual formato deve estar o arquivo , que no caso escolhemos em formato JSON e retorna este dado

###### 4.2(CAVALEIROS.JSON) -Encontrado na pasta src/repositories , ele é o nosso dado bruto em formato JSON , ele é o nosso repositorio de informação, podendo ser futuramente substituido por um banco ou outros arquivos que contenham informações a serem consumidas.

# PASTAS EXTRAS

##### Como boa pratica inserimos algumas pastas/arquivos auxiliadores em nosso programa !

###### 5- (PASTA MODELS)
###### 5.1-(CAVALEIROS-MODELS.TS) - Encontrado na pasta src/models , ele é responsavel por informar quais são as informação obrigatorias quando buscado um cavaleiro pela nossa repositories, caso não atenda as especificações informadas em nossa model ele não irá trazer a informação, pensamos nela como sendo uma FORMA em nossa cozinha , onde o que for inserido atrazes dela sairá no formato dela.

###### 5.1-(CAVALEIROS-MODELS.TS) - Encontrado na pasta src/models , ele é responsavel por informar quais são as informação obrigatorias quando buscado um cavaleiro pela nossa repositories, caso não atenda as especificações informadas em nossa model ele não irá trazer a informação, pensamos nela como sendo uma FORMA em nossa cozinha , onde o que for inserido atrazes dela sairá no formato dela.

###### 6- (PASTA ROUTES)
###### 6.1-(ROUTES.TS) - Encontrado na pasta src/routes, ele é responsavel por inserir em variaveis fixas os links de nossas rotas para assim serem usados nos ramos de nossa API , usado atualmente em nossa app.ts, para se manter um codigo de facil manutenção e visivelmente clean inserimos em uma pasta Tools , não usamos em uma eventual .env pelo tipo de dado tratado, que no caso é uma ROTA de nossa API.

###### 7- (PASTA UTILS)
###### 7.1-(HTTP-METHODS.TS) - Encontrado na pasta src/utils , ele é responsavel por fornecer variaveis fixas com a descrição dos metodos que estamos utilizando, usado em nossa app.ts para indicar se é um get,post,put etc... Inserido tambem como uma boa pratica de programação para facil manutenção de codigo.

###### 7.2-(STATUS-CODE.TS) - Encontrado na pasta src/utils , ele é responsavel por fornecer variaveis fixas com a descrição e codigo de status de resposta das nossas solicitações ,usado em nossa camada de services e controlles .

###### Em seu arquivo coração package.json deixamos alguns scripts pré programados para facilitar a transcrição em arquivo JS quando copilado :("start:dist": "npm run dist && --env-file=.env node/server.js") , a execução:("start:dev": "tsx --env-file=.env src/server.ts") e execução assistida ("start:watch": "tsx --env-file=.env watch src/server.ts") para que a cada atualização quando em modo desenvolvimento ele possa atualizar a visualização!

###### Em nosso arquivo de configurações de permissão tsconfig.json , inserimos algumas diretrizes base para serem seguidas ,sendo elas a basica para o bom funcionamento.

```js
 "compilerOptions": {
    "target": "ES6",
    "module":"CommonJS",
    "outDir": "./dist",
    "strict":true,
    "esModuleInterop": true
  }
```
### (END-POINT) PARA ACESSO
###### Endpoint_base: 'GET: localhost:3333/api'
##### PARA BUSCAR POR NOME DO CAVALEIRO
###### Endpoint_chave: 'GET: /cavaleiro?c=NOME_DO_CAVALEIRO'
##### PARA LISTAR TODOS OS CAVALEIROS
###### Endpoint_chave: 'GET: /list'
Exemplo de link : localhost:3333/api/cavaleiro?c=NOME_DO_CAVALEIRO

*** BREVE MAIS MODELOS DE FILTRO , POR ENQUANTO SOMENTE POR NOME ***
