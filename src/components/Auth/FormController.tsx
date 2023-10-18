import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type TFormValues = {
  Name: string;
  Password: string;
  Email: string;
  Address: string;
  Phone: string;
};

interface IFormContext {
  formData: TFormValues;
  onHandleBack: () => void;
  onHandleNext: () => void;
  step: number;
  setFormData: Dispatch<SetStateAction<TFormValues>>;
}

const FormContext = createContext<IFormContext>({
  formData: {
    Name: '',
    Password: '',
    Email: '',
    Address: '',
    Phone: '',
  },
  onHandleBack: () => {},
  onHandleNext: () => {},
  step: 1,
  setFormData: () => {},
});

interface IProps {
  children: ReactNode;
}

export function FormProvider({ children }: IProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<TFormValues>({
    Name: '',
    Password: '',
    Email: '',
    Address: '',
    Phone: '',
  });

  function onHandleNext() {
    setStep((prev) => prev + 1);
  }

  function onHandleBack() {
    setStep((prev) => prev - 1);
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        onHandleBack,
        onHandleNext,
        step,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
