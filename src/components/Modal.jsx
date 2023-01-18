import { useState } from 'react';
import MyModal from './ShowModal';

function Modal() {
  const [ShowModal, setShowModal] = useState(false);

  function closeModal() {
    return setShowModal(false);
  }

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open modal</button>
      {ShowModal && <MyModal closeModal={closeModal} />}
    </>
  );
}

export default Modal;
