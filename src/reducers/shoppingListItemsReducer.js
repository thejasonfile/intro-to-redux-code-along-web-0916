export default function shoppingListItemsReducer(state = [], action)
  {
    switch(action.type) {
      case 'GET_SHOPPING_LIST_ITEMS':
        return action.payload
      default:
        return state;
    }
  }