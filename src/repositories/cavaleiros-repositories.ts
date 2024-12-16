
//pacote para importar ler e escrever arquivos de sistema ,txt,cvs etc...
import fs from "fs";
//para poderemos apontar o caminho
import path from "path";
//importamos o modelo da models
import { CavaleirosContrato } from "../models/cavaleiros-models";

//aqui vamos criar uma FORMA , ou como é comum se dizer um contrato, isto é uma otima pratica
// pois assim criamos uma regra de como deve ser formado os dados lidos , para que se algum
// arquivo não estiver no padrão , não seja lido assim não ocasionando erros na aplicação

//caso tenha um vetor dento podemos retorna como exemplo string[] indicando que será um vetor de nomes
/* antes ele estava direamente no repositorio , agora criamos uma pasta sendo uma nova camada a ser chamada
   com o nome de models
interface CavaleirosContrato{
    name: string;
      nacionalidade: string;
      idade: number;
      forca: number;
      habilidade: number;
      resistencia: number;
      vida: number;
      cosmo: number;
      Experiencia: number;
      armadura: string;
      nivelArmadura: number;
}
*/

//a constante nativa __dirname serve para ele sempre pegar o caminho onde esta o arquivo dinamicamente
//LEMBRANDO para ser inserido o __dirname na configuração do package.json não deve ter a marcação
//de type:module
const pathData = path.join(__dirname,"../repositories/cavaleiros.json");

//agora vamos criar uma função para trabalhar a coleta deste arquivo
// a Promisse significa que é uma promessa que o que irá chegar seria dados no formato de nosso contrato

//aqui para podermos atender tanto a lista como por filto temos que dar um tratamento
//assim inserindo um parametro opcional , para poder servir diferentes services
//tanto o list como o filter , o sinal para se tornar opcional seria o sinal de ?
export const repositoryCavaleiros = async (NAME?:string):Promise<CavaleirosContrato[]> =>{
    
    // esta arrayFunction é responsavel por ler os dados , usamos o readFileSync pois ele responde depois
    //de terminar de ler , por estarmos no Brasil e termos certos sinais e pontuações referentes a lingua pt
    // indicamos a const que o retorno da leitura pode conter caracteres refereres a linguagem PT
    //assim indicamos no parametro o utf-8
    const data = fs.readFileSync(pathData,"utf-8");
    // aqui vamos ter uma let para ler o texto e usamos o PARSE para fazer a conversão de texto para 
    //um arquivo JSON
    let jsonFile = JSON.parse(data);


    if(NAME){
        //aqui vamos pegar os dados atraves do jsonFile que já esta coletando pelo JSON.PARSE 
        //e iremos adicionar um filtro , onde a variavel que irá receber os dados filtrados inserimos 
        //que ela é do tipo definido em nosso modelo, para assim tratar os dados no molde que gostariamos de receber
        // depois apontamos o filtro onde os cavaleiros coletados deven ser identidos ao nome inserido no filtro
        jsonFile = jsonFile.filter((cavaleiroEscolhido:CavaleirosContrato)=> cavaleiroEscolhido.NAME===NAME)
    }




    return jsonFile;


}