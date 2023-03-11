import Modal from '../components/Modal';
import Button from '../components/Button';

import { useState } from 'react';

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  return (
    <div>
      <Button onClick={() => setIsOpen(true)} primary>
        Show Modal
      </Button>

      {isOpen && (
        <Modal onClose={handleClose} actionBar={actionBar}>
          <p>Here is an important agreement for you to accept</p>
        </Modal>
      )}
    </div>
  );
};

export default ModalPage;
