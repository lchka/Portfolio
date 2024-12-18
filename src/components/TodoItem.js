import { ListGroup, Badge } from 'react-bootstrap';

const TodoItem = (props) => {
  const { text, done, id, markAsDone, deleteTodo } = props;

  return (
    <ListGroup.Item className="rotate-text py-3 mt-1" style={{ backgroundColor: 'transparent', border: 'none' }}>
      {
        done ? (
          <>
            <span style={{ textDecoration: 'line-through' }}>{text}</span>
            <span>&#128077;</span>
          </>
        ) : (
          <>
            {text}
            <Badge
              onClick={() => markAsDone(id)}
              pill
              bg="light"
              className="ms-2"
            >
              ✔️
            </Badge>
          </>
        )
      }
      <Badge
        onClick={() => deleteTodo(id)}
        pill
        bg="light"
        className="ms-2"
      >
        ❌
      </Badge>
    </ListGroup.Item>
  );
};

export default TodoItem;
