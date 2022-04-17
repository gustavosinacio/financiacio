import { useState } from "react";

import { Header } from "../organisms";
import { NewTransactionModal } from "../organisms/NewTransactionModal/NewTransactionModal";
import { Dashboard } from "../templates";
import * as Styles from "./Home.styles";

export function Home() {
  const [isModalOpen, setIsOpenModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsOpenModal(true);
  }
  function handleCloseNewTransactionModal() {
    setIsOpenModal(false);
  }

  return (
    <Styles.Container>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </Styles.Container>
  );
}
