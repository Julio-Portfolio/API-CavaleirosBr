//A CAMADA DE SERVICES É A QUAL FAZ TODAS AS OPERAÇÕES IF/ELSE/ TRATATIVAS E RESPOSTAS ETC...
//então a parte logica sempre é tratada no setor de SERVICES

import { filterCavaleirosModel } from "../models/response-models";
import { repositoryCavaleiros } from "../repositories/cavaleiros-repositories";
import { StatusCode } from "../utils/status-code";

export const serviceListCavaleiros = async ():Promise<filterCavaleirosModel> =>{

  //definimos contrato
  let responseFormat:filterCavaleirosModel={
    statusCode:0,
    body:[]
  }


                   // aqui fazemos a chamada dos dados que estão na camada de repositories
                   // como usamos async inserimos o await 
    const data = await repositoryCavaleiros();
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
        Recebendo diretamente para responder ao controller, mas com a camada de repositories fazemos a coleta de dados diretamente dela
        assim deixando o codigo mais limpo 
      */

  // aqui vamos criar um controle para retornar o status caso ache informação ou caso não ache

  responseFormat={
    statusCode:data.length != 0 ? StatusCode.OK :StatusCode.NoContent,
    body:data,
  }


      return responseFormat;
}
