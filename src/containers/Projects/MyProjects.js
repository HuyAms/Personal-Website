import React, {Component} from 'react';
import Aux from '../../hoc/ReactAux/ReactAux';
import {connect} from 'react-redux';
import Projects from '../../components/Projects/Projects';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import Choices from '../../components/Projects/Choices/Choices';
import {getVisibleProjects} from '../../selectors';

class MyProjects extends Component {

  componentDidMount() {
    if (this.props.projects.length === 0) {
      this.props.onFetchProject();
    }
  }

  choiceHandler = (activeIndex) => {
    this.props.onSetProjectFilter(activeIndex)
  }

  render() {
    let projects = <Spinner/>;

    if (!this.props.loading) {
      if (!this.props.error) {
        projects = <Projects projects={this.props.projects}/>;
      } else {
        projects = <p>Fail to load projects</p>
      }
    }

    return (
        <Aux>
          <div>
            <Choices clicked={this.choiceHandler} activeFilterIndex={this.props.activeFilterIndex}/>
          </div>
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
    activeFilterIndex: state.projectReducer.activeFilterIndex
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProject: () => dispatch(actions.fetchProject()),
    onSetProjectFilter: (filter) => dispatch(actions.setProjectFilter(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);