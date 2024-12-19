interface IAuthor {
  _id: string;
  username: string;
}

interface IComment {
  author: string;
  post: string;
  text: string;
}

export interface IPost {
  _id: string;
  title: string;
  content: string;
  author: IAuthor;
  comments: IComment[]; // Use WritableDraft for comments
  community: string;
  createdAt?: string;
}
