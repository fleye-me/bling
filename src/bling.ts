import { format } from 'date-fns';
import { api } from './api';
import { NotaFiscal, ListarNotasFiscaisFilters } from './types';

export class BlingClient {
  private ENDPOINT = '/notasfiscais/json';
  constructor(private apiKey: string) {}

  async listarNotasFiscais(
    filters?: ListarNotasFiscaisFilters
  ): Promise<NotaFiscal[]> {
    try {
      const params: any = { apikey: this.apiKey };

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

      const response = await api.get(this.ENDPOINT, { params });
      return response.data.retorno.notasfiscais;
    } catch (err) {
      throw err;
    }
  }
}
