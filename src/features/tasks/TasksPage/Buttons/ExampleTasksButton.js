import { 
    fetchExampleTasks,
    selectLoadingTasks,
  } from "../../tasksSlice";
  import { Button } from "./styled";
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