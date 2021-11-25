export interface AuthState {
  isAuthenticated: boolean;
}

export interface LoginDTO {
  username: string;
  password: string;
}

export interface RegisterDTO {
  fullName: string;
  userName: string;
  password: string;
}

export interface ForgotPasswordDTO {
  username: string;
}

export interface ResetPasswordDTO {
  username: string;
  newPassword: string;
  confirmPassword: string;
}
