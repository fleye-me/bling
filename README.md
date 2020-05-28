# Bling

---

Integração para utilização do sistema de [Bling](https://www.bling.com.br/home) através das [APIs](https://manuais.bling.com.br/manual/?categoria=api-v2&tipo=api). O sistema Bling disponibiliza diversos módulos, a integração porém ainda não está finalizada e deve ser incrementada a medida que os módulos forem necessários.

## Módulos:

- Borderos
- Campos customizados
- Categoria
- Categorias loja
- Contas a pagar
- Contatos
- Contrato
- CTe
- Depósitos
- Estoques
- Formas de pagamento
- Grupos de produtos
- Logística
- NFCe
- Notas fiscais
- Notas serviços
- Pedidos
- Pedidos de compra
- Produto loja
- Produtos
- Produtos fornecedores
- Proposta comercial
- Situações

## Instalação

**Yarn:**

```bash
yarn add @sthima/bling
```

**NPM:**

```
npm install --save @sthima/bling
```

## Utilização

Esta biblioteca fornece como inteface única um cliente, através dos quais todos os métodos disponíveis, e já implementados, podem ser utilizado. Para começar sua utilização, a primeira coisa que deve ser realizada é a criação de um novo cliente, conforme o exemplo:

```javascript
import { BlingClient } from '@sthima/bling

const client = new BlingClient('chave de acesso')
```

## Notas Fiscais

### Listar todas as notas fiscais

```javascript
const nfs = await client.listarNotasFiscais();
```

É possível filtrar quais notas devem ser retornadas através de um objeto filtro no seguinte formato:

```javascript
{
    "dataEmissao"?: [Date, Date] | [Date],
    "situacao"?: number,
    "tipo"?: string,
}
```

Os valores possíveis de `situacao` e `tipo` podem ser encotradas na [documentação oficial](https://manuais.bling.com.br/manual/?item=notas-fiscais). Mas para facilitar, o campo `situacao` foi mapeado através de uma `enum` acessível através de:

```javascript
import { SituacaoNF } from '@sthima/bling
```

### Buscar uma única nota fiscal

```javascript
const nf = await client.buscarNotaFiscal(numero, serie);
```
