import { Content, ToggleButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <Content>
    {tasks.length > 0 && (
      <>
        <ToggleButton onClick={toggleHideDone} >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </ToggleButton>
        <ToggleButton
          disabled={tasks.every(({ done }) => done)}
          onClick={setAllDone}
        >
          Ukończ wszystkie
        </ToggleButton>
      </>
    )}
  </Content>
);

export default Buttons;