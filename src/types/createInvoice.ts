/**
 * Enum tipo de pessoa para Cliente
 */
export enum TipoPessoa {
  Fisica = 'F',
  Juridica = 'J',
  Estrangeiro = 'E',
}

/**
 * Enum tipo de contribuinte para Cliente
 */
export enum TipoContribuinte {
  ICMS = 1,
  IsentoICMS,
  NaoContribuinte = 9,
}

/**
 * Enum unidade do Item
 */
export enum UnidadeItem {
  Unidade = 'un',
  Caixa = 'cx',
  Pacote = 'pc',
}

/**
 * Enum tipo do Item
 */
export enum TipoItem {
  Produto = 'P',
  Servico = 'S',
}

/**
 * Enum origem do Item
 */
export enum OrigemItem {
  Nacional = 0,
  EstrangeiraDireta,
  EstrangeiraInterna,
  NacionalImportacaoMaior40,
  NacionalBasica,
  NacionalImportacaoMenor40,
  EstrangeiraDiretaSemSimilar,
  EstrangeiraInternaSemSimilar,
}

/**
 * Enum de modelo para DocReferenciado
 */
export enum ModeloDoc {
  NotaFiscalTalao = 1,
  NotaFiscalConsumidor,
  CupomFiscal = '2D',
  NotaDeProduto = 4,
  NFe = 55,
  NFCe = 65,
}

/**
 * Enum de tipo para Pedido
 */
export enum TipoPedido {
  Entrada = 'E',
  Saida = 'S',
}

/**
 * Enum de modelo para DocReferenciado
 */
export enum FinalidePedido {
  Normal = 1,
  Complementar,
  Ajuste,
  Devolucao,
}

/**
 * Interface do campo endereço para Cliente
 */
interface EnderecoCliente {
  endereco: string;
  numero: string;
  cidade: string;
  bairro: string;
  cep: string;
  uf: string;
  complemento?: string;
}

/**
 * Interface do campo Cliente
 */
interface Cliente extends EnderecoCliente {
  nome: string;
  tipo_pessoa: TipoPessoa;
  cpf_cnpj: string;
  email: string;
  contribuinte?: TipoContribuinte;
  ie_rg?: string;
  pais?: string;
  fone?: string;
}

/**
 * Interface do campo Etiqueta
 */
interface Etiqueta {
  nome?: string;
  endereco?: string;
  numero?: string;
  municipio?: string;
  uf?: string;
  cep?: string;
  bairro?: string;
}

/**
 * Interface do campo Volume
 */
interface Volume {
  volume: {
    servico: string;
    codigoRastreamento?: string;
  };
}

/**
 * Interface do campo Transporte
 */
interface Transporte {
  transportadora?: string;
  cpf_cnpj?: string;
  ie_rg?: string;
  endereco?: string;
  cidade?: string;
  uf?: string;
  placa?: string;
  uf_veiculo?: string;
  marca?: string;
  tipo_frete?: string;
  qtde_volumes?: string;
  especie?: string;
  numero?: string;
  peso_bruto?: string;
  peso_liquido?: string;
  servico_correios?: string;
  dados_etiqueta?: Etiqueta;
  volumes?: Volume[];
}

/**
 * Interface do campo Item
 */
interface Item {
  descricao: string;
  un: UnidadeItem;
  qtde: string;
  vlr_unit: string;
  tipo: TipoItem;
  origem: OrigemItem;
  codigo?: string;
  peso_bruto?: string;
  numero_pedido_compra?: string;
  peso_liq?: string;
  class_fiscal?: string;
  cest?: string;
  cod_servico?: string;
  informacoes_adicionais?: string;
}

/**
 * Interface do campo Documento Referenciado
 */
interface DocReferenciado {
  modelo: ModeloDoc;
  data?: string;
  numero?: string;
  serie?: string;
  coo?: string;
  chave_acesso?: string;
}

/**
 * Interface do campo Parcela
 */
interface Parcela {
  parcela: {
    dias?: string;
    data?: string;
    vlr?: string;
    obs?: string;
    forma?: string;
  };
}

/**
 * Interface do campo Nota Fiscal Do Produtor Rural Referenciada
 */
interface NotaFiscalRuralReferenciada {
  numero?: string;
  serie?: string;
  ano_mes_emissao?: string;
}

/**
 * Interface do campo Pedido
 */
export interface Pedido {
  pedido: {
    cliente: Cliente;
    itens: Item[];
    transporte?: Transporte;
    parcelas?: Parcela[];
    tipo?: TipoPedido;
    finalidade?: FinalidePedido;
    loja?: string;
    numero_loja?: string;
    numero_nf?: string;
    nat_operacao?: string;
    data_operacao?: string;
    doc_referenciado?: DocReferenciado;
    nf_produtor_rural_referenciada?: NotaFiscalRuralReferenciada;
    vlr_frete?: string;
    vlr_seguro?: string;
    vlr_despesas?: string;
    vlr_desconto?: string;
    obs?: string;
  };
}
