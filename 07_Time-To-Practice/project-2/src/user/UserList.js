import User from "./User";
import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (

    <Card className={styles.users}>
      <ul>
        {props.userList.map((user, index) => (
          <User key={index} name={user.name} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
