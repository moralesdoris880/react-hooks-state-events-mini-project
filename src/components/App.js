import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react/cjs/react.development";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory,setSelectedCategory] = useState("ALL")

  function handleCategoryChange(category){
    setSelectedCategory(category)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} onCategoryChange={handleCategoryChange}/>
      <NewTaskForm />
      <TaskList TASKS={TASKS} CATEGORIES={CATEGORIES}/>
    </div>
  );
}

export default App;
