import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';


/**
 * dispatch method is called when we add ingredients
 * @param ingName 
 */
export const addIngredient = (ingName) => {
    return {
        type:actionTypes.ADD_INGREDIENT, 
        ingredientName:ingName
    }
}
/**
 * dispatch method is called when we remove Ingredents
 * @param  ingName 
 */
export const removeIngredient = (ingName) => {
    return {
        type:actionTypes.REMOVE_INGREDIENT, 
        ingredientName:ingName
    }
};

/**
 * setting the ingredients value to store on api success
 * @param  ingredients 
 */
export const setIngredients = (ingredients) => {
    return {
        type : actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

/**
 * called when fetchIngredient Api call is failed
 */
export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

/**
 * get ingredients data on load of Home Page
 */
export const initIngredients = () => {
    return (dispatch) => {
        axios.get( 'https://react-my-burger-aa3a2.firebaseio.com/ingredients.json' )
            .then( response => {
                dispatch(setIngredients(response.data))
            } )
            .catch( error => {
                dispatch(fetchIngredientsFailed())
            } );
    };
};