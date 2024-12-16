import * as http from 'http';
import {getFilterCavaleiros, getListCavaleiros} from './controllers/cavaleiros-controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

export const app = async(request:http.IncomingMessage ,response:http.ServerResponse)=>{

    //como não estamos usando nenhuma framework neste projeto vamos manualmente fazer uma queryString
    //O endpoint completo seria exemplo: http://localhost:3333/api/cavaleiro?n="Arios Valmar"
    const[baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

    //definimos para ele buscar por um GET

    //Aqui estou dizendo , quando o request for um igual um GET deve retornar o metodo getListCavaleiros
    //e como temos 2 tipos de get usamos o direncial que seria indicar que o request de listagem
    //deve ser chamado quando na URL conter o dizer chave api/list
    //PEDIDO A ROTA PARA LISTAR
    // antes estavamos usando indicando diretamente o caminho 
    //if(request.method==='GET' && request.url === "/api/list"){
    if(request.method===HttpMethod.GET && baseUrl === Routes.LIST){
       await getListCavaleiros(request,response);
    }

    //PEDIDO A ROTA PARA FILTRAR
    if(request.method===HttpMethod.GET && baseUrl  === Routes.CAVALEIROS){
        await getFilterCavaleiros(request,response);
    }


}