import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <Content>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())} >
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={tasks.every(({ done }) => done)}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Content>
  );
}

export default Buttons;