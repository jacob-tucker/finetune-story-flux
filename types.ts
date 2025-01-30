export interface Inference {
  id: string;
  status: "Ready" | "Pending" | "Failed";
  result: {
    sample: string;
  };
}
