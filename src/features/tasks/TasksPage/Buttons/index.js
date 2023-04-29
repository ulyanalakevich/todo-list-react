import {
  selectHideDone,
  selectTasksEmpty,
  selectTasksDone,
  toggleHideDone,
  setAllDone,
} from "../../tasksSlice";
import { Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

export const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const tasksDone = useSelector(selectTasksDone);
  const tasksEmpty = useSelector(selectTasksEmpty);
  const dispatch = useDispatch();

  return (
    <Content>
      {!tasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button disabled={tasksDone} onClick={() => dispatch(setAllDone())}>
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Content>
  );
};
