import React, { PropTypes } from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Select from './UserForm'
import Filter from './Filter'
import DateFilter from './DateFilter'

function AppContainer (props) {
    return (
       <div>
            <UserForm/>
            <Filter articles = {props.articles}/>
            <DateFilter/>
            <ArticleList articles = {props.articles} />

       </div>
    )
}

AppContainer.propTypes = {

}

export default AppContainer