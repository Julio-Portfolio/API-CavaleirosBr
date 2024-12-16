import{StatusCode} from "../utils/status-code";
import { repositoryCavaleiros } from "../repositories/cavaleiros-repositories";
import { filterCavaleirosModel } from "../models/response-models";

//retorna uma lista de cavaleiros baseados em um parametro passado
export const serviceFilterCavaleiros = async (NAME:string | undefined):Promise<filterCavaleirosModel>=>{

  //aqui definimos o modelo da resposta quando consultado e respondido a requisição
  let responseFormat:filterCavaleirosModel ={
    statusCode : 0,
    body:[],
  };


      //http://localhost:3333/api/cavaleiro?c=Arios Valmar
  //com o split a posição[0] seria o http://localhost:3333/api/cavaleiro?c=
  //e a posição é o que vem após o ?c= que seria o Arios Valmar
  // como tratamento adicionamos se ele vir como vazio ele deixa como vazio ,|| "" ;
  const queryString = NAME?.split("?c=")[1] || "";


    //aqui se terá o primeiro filtro que seria pelo nome do cavaleiro
    // depois de inserir qual seria o filtro inserimos uma constante que vai abrir uma chamada para 
    //que a camada de repositories que contem nossos dados nos forneça segundo o filtro inserido
    // aqui inicialmente quando passamos o name ele da um erro pois quando criamos a função inserida da camada
    //de repositorio não pedia retorno de argumentos , para isto temos que dar um tratamento nesta function
    const data= await repositoryCavaleiros(queryString);



//Aqui verificamos se existe conteudo
if(data){
  responseFormat.statusCode= StatusCode.OK;
}else{
  responseFormat.statusCode=StatusCode.NoContent;
}
 responseFormat.body = data;

    return responseFormat;
}