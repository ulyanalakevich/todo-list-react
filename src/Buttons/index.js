import { Content, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <Content>
    {tasks.length > 0 && (
      <>
        <Button onClick={toggleHideDone} >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          disabled={tasks.every(({ done }) => done)}
          onClick={setAllDone}
        >
          Ukończ wszystkie
        </Button>
      </>
    )}
  </Content>
);

export default Buttons;