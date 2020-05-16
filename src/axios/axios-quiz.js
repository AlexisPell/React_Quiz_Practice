import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-cc432.firebaseio.com/'
})