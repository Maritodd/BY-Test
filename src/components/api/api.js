import * as axios from "axios";
import {getAuthUserData, getToken} from "../../redux/auth-reducer";
import {setTokenToDefaults} from "../../lib/auth";



const instance = axios.create({
    baseURL: `http://localhost:1337/`,

    // headers: {
    //     'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTU4NTM0MDExNSwiZXhwIjoxNTg3OTMyMTE1fQ.qrVLmitOiypxPeymcxJqEI-ZZqOueTMGcp3ShIwBFNo`
    // }

});

export const articlesAPI = {
    getArticles(userId) {
        return instance.get(`articles/` + userId , {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTgzNTkyNjE1LCJleHAiOjE1ODYxODQ2MTV9.TENy5kQdsp46HsELDbj862kPGodPAtFYi8HLhWpm3o4'
            }
        });
    },
};


export const loginAPI = {
    login(identifier, password) {
        return instance.post(`auth/local`, {identifier, password});
    },

    register(username, email, password) {
      return instance.post(`auth/local/register`, {username, email, password});
    }

};

