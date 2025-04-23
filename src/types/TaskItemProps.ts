interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  onView: (id: string) => void;
  onToggle: (id: string) => void;
}
