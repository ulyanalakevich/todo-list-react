import { 
  selectHideDone, 
  selectTasksEmpty, 
  selectTasksDone, 
  toggleHideDone, 
  setAllDone, 
  fetchExampleTasks,
  selectLoadingTasks,
} from "../../tasksSlice";
import { Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

export const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingTasks);
  return (
    <Button 
    onClick={() => dispatch(fetchExampleTasks())}
    disabled={loading}>
        {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </Button>
  )
};

export const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const tasksDone = useSelector(selectTasksDone);
  const tasksEmpty = useSelector(selectTasksEmpty);
  const dispatch = useDispatch();
  return (
    <Content>
      {!tasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())} >
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={tasksDone}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Content>
  );
}
