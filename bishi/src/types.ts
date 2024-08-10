// types.ts
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
  // 定义 AuthState 类型
export type AuthState = {
  token: string | null;
  username: string | null;
};