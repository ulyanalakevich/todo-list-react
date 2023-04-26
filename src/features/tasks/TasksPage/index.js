import Form from "./Form";
import TaskList from "./TaskList";
import { Buttons } from "./Buttons"
import { ExampleTasksButton } from "./Buttons/ExampleTasksButton";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";

function TasksPage() {
  
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <ExampleTasksButton />
        }
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={
          <Buttons />
        }
      />
    </Container>
  );
}

export default TasksPage;
