export interface ProfileFormInputs {
  fullName: string;
  gender: string;
  email: string;
}

export interface ProfileFormProps {
  handleOnSubmit: (data: ProfileFormInputs) => void;
  data?: ProfileFormInputs;
}
