import React from 'react'
import './Folder.scss';

export default function Folder({name, color, id, currentFolderId, changeCurrentFolder, unChoiceAllFolders}) {
  return (
    <div 
    className={currentFolderId === id ? 'folder--current' : 'folder'} 
    onClick={() => (changeCurrentFolder(id), unChoiceAllFolders())}
    >
        <div className="folder__color" style={{background: color}}></div>
        <h3 className="folder__name">{name}</h3>
    </div>
  )
}
