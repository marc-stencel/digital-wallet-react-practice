import { useState } from 'react';

import Modal from '../modal/Modal';
import CalculatorButton from '../buttons/CalculatorButton';

const SendMoney = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);

  const handleModalToggle = () => {
    setIsActiveModal(!isActiveModal);
  };

  return (
    <>
      {isActiveModal ? <Modal onModalToggle={handleModalToggle} /> : null}
      <CalculatorButton
        isActiveModal={isActiveModal}
        onModalToggle={handleModalToggle}
      />
    </>
  );
};

export default SendMoney;
