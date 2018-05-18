import React, {Component} from 'react';
import Aux from '../../hoc/ReactAux/ReactAux';
import {connect} from 'react-redux';
import Projects from '../../components/Projects/Projects';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';

class MyProjects extends Component {

  componentDidMount() {
    if (this.props.projects.length == 0) {
      this.props.onFetchProject();
    }
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
          {projects}
        </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projectReducer.projects,
    loading: state.projectReducer.loading,
    error: state.projectReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProject: () => dispatch(actions.fetchProject()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);