export type PostStatus = 'draft' | 'scheduled' | 'published' | 'failed';

export interface Page {
  id: string;
  user_id: string;
  facebook_page_id: string;
  page_name: string;
  access_token_encrypted: string;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: string;
  user_id: string;
  page_id: string;
  content: string;
  status: PostStatus;
  scheduled_at: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}
