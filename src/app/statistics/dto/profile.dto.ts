export class ProfileDto {
  public id: number;
  public username: string;
  public name: string;
  public state: 'active' | string;
  public avatar_url: string;
  public web_url: string;
  public created_at: string;
  public bio: string;
  public location: string;
  public public_email?: string;
  public skype: string;
  public linkedin: string;
  public twitter: string;
  public discord: string;
  public website_url: string;
  public organization: string;
  public job_title: string;
  public pronouns?: string[];
  public bot: boolean;
  public work_information?: string;
  public followers: number;
  public following: number;
  public is_followed: boolean;
  public local_time?: string;
  public last_sign_in_at: string;
  public confirmed_at: string;
  public last_activity_on: string;
  public email: string;
  public theme_id: number;
  public color_scheme_id: number;
  public projects_limit: 100000;
  public current_sign_in_at: string;
  public identities: string[];
  public can_create_group: boolean;
  public can_create_project: boolean;
  public two_factor_enabled: boolean;
  public external: boolean;
  public private_profile: boolean;
  public commit_email: string;
  public shared_runners_minutes_limit?: number;
  public extra_shared_runners_minutes_limit?: number;
}
