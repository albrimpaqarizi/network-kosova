export interface ProfileFormInputs {
  fullName: string;
  email: string;
}

export interface ProfileFormProps {
  handleOnSubmit: (data: ProfileFormInputs) => void;
}
