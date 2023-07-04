function Todo({todo,index,remove}) {
    function handle() {
        remove(index);
    }
    return (
        <div className="todo" key={index} id={index} onClick={handle}>
        {todo.text} (-)
      </div>
    )
}