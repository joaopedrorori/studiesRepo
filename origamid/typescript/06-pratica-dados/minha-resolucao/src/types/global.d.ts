interface Purchase {
  Status:
    | "Recusada pela operadora de cartão"
    | "Aguardando pagamento"
    | "Paga"
    | "Estornada";
  Id: number;
  Data: string;
  Nome: string;
  "Forma de Pagamento": "Cartão de Crédito" | "Boleto";
  Email: string;
  "Valor (R$)": string;
  "Cliente Novo": boolean;
}
