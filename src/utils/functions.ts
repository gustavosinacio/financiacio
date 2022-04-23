export function parseNubankStatementToTransactions(
  nubankTransactions: NubankStatment
) {
  return nubankTransactions.map(
    ({
      Data,
      Descrição: descricao,
      Identificador,
      Valor,
    }: NubankTransaction) => {
      const splitData = Data.split("/");
      const day = splitData[0];
      const month = splitData[1];
      const year = splitData[2];

      const date = new Date(`${year}-${month}-${day}T00:00:00.0300`);

      return {
        date,
        title: descricao,
        id: Identificador,
        value: Number(Valor),
        category: "imported",
      };
    }
  );
}

export function roundToTwo(number: number) {
  return Math.round(number * 100 + Number.EPSILON) / 100;
}
