import { List, Item, Content, Button, StyledLink } from "./styled"
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { selectHideDone, toggleTaskDone, removeTask, selectTasksByQuery } from "../../tasksSlice";
import searchQueryParamName from "../queryParameters/searchQueryParamName";
import { toTask } from "../../../../routes";
import { useQueryParameter } from "../queryParameters/index"


const TaskList = () => {
   const query = (useQueryParameter(searchQueryParamName));

   const tasks = useSelector(state => selectTasksByQuery(state, query));
   const hideDone = useSelector(selectHideDone);
   const dispatch = useDispatch();
   
   return (
      <List>
         {tasks.map(task => (
            <Item
               key={task.id}
               hidden={task.done && hideDone}
            >
               <Button
                  toggleDone
                  onClick={() => dispatch(toggleTaskDone(task.id))}>
                  {task.done ? "✓" : ""}
               </Button>
               <Content done={task.done}>
                  <StyledLink to={toTask({id: task.id})}>
                     {task.content}
                     </StyledLink>
               </Content>
               <Button
                  remove
                  onClick={() => dispatch(removeTask(task.id))}>
                  🗑
               </Button>
            </Item>
         ))
         }
      </List >
   );
};
export default TaskList;