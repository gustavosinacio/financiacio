import { useState } from "react";

import { Header } from "../organisms";
import { ImportTransactionsModal } from "../organisms";
import { NewTransactionModal } from "../organisms";
import { Dashboard } from "../templates";
import * as Styles from "./Home.styles";

export function Home() {
  const [openNewTransactionModal, setOpenNewTransactionModal] = useState(false);
  const [openImportModal, setOpenImportModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setOpenNewTransactionModal(true);
  }
  function handleCloseNewTransactionModal() {
    setOpenNewTransactionModal(false);
  }

  function handleOpenImportModal() {
    setOpenImportModal(true);
  }

  function handleCloseImportModal() {
    setOpenImportModal(false);
  }

  return (
    <Styles.Container>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
        onOpenImportModal={handleOpenImportModal}
      />
      <Dashboard />
      <NewTransactionModal
        isOpen={openNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <ImportTransactionsModal
        isOpen={openImportModal}
        onRequestClose={handleCloseImportModal}
      />
    </Styles.Container>
  );
}
