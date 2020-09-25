import axios from 'axios'

export const searchRecipes = () => {
    return axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s')
}

export const getCategories = () => {
    return axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
}

export const getByCategories = (category) => {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
}

export const getByTitle = (title) => {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`)
} 