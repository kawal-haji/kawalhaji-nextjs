import { getVersion } from "@/apis/getVersion";
import { useQuery } from "@tanstack/react-query";

export const useVersion = () => {
  return useQuery({
    queryKey: ["/version"],
    queryFn: () => getVersion(),
  });
};
