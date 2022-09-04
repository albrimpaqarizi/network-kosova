export interface ForgotPasswordInputs {
  email: string;
}

export interface ForgotPasswordProps {
  handleOnSubmit: (data: ForgotPasswordInputs) => void;
}
