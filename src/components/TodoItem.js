import { ListGroup, Badge } from 'react-bootstrap';

const TodoItem = (props) => {
    const { text, done, id, markAsDone, deleteTodo } = props;

    return (
        <ListGroup.Item style={{ backgroundColor: 'transparent', border: 'none' }}>
            {
                done ? (
                    <>
                        <span style={{ textDecoration: 'line-through' }}>{text}</span>
                        <span className='float-end'>&#128077;</span>
                    </>
                ) : (
                    <>
                        {text}
                        <Badge onClick={() => markAsDone(id)} pill bg='light' className='float-end'>✔️</Badge>
                    </>
                )
            }
            <Badge
                onClick={() => deleteTodo(id)}
                pill
                bg='light'
                className='float-end'>❌</Badge>
        </ListGroup.Item>
    );
}

export default TodoItem;