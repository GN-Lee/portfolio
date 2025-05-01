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
    const response = await axios.post(`${API_URL}/visitor`, {
      ...visitor,
      likes: 0, // 기본값으로 0 설정
    });
    console.log("서버 응답:", response.data); // 디버깅을 위한 로그
    return response.data;
  } catch (error: any) {
    console.error("Error creating visitor:", error);
    if (error.response) {
      throw {
        code: error.response.status,
        message: error.response.data?.message || "방명록 등록에 실패했습니다.",
      };
    }
    throw {
      code: 500,
      message: "서버와의 통신 중 오류가 발생했습니다.",
    };
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
  reply: { comment: string; nickname: string }
) => {
  try {
    const response = await axios.post(`${API_URL}/visitor/${id}/reply`, reply);
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
