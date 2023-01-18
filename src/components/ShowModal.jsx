import { useEffect } from 'react';

function MyModal({ closeModal }) {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, []);

  return (
    <>
      <div className="modal_wrapper"></div>
      <div className="modal_container">
        <h2>Modal Title</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button onClick={closeModal}>Accept it</button>
      </div>
    </>
  );
}

export default MyModal;
