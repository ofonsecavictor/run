import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type IModal = {
  isOpen: boolean;
  isEdit?: boolean;
};

type IModalsData = {
  [x: string]: IModal;
};

type Context = {
  modal: IModalsData;
  toggleModal(params: IModalsData): void;
  modalContent: any,
  setModalContent: (item: any) => void
  keyModal: string,
  setKeyModal: (key: string) => void;
  modalContentDetails: any, setModalContentDetails: (item: any) => void
};

const ModalContext = createContext({} as Context);

export const ModalProvider = ({ children }: any) => {
  const [data, setData] = useState<IModalsData>({} as IModalsData);
  const [modalContent, setModalContent] = useState();
  const [modalContentDetails, setModalContentDetails] = useState();
  const [keyModal, setKeyModal] = useState('');

  const toggleModal = useCallback(
    (object: IModalsData) => {
      setData({
        ...data,
        ...object,
      });
    },
    [data],
  );

  const value = useMemo(
    () => ({
      modal: data,
      toggleModal,
      modalContent,
      setModalContent,
      keyModal, setKeyModal,
      modalContentDetails, setModalContentDetails,
    }),
    [data, toggleModal, modalContent, keyModal, modalContentDetails],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModal = (): Context => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('ModalProvider Error');
  }

  return context;
};
