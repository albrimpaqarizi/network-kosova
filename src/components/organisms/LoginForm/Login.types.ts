export interface LoginInputs {
  email: string;
  password: string;
}

export interface LoginFormProps {
  handleOnSubmit: (data: LoginInputs) => void;
}
