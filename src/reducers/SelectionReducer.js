export default function selectionReducer(selected, action) {
  
  switch (action.type) {
    case 'ADD_SELECTION': {
      if (selected.includes(game => game.id === action.payload.id)) {
        return selected;
      }
      return [ ...selected, action.payload];
    } 
    case 'REMOVE_SELECTION': {
      return selected.filter( item => item.id !== action.payload.id )
    } 
    case 'CLEAR_ALL_SELECTIONS': {
      return [];
    }
    default: {
      throw Error (`Selection reducer encountered unknown action type: ${action.type}.`)
    }
  }
}