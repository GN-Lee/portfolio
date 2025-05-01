export interface VisitorList {
  id: number;
  name: string;
  comment: string;
  createdAt: Date;
  likes: number;
}

export type VisitorResponseData = VisitorList & {
  replies: Reply[];
};

export interface Reply {
  id: number;
  comment: string;
  nickname: string;
  createdAt: Date;
}
