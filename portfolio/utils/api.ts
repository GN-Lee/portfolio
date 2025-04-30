import { VisitorList, VisitorResponseData } from "@/type/visitorList";
import axios from "axios";

const API_URL = "http://localhost:3001";

export const getVisitor = async (): Promise<VisitorList[]> => {
  try {
    const response = await axios.get(`${API_URL}/visitor`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching visitors:", error);
    throw error;
  }
};

export const createVisitor = async (
  visitor: Pick<VisitorList, "name" | "comment">
) => {
  try {
    const response = await axios.post(`${API_URL}/visitor`, visitor);
    return response.data;
  } catch (error) {
    console.error("Error creating visitor:", error);
    throw error;
  }
};

export const getVisitorById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/visitor/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching visitor with id ${id}:`, error);
    throw error;
  }
};

export const createResponseReply = async (
  id: string,
  reply: Pick<VisitorResponseData, "replies">
) => {
  try {
    const response = await axios.post(`${API_URL}/visitor/${id}`, reply);
    return response.data;
  } catch (error) {
    console.error("Error creating response reply:", error);
    throw error;
  }
};

export const getResponseReply = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/visitor/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching response reply for visitor ${id}:`, error);
    throw error;
  }
};
