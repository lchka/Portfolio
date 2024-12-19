import { ListGroup, Badge } from 'react-bootstrap';

const TodoItem = (props) => {
  const { text, done, id, markAsDone, deleteTodo } = props;

  const handleMarkAsDoneClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the link
    markAsDone(id);
  };

  const handleDeleteClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the link
    deleteTodo(id);
  };

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
            <a className='text-decoration-none' href='#' onClick={handleMarkAsDoneClick}>
              <Badge
                pill
                bg="light"
                className="ms-2"
              >
                ✔️
              </Badge>
            </a>
          </>
        )
      }
      <a href="#" onClick={handleDeleteClick}>
        <Badge
          pill
          bg="light"
          className="ms-2"
        >
          ❌
        </Badge>
      </a>
    </ListGroup.Item>
  );
};

export default TodoItem;