import { EMAIL } from "@/v2/constants/email";
import { toast } from "sonner";

export function useEmailClick() {
  const handleEmailClick = () => {
    toast.success("Email Copied");
    navigator.clipboard.writeText(EMAIL);
  };

  return { handleEmailClick };
}
