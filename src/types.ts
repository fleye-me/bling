export enum SituacaoNF {
  Pendente = 1,
  Emitida,
  Cancelada,
  Enviada_Aguardando_Recibo,
  Rejeitada,
  Autorizada,
  Emitida_DANFE,
  Registrada,
  Enviada_Aguardando_Protocolo,
  Denegada,
}

/**
 * Interface dos filtros disponíves para a listagem de notas fiscais
 */
export interface ListarNotasFiscaisFilters {
  dataEmissao?: [Date, Date] | [Date];
  situacao?: SituacaoNF;
  tipo?: string;
}

/**
 * Interface do campo cliente dentro da NF
 */
interface ICliente {
  nome: string;
  cnpj: string;
  ie: string;
  rg: string;
  endereco: string;
  numero: string;
  complemento: string;
  cidade: string;
  bairro: string;
  cep: string;
  uf: string;
  email: string;
  fone: string;
}

interface ICodigosRastreamento {
  codigoRastreamento: string;
}

/**
 * Interface de um endereço de entrega
 */
interface IEnderecoEntrega {
  nome: string;
  endereco: string;
  numero: string;
  complemento: string;
  cidade: string;
  bairro: string;
  cep: string;
  uf: string;
}

/**
 * Interface do campo transporte
 */
interface ITransporte {
  transportadora: string;
  cnpj: string;
  tipo_frete: string;
  enderecoEntrega: IEnderecoEntrega;
}

/**
 * Interface de um volume
 */
interface IVolume {
  volume: {
    idServico: string;
    servico: string;
    codigoRastreamento: string;
    valorFretePrevisto: string;
    remessa: {
      numero: string;
      dataCriacao: string;
    };
    dataSaida: string;
    prazoEntregaPrevisto: string;
    valorDeclarado: string;
    avisoRecebimento: boolean;
    maoPropria: boolean;
    dimensoes: {
      peso: string;
      altura: string;
      largura: string;
      comprimento: string;
      diametro: string;
    };
    urlRastreamento: string;
  };
}

/**
 * Interface da NF
 */
export interface NotaFiscal {
  serie: string;
  numero: string;
  loja: string;
  numeroPedidoLoja: string;
  tipo: string;
  situacao: string;
  cliente: ICliente;
  contato: string;
  cnpj: string;
  vendedor: string;
  dataEmissao: string;
  valorNota: string;
  chaveAcesso: string;
  xml: string;
  linkDanfe: string;
  codigosRastreamento: ICodigosRastreamento;
  cfops: string[];
  tipoIntegracao: string;
  transporte: ITransporte;
  volumes: IVolume[];
  servico_correios: string;
}
