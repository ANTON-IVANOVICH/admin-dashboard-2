export interface Post {
  map(arg0: (post: Post) => JSX.Element): import("react").ReactNode;
  id: number;
  avatar: string;
  author: string;
  title: string;
  body: string;
}
