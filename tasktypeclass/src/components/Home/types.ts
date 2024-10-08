export interface Task {
  id: string;
  title: string;
  desc?: string;
  status: "Incomplete" | "Completed";
  isImportant: boolean;
}
