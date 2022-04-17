import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export function Modal({ isOpen, onRequestClose, children }: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      {children}
    </ReactModal>
  );
}
