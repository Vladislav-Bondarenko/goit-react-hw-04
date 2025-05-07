import Modal from "react-modal";

Modal.setAppElement("#root"); // обязательная строка!

export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
        content: { maxWidth: "800px", margin: "auto" },
      }}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        style={{ width: "100%" }}
      />
      <p>Author: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
      <p>Description: {image.alt_description || "No description"}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}
