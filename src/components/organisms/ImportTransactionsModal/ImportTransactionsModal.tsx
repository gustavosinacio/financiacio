import { Modal } from "../../molecules";
import * as Styles from "./ImportTransactionsModal.styles";
export function ImportTransactionsModal({
  isOpen,
  onRequestClose,
}: ImportTransactionsModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Styles.Container>ImportTransactionsModal</Styles.Container>
    </Modal>
  );
}
