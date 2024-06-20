import { Button } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Icon = ({
  isComplete,
  updateComplete,
  todoID,
}: {
  isComplete: boolean;
  updateComplete: (todoID: string) => void;
  todoID: string;
}) => {
  return (
    <div onClick={() => updateComplete(todoID)}>
      {isComplete ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    </div>
  );
};

export const Todo = ({
  todoID,
  name,
  isComplete,
  updateComplete,
}: {
  todoID: string;
  name: string;
  isComplete: boolean;
  updateComplete: (todoID: string) => void;
}) => {
  return (
    <Button
      style={{
        justifyContent: "space-between",
        width: "250px",
      }}
      endIcon={
        <Icon
          todoID={todoID}
          isComplete={isComplete}
          updateComplete={updateComplete}
        />
      }
    >
      {name}
    </Button>
  );
};
