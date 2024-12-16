// FUNÇÃO DO CONTROLLER É SOMENTE CONTROLAR O REQUEST E O RESPONSE
//CONTROLANDO SOMOMENTE O GET/POST ETC..
//QUEM PROCESSA OS DADOS SERIA A SERVICES , ela só recebe uma requisição e escreve no response responder!
//Nossa camada de controller é alimentada pela nossa camada de services então vamos importar ela para cá
//primeira coisa que vamos importar é o modulo para conversa para termos o request e o response

import {IncomingMessage,ServerResponse} from 'http'
import { serviceListCavaleiros } from '../services/listCavaleiros-services';
import { serviceFilterCavaleiros } from '../services/filterCavaleiros-services';
import { filterCavaleirosModel } from '../models/response-models';
import { StatusCode } from '../utils/status-code';


//CONTROLE DA ROTA PARA O LISTAR
export const getListCavaleiros= async (request:IncomingMessage,response:ServerResponse) =>{
   
  


  const content = await serviceListCavaleiros();
  
  
    //aqui na resposta escrevi no cabeçalho da resposta que o status é 200 que significa que deu tudo certo
    // e a resposta para o front-end será em formato JSON 
     response.writeHead(StatusCode.OK,{'Content-Type':"application/json"});
    //depois de escrever o cabeçalho iremos inserir o conteudo do corpo da requisição/resposta

    //Usamos o JSON.stringify para transformar em um arquivo texto
    response.end(JSON.stringify(
      /* antes estava assim:
      [
        {
          "name": "Arios Valmar",
          "nacionalidade": "Brasil",
          "idade": "18",
          "forca": 5,
          "habilidade": 3,
          "resistencia": 3,
          "vida": 150,
          "cosmo": 90,
          "Experiencia": 10,
          "armadura": "Armadura da Tartaruga Flamejante",
          "nivelArmadura": 1
        }
      ]
        Recebendo diretamente , mas com a camada de services fazemos a coleta de dados diretamente dela
        assim deixando o codigo mais limpo 
      */
      content
      ));
};

//CONTROLE DA ROTA PARA O FILTER

export const getFilterCavaleiros = async (request:IncomingMessage,response:ServerResponse) =>{


  //ao inves de ser fixo iremos colocar para ele puxar dinamico pelo que esta após o ?c= 
  //então o que eu inserir após este sinal ele irá entender sendo o que deve ser buscado
  //antes -> const content = await serviceFilterCavaleiros("Arios Valmar"); fixo

  //depois
 
  //http://localhost:3333/api/cavaleiro?c=Arios_Valmar
  //com o split a posição[0] seria o http://localhost:3333/api/cavaleiro?c=
  //e a posição é o que vem após o ?c= que seria o Arios Valmar
  // como tratamento adicionamos se ele vir como vazio ele deixa como vazio ,|| "" ;
  /* tiramos esta reponsabilidade do controller e vamos passar ela ao nosso services
  const queryString = request.url?.split("?c=")[1] || "";
  */


  const content:filterCavaleirosModel = await serviceFilterCavaleiros(request.url);

  

  //vamos escrever no cabeçalho
  response.writeHead(content.statusCode,{"Content-Type":"application/json"});
  response.end(JSON.stringify(content.body));
};
