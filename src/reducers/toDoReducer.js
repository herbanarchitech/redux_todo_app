

const initialState ={

    toDoList: ['study', 'finish project','enoy your Laboour Day weekend']
}

//reducer takes two parameters first =stat, second = action
//default value needs to be assign a value 
function toDoReducer(state = initialState, action) {

const toDoItems = state.toDoList.slice()
}

export default toDoReducer;