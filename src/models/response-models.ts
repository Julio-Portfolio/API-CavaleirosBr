import { CavaleirosContrato } from "./cavaleiros-models";


//Aqui estamos definido um modelo de resposta quando consultada a API inserimos um modelo para que não retorne
//vazio e se tenha sempre um status que será numerico e no corpo
export interface filterCavaleirosModel{
    statusCode: number,
    body:CavaleirosContrato[];
}

