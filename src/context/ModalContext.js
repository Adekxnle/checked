import { createContext, useState } from 'react';

export const ModalContext = createContext();

function ModalContextProvider(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContext.Provider value={{ isOpen, toggleIsOpen }}>{props.children}</ModalContext.Provider>
  );
}

export default ModalContextProvider;
