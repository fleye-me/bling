export enum SituacaoNF {
  Pendente = 1,
  Emitida,
  Cancelada,
  EnviadaAguardandoRecibo,
  Rejeitada,
  Autorizada,
  EmitidaDANFE,
  Registrada,
  EnviadaAguardandoProtocolo,
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
export interface Cliente {
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

interface CodigosRastreamento {
  codigoRastreamento: string;
}

/**
 * Interface de um endereço de entrega
 */
interface EnderecoEntrega {
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
export interface Transporte {
  transportadora: string;
  cnpj: string;
  tipo_frete: string;
  enderecoEntrega: EnderecoEntrega;
}

/**
 * Interface de um volume
 */
export interface Volume {
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
  cliente: Cliente;
  contato: string;
  cnpj: string;
  vendedor: string;
  dataEmissao: string;
  valorNota: string;
  chaveAcesso: string;
  xml: string;
  linkDanfe: string;
  codigosRastreamento: CodigosRastreamento;
  cfops: string[];
  tipoIntegracao: string;
  transporte: Transporte;
  volumes: Volume[];
  servico_correios: string;
}
