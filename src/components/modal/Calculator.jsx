import { useState } from 'react';
import { Link } from 'react-router-dom';

import CloseButton from '../buttons/CloseButton';
import Country from './Country';
import CalculatorDetails from './CalculatorDetails';
import Summary from './Summary';

import { EXCHANGE } from '../../constants/constants';

import polishFlag from '../../assets/images/flags/poland.png';
import usaFlag from '../../assets/images/flags/usa.png';

import classes from './Calculator.module.css';

const Calculator = ({ onModalToggle }) => {
  const { currencyRate, discount, sender, receiver, senderInitialValue } =
    EXCHANGE;

  const [senderAmount, setSenderAmount] = useState(
    senderInitialValue.toFixed(2),
  );

  const receiverInitialValue = (senderAmount / currencyRate).toFixed(2);

  const [receiverAmount, setReceiverAmount] = useState(receiverInitialValue);

  const handleSenderChange = (amount) => {
    if (amount > 1000001) return;

    setSenderAmount(amount);
    const result = (amount / currencyRate).toFixed(2);
    setReceiverAmount(result);
  };

  const handleSenderBlur = (amount) => {
    setSenderAmount(amount.toFixed(2));
  };

  const handleReceiverChange = (amount) => {
    if (amount > 1000001) return;

    setReceiverAmount(amount);
    const result = amount * currencyRate;
    setSenderAmount(result.toFixed(2));
  };

  const handleReceiverBlur = (amount) => {
    setReceiverAmount(amount.toFixed(2));
  };

  return (
    <div className={classes.calculator}>
      <CloseButton onCloseClick={onModalToggle}>X</CloseButton>
      <em className={classes.rate}>
        {sender.abbr} 1.00 = {receiver.abbr} {currencyRate}
      </em>
      <Country
        onInputBlur={handleSenderBlur}
        onInputChange={handleSenderChange}
        country={sender}
        img={polishFlag}
        value={senderAmount || ''}
      />
      <Country
        onInputBlur={handleReceiverBlur}
        onInputChange={handleReceiverChange}
        country={receiver}
        img={usaFlag}
        value={receiverAmount || ''}
      />
      <CalculatorDetails />
      <Summary amount={senderAmount} discountAmount={discount} />
      <Link to="register" className={classes.link}>
        Get started
      </Link>
    </div>
  );
};

export default Calculator;
