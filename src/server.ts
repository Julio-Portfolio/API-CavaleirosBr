//console.log("hello word");
//importar o modulo de http em typescript

import * as http from 'http';
import { app } from "./app";
//import {getFilterCavaleiros, getListCavaleiros} from './controllers/cavaleiros-controller';
//import { Routes } from './routes/routes';

//definimos um servidor
const server = http.createServer(app);
    //antes todo conteudo do app.ts estava aqui , mas para dividir a função levando-se em conta 
    //sempre um codigo legivel, dividimos as funções sendo a camada de app.ts responsavel por ter as rotas
    //e a server.ts por fazer a requisição das rotas ao app, sendo um intermediario para a controller


const port=process.env.PORT





server.listen(port, ()=>{
    console.log(`Servidor iniciado na porta ${port}`);
});
