import React, {Component} from 'react';
import Aux from '../../hoc/ReactAux/ReactAux';
import {connect} from 'react-redux';
import Projects from '../../components/Projects/Projects';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import Choices from '../../components/Projects/Choices/Choices';
import Search from '../../components/UI/Search/Search';
import {getVisibleProjects} from '../../selectors';
import classes from './MyProjects.css';
import NoResult from '../../components/Projects/NoResult/NoResult';
import H2ON32 from '../../components/Projects/H2ON32/H2ON32';

class MyProjects extends Component {

  componentDidMount() {
    if (this.props.projects.length === 0) {
      this.props.onFetchProject();
    }
  }

  choiceHandler = (activeIndex) => {
    this.props.onSetProjectFilter(activeIndex)
  }

  searchHandler = (event) => {
    this.props.onSetProjectSearch(event.target.value)
  }

  render() {
    let projects = <Spinner/>;
    console.log(this.props.h2ON32)
    if (!this.props.loading) {
      if (!this.props.error) {
        if (this.props.h2ON32) {
          projects = <H2ON32/>
        } else if (this.props.projects.length === 0) {
          projects = <NoResult/>
        } else {
          projects = <Projects projects={this.props.projects}/>;
        }
      } else {
        projects = <p>Fail to load projects</p>
      }
    }

    return (
        <Aux>
          <section className={classes.Filter}>
            <Choices clicked={this.choiceHandler} numberOfProjects={this.props.projects.length}
                     activeFilterIndex={this.props.activeFilterIndex}/>
            <Search onChanged={this.searchHandler} searchValue={this.props.searchValue}/>
          </section>
          {projects}
        </Aux>
    );
  }
}


const mapStateToProps = state => {
  return {
    projects: getVisibleProjects(state),
    loading: state.projectReducer.loading,
    error: state.projectReducer.error,
    activeFilterIndex: state.projectReducer.activeFilterIndex,
    searchValue: state.projectReducer.search,
    h2ON32: state.projectReducer.h2ON32
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProject: () => dispatch(actions.fetchProject()),
    onSetProjectFilter: (filter) => dispatch(actions.setProjectFilter(filter)),
    onSetProjectSearch: (search) => dispatch(actions.setProjectSearch(search))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);