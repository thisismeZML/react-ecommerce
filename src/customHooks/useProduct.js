import { BaseUrl } from "@/config/config";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProduct = async () => {
  const { data } = await axios(`${BaseUrl}?limit=10`);
  return data;
};

export const usefetchProduct = () =>
  useQuery({
    queryKey: ["product"],
    queryFn: fetchProduct,
  });
