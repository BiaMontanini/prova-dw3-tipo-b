
export interface UserContextProps {
  users: PageProps | null;
  error: string | null;
  getUsers: (page: number, fromdate: number, todate: number) => Promise<void>;
  setError: (value: string | null) => void;
}

export interface UserProps {
  badge_counts: BadgeProps;
  account_id: number;
  is_employee: boolean;
  last_modified_date: number;
  last_access_date: number;
  reputation_change_year: number;
  reputation_change_quarter: number;
  reputation_change_month: number;
  reputation_change_week: number;
  reputation_change_day: number;
  reputation: number;
  creation_date: number;
  user_type: string;
  user_id: number;
  website_url: string;
  link: string;
  profile_image: string;
  display_name: string;
}

export interface PageProps {
  items: UserProps[];
  has_more: boolean;
  backoff: number;
  quota_max: number;
  quota_remaining: number;
}

interface BadgeProps {
  bronze: number;
  silver: number;
  gold: number;
}

export interface ErrorProps {
  message: string;
}

export interface UserContextState {
  users: PageProps | null;
  error: string | null;
  inputError: string | null;
  getUsers: (page: number, fromdate: number, todate: number) => Promise<void>;
  setError: (error: string | null) => void;
  setInputError: (error: string | null) => void;
}

export interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}