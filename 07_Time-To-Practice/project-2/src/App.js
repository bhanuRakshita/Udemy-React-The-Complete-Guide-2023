import React, {useState} from 'react';
import AddUser from './user/AddUser';
import UserList from './user/UserList';
import Card from './UI/Card';

function App() {

  const [userList, setUserList ]= useState("");
    
  function addUserMethod (user) {

    setUserList((prev)=>{
      return[...prev, user]
    });

  }

  return (
    <div>
        <AddUser onAddUser={addUserMethod}/>
        {userList&&<UserList userList={userList} />}
    </div>
  );
}

export default App;
