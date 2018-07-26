import classes from './Search.css';
import React, {Component} from 'react';


class Search extends Component {

    render() {
        return (
            <div className={classes.InputContainer}>
                <input className={classes.InputElement} type='text' placeholder='Search'
                       value={this.props.searchValue} onChange={this.props.onChanged}/>
            </div>
        )
    }
}

export default Search;