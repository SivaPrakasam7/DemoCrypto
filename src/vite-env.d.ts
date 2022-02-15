/// <reference types="vite/client" />

interface Child {
  children: React.ReactNode;
}

interface User {
  profile?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_FIREBAASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGEING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface trade {
  amount: number;
  coin: string;
  commission: number;
  marketPrice?: number;
  limitPrice?: number;
  stopLimitPrice?: number;
  noOfCoins: number;
  orderCancelled: boolean;
  orderType: 0 | 1 | 2 | 3 | 4 | 5;
  executedAt: number | null;
  pair: string;
  placedAt: number;
  side: "buy" | "sell";
  status: "pending" | "completed" | "cancelled";
  uid: string;
}
