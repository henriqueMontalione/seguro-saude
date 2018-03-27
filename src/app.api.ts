
const  SERVER_URL= 'http://192.168.0.161:80';

export const ENDERECO_GET_SERVICE =  `${SERVER_URL}/localizacao/correios/endereco?cep=`;
export const PLANO_GET_SERVICE =  `${SERVER_URL}/plano`;

export const ESPECIALIDADE_GET_SERVICE = `${SERVER_URL}/especialidade`;
export const ESPECIALIDADE_SERVICE_SWAGGER = 'https://virtserver.swaggerhub.com/vertigobr/Azul/1.0.0/';

export const LOCALIZACAO_GET_SERVICE = `${SERVER_URL}/referenciado/plano/`;
export const LOCALIZACAO_SERVICE_SWAGGER = 'https://virtserver.swaggerhub.com/vertigobr/Azul/1.0.0/referenciado/plano/';

export const REFERENCIADO_GET_SERVICE = `${SERVER_URL}/referenciado/plano`;

export const SEGURADO_POST_SERVICE = `${SERVER_URL}/segurado`;

export const SEGURADO_GET_SERVICE = `${SERVER_URL}/segurado`;
