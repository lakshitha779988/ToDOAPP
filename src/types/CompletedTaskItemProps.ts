 export interface CompletedTaskItemProps {
  id: string;
  title: string;
  onView: (id: string) => void;
  onDelete: (id: string) => void;
}