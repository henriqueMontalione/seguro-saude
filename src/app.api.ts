
const  SERVER_URL= 'http://192.168.0.161';

export const ENDERECO_GET_SERVICE =  `${SERVER_URL}/localizacao/correios/endereco?cep=`;
export const PLANO_GET_SERVICE =  `${SERVER_URL}/plano`;

export const ESPECIALIDADE_GET_SERVICE = `${SERVER_URL}/especialidade`;
export const ESPECIALIDADE_SERVICE_SWAGGER = 'https://virtserver.swaggerhub.com/vertigobr/Azul/1.0.0/';

export const LOCALIZACAO_GET_SERVICE = `${SERVER_URL}/referenciado/plano`;
export const LOCALIZACAO_SERVICE_SWAGGER = 'https://virtserver.swaggerhub.com/vertigobr/Azul/1.0.0/referenciado/plano/';

export const REFERENCIADO_GET_SERVICE = `${SERVER_URL}/referenciado/plano/5/cidade/rio de janeiro/?especialidadeId=`;

/* Segurado */
export const SEGURADO_SERVICE = `${SERVER_URL}/segurado`;
