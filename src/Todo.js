
const Todo = (props) => {
    //props sinh ra để giải quyết vấn đề truyền dữ liệu qua lại giữa các components (từ cha xuống con)
    // const list = props.list_todo;
    const { list_todo, handleDeleteTodos } = props;

    const handleDelete = (id) => {
        handleDeleteTodos(id);
    }
    return (
        <div className='todo-container'>
            {list_todo && list_todo.length > 0 &&
                list_todo.map((item, index) => {
                    return (
                        <li className='todo-child' key={item.id}>
                            {item.title}
                            &nbsp;&nbsp; <span onClick={() => handleDelete(item.id)}> X</span>
                        </li>
                    )

                })
            }
        </div>

    )
}
export default Todo;