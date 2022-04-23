import { FormEvent, useState } from "react";

import closeImg from "../../../assets/close.svg";
import incomeImg from "../../../assets/income.svg";
import outcomeImg from "../../../assets/outcome.svg";
import { addTransaction } from "../../../services/firebase/transactions";
import { Modal } from "../../molecules";
import * as Styles from "./NewTransactionModal.styles";

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState<string>();
  const [value, setValue] = useState<number>();
  const [category, setCategory] = useState<string>();
  const [type, setType] = useState<TransactionType>("deposit");
  const [error, setError] = useState<string>();

  async function handleAddNewTransaction(event: FormEvent) {
    event.preventDefault();

    if (!value || value <= 0) {
      setError("Valor não pode ser negativo ou 0");
      return;
    } else if (!title) {
      setError("Título vazio");
      return;
    }
    if (!category) {
      setError("Categoria vazio");
      return;
    }

    try {
      await addTransaction({
        value: type === "deposit" ? value : -value,
        title,
        category,
        date: new Date(),
      });
    } catch {
      setError("Erro ao adicionar dado");
      console.error(error);
    } finally {
      onRequestClose();
    }
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Styles.Container onSubmit={handleAddNewTransaction}>
        <header>
          <h2>Nova transação</h2>

          <button
            className="react-modal-close"
            type="button"
            onClick={onRequestClose}
          >
            <img src={closeImg} alt="close modal" />
          </button>
        </header>

        <input
          value={title}
          placeholder="Título"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          value={value}
          placeholder="Valor"
          type="number"
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <input
          value={category}
          placeholder="Categoria"
          onChange={(event) => setCategory(event.target.value)}
        />

        <h3>Tipo:</h3>
        <Styles.WrapperTransactionType>
          <Styles.RadioBox
            isActive={type === "deposit"}
            type="button"
            transactionType={type}
            onClick={() => {
              setType("deposit");
            }}
          >
            <img src={incomeImg} alt="entradas" />
            <span>Entrada</span>
          </Styles.RadioBox>
          <Styles.RadioBox
            isActive={type === "withdraw"}
            type="button"
            transactionType={type}
            onClick={() => {
              setType("withdraw");
            }}
          >
            <span>Saída</span>
            <img src={outcomeImg} alt="entradas" />
          </Styles.RadioBox>
        </Styles.WrapperTransactionType>

        {error && <span className="error-msg">{error}</span>}

        <button type="submit">Cadastrar</button>
      </Styles.Container>
    </Modal>
  );
}
