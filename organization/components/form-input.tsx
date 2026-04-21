import { Input } from "@/components/ui/input";

export default function FormInput({ field, placeholder }: any) {
  return <Input {...field} placeholder={placeholder} />;
}