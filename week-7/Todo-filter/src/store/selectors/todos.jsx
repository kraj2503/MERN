
export const filteredTodos = selector({
    key:"filteredTodos",
    get : (props)=>{
        const todos = props.get(todosAtom)
        const filter= props.get(filterAtom)
        return todos.filter(x=>x.title.includes(filter)||x.description.includes("filter"))
    }
});