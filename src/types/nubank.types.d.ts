type NubankTransaction = {
  Data: string;
  Valor: string;
  Identificador: string;
  Descrição: string;
};

type NubankStatment = NubankTransaction[];

type NewTransaction = {
  id?: string;
  title: string;
  value: number;
  category: string;
  date: Date;
};
