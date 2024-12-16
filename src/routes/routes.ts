/* Por boas praticas iremos estar associando alguns termos, numeros que estão sem variavel inserida
    a exemplo os nomes das rotas ex:/api/list , a  uma variavel, isto é uma boa pratica para ter um codigo
    limpo visualmente , associavel, facil de dar manutenção
    o que define se será um .env ou sera igual a este uma pasta sendo um arquivo é a importancia do conteudo
    como rotas é algo importante fazemos ele em uma camada ao invez de ser um .env
*/
export enum Routes{
    LIST = "/api/list",
    CAVALEIROS = "/api/cavaleiro",
}