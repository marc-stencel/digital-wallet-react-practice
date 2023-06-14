import { useReducer } from 'react';

const initialState = {
  isTouched: false,
  value: '',
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE': {
      return {
        isTouched: state.isTouched,
        value: action.value,
      };
    }
    case 'BLUR': {
      return {
        isTouched: true,
        value: state.value,
      };
    }
  }
};

const useInputValidation = (validatedValue) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  const isValidValue = validatedValue(inputState.value);
  const hasError = !isValidValue && inputState.isTouched;

  const handleInputBlur = () => {
    dispatch({ type: 'BLUR' });
  };

  const handleInputChange = (event) => {
    dispatch({
      type: 'CHANGE',
      value: event.target.value,
    });
  };

  return {
    handleInputBlur,
    handleInputChange,
    hasError,
    isValidValue,
  };
};

export default useInputValidation;
