import { VisitorList, Reply, VisitorResponseData } from "@/type/visitorList";
import axios from "axios";

const API_URL = "http://localhost:3001";

export const getVisitor = async (): Promise<VisitorList[]> => {
  const response = await axios.get(`${API_URL}/visitor`);
  return response.data.data;
};

export const createVisitor = async (
  visitor: Pick<VisitorList, "name" | "comment">
) => {
  const response = await axios.post(`${API_URL}/visitor`, visitor);
  return response.data;
};

export const getVisitorById = async (id: string) => {
  const response = await axios.get(`${API_URL}/visitor/${id}`);
  return response.data;
};

export const createReply = async (
  id: string,
  reply: Pick<Reply, "nickname" | "comment">
) => {
  const response = await axios.post(`${API_URL}/visitor/${id}/replies`, reply);
  return response.data;
};

export const getReply = async (id: string) => {
  const response = await axios.get(`${API_URL}/visitor/${id}/replies`);
  return response.data;
};

export const createResponseReply = async (
  id: string,
  reply: Pick<VisitorResponseData, "replies">
) => {
  const response = await axios.post(`${API_URL}/visitor/${id}/replies`, reply);
  return response.data;
};
