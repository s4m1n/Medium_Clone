export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList?: string[] | null;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}
export interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface ArticlesResponse {
  articles?: Article[] | null;
  articlesCount: number;
}
