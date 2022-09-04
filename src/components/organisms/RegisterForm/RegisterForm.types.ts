export interface RegisterFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface RegisterFormProps {
  handleOnSubmit: (data: RegisterFormInputs) => void;
}
