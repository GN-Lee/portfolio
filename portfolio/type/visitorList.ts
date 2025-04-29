export interface VisitorList {
  id: number;
  name: string;
  comment: string;
  createdAt: Date;
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
