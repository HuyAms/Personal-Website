import classes from './AboutMe.css';
import React, {Component} from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';


class AboutMe extends Component {


  state = {value: this.props.workExps.length - 1, previous: 0};

  renderDuration() {
    let {workExps} = this.props
    let duration = null
    if (workExps[this.state.value].duration) {
      duration = (<p className={classes.Note}>{workExps[this.state.value].starting} - {workExps[this.state.value].ending}&nbsp;&nbsp;•&nbsp;&nbsp;{workExps[this.state.value].duration}<br/></p>)
    } else {
      duration = (<p className={classes.Note}>{workExps[this.state.value].starting} - {workExps[this.state.value].ending}<br/></p>)
    }
    return duration
  }

  render() {
    let {workExps} = this.props
    let DATES = [];
    let timelineStyles = {background: '#f4f4f4', foreground: '#7b9d6f', outline: '#dfdfdf'};
    if (workExps != null) {
      DATES = workExps.map((workExp) => workExp.date)
    }

    return (
        <section className={classes.AboutContent}>
          <div className={classes.About}>
            <h1>About</h1>
            <p>{this.props.about}</p>
          </div>
          <div className={classes.Experience}>
            {/* Bounding box for the Timeline */}
            <h2>Experience</h2>
            <div className={classes.Timeline}>
              <HorizontalTimeline
                  index={this.state.value}
                  labelWidth={100}
                  styles={timelineStyles}
                  indexClick={(index) => {
                    this.setState({value: index, previous: this.state.value});
                  }}
                  values={DATES}/>
            </div>
            <div className={classes.ExperienceDetail}>
              {/* any arbitrary component can go here */}
              <div className={classes.ExperienceDetail_Image}>
                <img src={workExps[this.state.value].logoUrl} alt=""/>
              </div>
              <div className={classes.ExperienceDetail_Detail}>
                <h3>{workExps[this.state.value].title}</h3>
                <p className={classes.Subtitle}>{workExps[this.state.value].subtitle}</p>
                {this.renderDuration()}
                <p className={classes.Note}>{workExps[this.state.value].location}</p>
              </div>
            </div>
          </div>
          <div className={classes.Languages}>
            <h2>Language</h2>
            <div>
              <h3>Vietnamese</h3>
              <p>Mother tongue</p>
            </div>
            <div>
              <h3>English</h3>
              <p>Professional working proficiency</p>
            </div>
          </div>
        </section>
    );
  }

};

export default AboutMe;
