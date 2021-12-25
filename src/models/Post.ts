export interface Post {
  map(arg0: (post: Post) => JSX.Element): import("react").ReactNode;
  id: number;
  title: string;
  body: string;
}