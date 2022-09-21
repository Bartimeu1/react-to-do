import React, {useState, useEffect} from 'react'

import FoldersMenu from './components/FoldersMenu/FoldersMenu';
import TasksMenu from './components/TasksMenu/TasksMenu';

function App() {
  // Available Colors
  const availableColors = [
    {color: '#C9D1D3', id: 1},
    {color: '#42B883', id: 2},
    {color: '#64C4ED', id: 3},
    {color: '#FFBBCC', id: 4},
    {color: '#B6E6BD', id: 5},
    {color: '#C355F5', id: 6},
    {color: '#09011A', id: 7},
    {color: '#FF6464', id: 8}
  ];
  // Folders Data
  const [foldersData, setFoldersData] = useState([
    {
      name: 'Фронтенд',
      color: '#64C4ED',
      id: 1
    },
    {
      name: 'Фильмы',
      color: '#FFBBCC',
      id: 2
    },
    {
      name: 'Книги',
      color: '#B6E6BD',
      id: 3
    },
  ]);
  function addFolder(name, color) {
    const newFolder = {
      name: name,
      color: color,
      id: foldersData.length+1
    }
    setFoldersData(prevState => [...prevState, newFolder])
  }
  // Current Folder
  const [currentFolderId, setCurrentFolderId] = useState(1);
  function changeCurrentFolder(id) {
    setCurrentFolderId(id);
  };
  const [currentFolderTitle, setCurrentFolderTitle] = useState('Фронтенд');
  const [currentFolderColor, setCurrentFolderColor] = useState('#64C4ED');
  useEffect(() => {
    for (let obj of foldersData) {
      if (obj.id === currentFolderId) {
        setCurrentFolderTitle(obj.name);
        setCurrentFolderColor(obj.color);
      }
    }
  },[currentFolderId]);
  // Choice All Items
  const [сhoiceAll, setChoiceAll] = useState(false);
  function choiceAllFolders() {
    setChoiceAll(true);
  }
  function unChoiceAllFolders() {
    setChoiceAll(false);
  }

  return (
    <div className="wrapper">
       <FoldersMenu 
       foldersData={foldersData} 
       currentFolderId={currentFolderId}
       changeCurrentFolder={changeCurrentFolder}
       availableColors={availableColors}
       addFolder={addFolder}
       choiceAllFolders={choiceAllFolders}
       unChoiceAllFolders={unChoiceAllFolders}
       ></FoldersMenu>
       <TasksMenu 
       title={currentFolderTitle} 
       color={currentFolderColor} 
       currentFolderId={currentFolderId}
       сhoiceAll={сhoiceAll}
       ></TasksMenu>
    </div>
  );
}

export default App;
