export interface RegisterFormInputs {
  fullName: string;
  gender: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface RegisterFormProps {
  handleOnSubmit: (data: RegisterFormInputs) => void;
}
