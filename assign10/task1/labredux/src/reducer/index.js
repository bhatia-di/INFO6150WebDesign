export const reducer = (state=0, action)=>{
    switch(action.type){
        case 'Reset' : return 0;
        case 'Decrement' : return state--;
        case 'Increment' : return state++;
        default: return state;

    }
}

export default reducer;
