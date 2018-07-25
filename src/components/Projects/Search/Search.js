import classes from './Search.css';
import React, {Component} from 'react';
import Input from '../../UI/Input/Input';


class Search extends Component {

    render() {
        let elementConfig = {
            type: 'text',
            placeholder: 'Search'
        }
        return (
            <div className={classes.InputContainer}>
                <input className={classes.InputElement} type='text' placeholder='Search'
                       value={this.props.searchValue} onChange={this.props.onChanged}/>
            </div>
        )
    }
}

export default Search;