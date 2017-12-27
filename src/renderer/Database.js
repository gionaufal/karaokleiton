import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyBEohRppzVttX37km6AFLBHN9WtOaGor7g',
  authDomain: 'raessolucoes-com-br-api-project-534237442481.firebaseapp.com',
  databaseURL: 'https://raessolucoes-com-br-api-project-534237442481.firebaseio.com',
  projectId: 'raessolucoes.com.br:api-project-534237442481',
  storageBucket: '',
  messagingSenderId: '534237442481'
}

let firebaseApp = firebase.initializeApp(config)
let db = firebaseApp.database()

export default db
