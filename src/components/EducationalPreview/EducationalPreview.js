import React from 'react';
import styles from './EducationalPreview.module.css';

class EducationalPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={styles['edu']}>
      

         <div className={styles['skill-preview']}>
          <h3 className={styles['section-h3']}>SKILLS</h3>
          <div className={styles['skill-box']}>
          {this.props.skills.map((skill, i) => {
            return <p className={styles['skill']} key={i}>{skill.skill}</p>
          })}
          </div>
        </div>

         <div className={styles['education']}>
          <h3 className={styles['section-h3']}>EDUCATION</h3>

          <div className={styles['university']}>
            <h4>{this.props.info[8].value}</h4>
            <h5>{this.props.info[7].value}</h5>
            <p>{this.props.info[9].value}</p>
          </div>

          <div className={styles['school']}>
            <h4>{this.props.info[11].value}</h4>
            <h5>{this.props.info[10].value}</h5>
            <p>{this.props.info[12].value}</p>
          </div>
        </div>

        <div className={styles['projects']}>
          <h3 className={styles['section-h3']}>OTHER PROJECTS</h3>
          <ul >
          {this.props.projects?.map((project, i) => {
            return <div className={styles['project-list']}>
            <li  key={i}>{project.name} - </li>
            <a href={project.link} target='_blank'>Link</a>
            </div> 
          })}
          </ul>
        </div>

        <div className={styles['hobbies']}>
          <h3 className={styles['section-h3']}>SOFT SKILL & HOBBIES</h3>
          <ul >
          {this.props.hobbies?.map((hobby, i) => {
            return <li className={styles['hobby']} key={i}>{hobby.hobby}</li>
          })}
          </ul>
        </div>
    
      </div>
    )
  }
}

export default EducationalPreview;