export interface Post {
  id: string;
  prompt: string;
  content: string;
  title?: string | null;
  isDraft: boolean;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthFormData {
  email: string;
  password: string;
}

export interface SignUpFormData extends AuthFormData {
  firstName: string;
  lastName: string;
  passwordConfirmation: string;
}

export interface SignInFormProps {
  isLoading: boolean;
  onSubmit: (data: AuthFormData) => Promise<void>;
}

export interface SignUpFormProps {
  isLoading: boolean;
  onSubmit: (data: SignUpFormData) => Promise<void>;
}
