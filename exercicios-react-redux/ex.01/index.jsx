import React from "react"
import ReactDOM from "react-dom"
import { combineReducers, createStore } from "redux"
import { Provider } from "react-redux"
import Field from "./field.jsx"
import fieldReducer from "./fieldReducer.js"

const reducers = combineReducers({
    field: fieldReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste'/>
    </Provider>
, document.getElementById('app'))