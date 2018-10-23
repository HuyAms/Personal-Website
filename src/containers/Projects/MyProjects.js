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
import Helmet from 'react-helmet';
import ProjectImgModal from '../../components/Projects/ProjectImgModal/ProjectImgModal';


class MyProjects extends Component {

  state = {
    showModal: false,
    imgSource: ''
  }

  componentDidMount() {
    if (this.props.projects.size === 0) {
      console.log('FETCH PROJECTS');
      this.props.onFetchProject();
    }
  }

  choiceHandler = (activeIndex) => {
    this.props.onSetProjectFilter(activeIndex)
  }

  searchHandler = (event) => {
    this.props.onSetProjectSearch(event.target.value)
  }

  modalHideHandler = () => {
    this.setState({
      showModal: false,
      imgSource: ''
    })
  }

  handlePictureClicked = (imgUrl) => {
    this.setState({
      showModal: true,
      imgSource: imgUrl
    })
  }


  render() {
    let modal = this.state.showModal ? (
        <ProjectImgModal modalClosed={this.modalHideHandler} imgSource={this.state.imgSource}/>
        ) : null

    let projects = <Spinner/>;
    if (!this.props.loading) {
      if (!this.props.error) {
        if (this.props.h2ON32) {
          projects = <H2ON32/>
        } else if (this.props.projects.length === 0) {
          projects = <NoResult/>
        } else {
          projects = <Projects pictureClicked={this.handlePictureClicked} projects={this.props.projects}/>;
        }
      } else {
        projects = <p>Fail to load projects</p>
      }
    }
    return (
        <Aux>
          <Helmet>
            <title>My Projects</title>
            <meta
                name="description"
                content="Huy Trinh - My Projects Page"
            />
          </Helmet>
          <section className={classes.Filter}>
            {modal}
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
    loading: state.projectReducer.get('loading'),
    error: state.projectReducer.get('error'),
    activeFilterIndex: state.projectReducer.get('activeFilterIndex'),
    searchValue: state.projectReducer.get('search'),
    h2ON32: state.projectReducer.get('h2ON32')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProject: () => dispatch(actions.fetchProjectsStart()),
    onSetProjectFilter: (filter) => dispatch(actions.setProjectFilter(filter)),
    onSetProjectSearch: (search) => dispatch(actions.setProjectSearch(search))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);
