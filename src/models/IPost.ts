export interface IPost {
  map(arg0: (post: IPost) => JSX.Element): import("react").ReactNode;
  id: number;
  avatar: string;
  author: string;
  title: string;
  body: string;
  views: number;
}
