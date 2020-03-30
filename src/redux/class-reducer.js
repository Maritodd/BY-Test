import {articlesAPI} from "../components/api/api";

const SET_USER_ARTICLES = 'SET_USER_ARTICLES';
const ADD_ARTICLES = 'ADD_ARTICLES';

let initialState = {

    articles: [
        {id: 1, title: 'Burger', content: "1.Bread, 2.pork, 3.salad, 4.ketchup"},
    ],
    food: null,
};

const classReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLES:
            let newArticle = {
                id: 4,
                title: action.newPostText,
                content: action.newPostText
            };
            return {
                ...state,
                articles: [...state.articles, newArticle],
                newPostText: ''
            };
        case SET_USER_ARTICLES:
            return {...state, food: action.food};
        default:
            return state;
    }
};

export const addArticles = (newPostText) => ({type: ADD_ARTICLES, newPostText});
export const setUsersArticles = (food) => ({type: SET_USER_ARTICLES, food});

export const getUsersArticles = (userId) => {
    return (dispatch) => {
        articlesAPI.getArticles(userId)
            .then(response => {
                dispatch(setUsersArticles(response.data));
            });
    }
};

export default classReducer;
