import * as actionTypes from '../actions/actionsTypes';
import { updateObj } from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = (state, action) => {
    const updatedIngrdient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngrdients = updateObj(state.ingredients, updatedIngrdient);
    const updatedState = {
        ingredients: updatedIngrdients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObj(state, updatedState);
}

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    const updatedIngs = updateObj(state.ingredients, updatedIng);
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObj(state, updatedSt);
}

const setIngredients = (state, action) => {
    return updateObj(state, {
        ingredients: action.ingredients,
        totalPrice: 4,
        error: false,
        building: false
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return updateObj(state, { error: true })
        default: return state;
    }
};

export default reducer;