// import csv from "csv-parser";
import { FormEvent, useState } from "react";
import { usePapaParse } from "react-papaparse";

import { addMultipleTransactions } from "../../../services/firebase/transactions";
import { parseNubankStatementToTransactions } from "../../../utils/functions";
import { Modal } from "../../molecules";
import * as Styles from "./ImportTransactionsModal.styles";
export function ImportTransactionsModal({
  isOpen,
  onRequestClose,
}: ImportTransactionsModalProps) {
  const [selectedFile, setSelectedFile] = useState<File>();
  const { readString } = usePapaParse();

  function handleSelectFile(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    const file = event.target.files[0];
    setSelectedFile(file);
  }

  function handleAddImportFile(event: FormEvent) {
    event.preventDefault();

    if (!selectedFile) return;
    var reader = new FileReader();

    reader.readAsText(selectedFile, "UTF-8");
    reader.onload = function (evt) {
      const result = evt.target?.result?.toString() || "";

      readString(result, {
        header: true,
        worker: true,
        complete: async ({ data }: { data: NubankStatment }) => {
          const parsedStatement = parseNubankStatementToTransactions(data);

          try {
            await addMultipleTransactions(parsedStatement);
          } catch (error) {
            console.log(98217, error);
          }
        },
      });
    };
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Styles.Container onSubmit={(event) => handleAddImportFile(event)}>
        <label htmlFor="transactions">Select a file: </label>
        <input
          type="file"
          id="transactions"
          name="transactions"
          onChange={handleSelectFile}
        />

        <button type="submit">Submit</button>
      </Styles.Container>
    </Modal>
  );
}
