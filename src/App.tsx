import { Container, List } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import TaskItem from './components/TaskItem/TaskItem';
import { task } from './data/task';

function App() {

  let tasksElements = task.map(el => <TaskItem key={el.id} {...el} />)

  return (
    <>
      <Header />
      <Container sx={{ mt: '2rem' }}>
        <h1>Proszę napisać poprawną formę przymiotnika😊.</h1>
        <h2>Przykład: Książka jest lepsza niż film.</h2>
        <List>
          {tasksElements}
        </List>
      </Container>
    </>
  );
}

export default App;
