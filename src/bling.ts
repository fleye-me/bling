import { format } from 'date-fns';
import { js2xml } from 'xml-js';
import { api } from './utils/api';
import validate from './validators/pedido.validator';
import { NotaFiscal, ListarNotasFiscaisFilters } from './types/receiveInvoice';
import { Pedido } from './types/createInvoice';

export class BlingClient {
  constructor(private apiKey: string) {}

  async criarNotaFiscal(pedido: Pedido): Promise<NotaFiscal> {
    const ENDPOINT = '/notafiscal';
    try {
      if (!validate(pedido)) {
        throw new Error();
      }

      const params: { [key: string]: string } = {
        apikey: this.apiKey,
        xml: js2xml(pedido, { compact: true, spaces: 4 }),
      };

      const response = await api.post(`${ENDPOINT}/json`, {}, { params });
      return response.data.retorno.notasfiscais.shift();
    } catch (err) {
      throw err;
    }
  }

  /**
   * Recupera todas os notas fiscais cadastradas no sistema.
   * @param filters os filtros que poderão se aplicados na busca
   */
  async listarNotasFiscais(
    filters?: ListarNotasFiscaisFilters
  ): Promise<{ notafiscal: NotaFiscal }[]> {
    const ENDPOINT = '/notasfiscais';
    try {
      const params: { [key: string]: string } = { apikey: this.apiKey };

      // Build filters string
      if (filters) {
        const fArray: string[] = [];
        const { situacao, tipo, dataEmissao } = filters;

        // Checks if `tipos` exists and adds it filters
        tipo ? fArray.push(`tipo[${tipo}]`) : null;

        // Checks if `situcao` exists and adds it filters
        situacao ? fArray.push(`situacao[${situacao}]`) : null;

        // Checks if `dataEmissao` exists and adds it filters
        if (dataEmissao) {
          const dataEmissaoStr = dataEmissao
            .map((d) => format(d, 'dd/MM/yyyy HH:mm:ss'))
            .join(' TO ');
          fArray.push(`dataEmissao[${dataEmissaoStr}]`);
        }

        // Join all filters together
        params['filters'] = fArray.join(';');
      }

      const response = await api.get(`${ENDPOINT}/json`, { params });
      return response.data.retorno.notasfiscais;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Busca uma nota fiscal a partir de seu numero e sua serie.
   * @param number o número da nota fiscal
   * @param series a serie da nota fiscal
   */
  async buscarNotaFiscal(
    number: number,
    series: number
  ): Promise<NotaFiscal[]> {
    const ENDPOINT = '/notafiscal';
    try {
      const params: { [key: string]: string } = { apikey: this.apiKey };
      const response = await api.get(`${ENDPOINT}/${number}/${series}/json`, {
        params,
      });
      return response.data.retorno.notasfiscais;
    } catch (err) {
      throw err;
    }
  }
}
