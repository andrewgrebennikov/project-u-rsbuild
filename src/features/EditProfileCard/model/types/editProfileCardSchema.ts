import { Profile } from '@/entities/Profile';

export interface ProfileSchema {
  profileData?: Profile;
  formData?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
