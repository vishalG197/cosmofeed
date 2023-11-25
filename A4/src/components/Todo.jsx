import React, { useState, useEffect } from 'react';
import {
  Input,
  Button,
  Container,
  Heading,
  VStack,
  List,
  ListItem,
  CloseButton,
} from '@chakra-ui/react';

const Todo = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Container maxW="container.sm" centerContent>
      <VStack spacing={4} mt={8}>
        <Heading size="xl">Todo List</Heading>
        <Input
          type="text"
          placeholder="Add task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button colorScheme="teal" size="md" onClick={addTask}>
          Add
        </Button>
        <List spacing={3} w="100%">
          {tasks.map((task, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between">
              {task}
              <CloseButton onClick={() => deleteTask(index)} />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Todo;
