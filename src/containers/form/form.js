import React from 'react';
import styles from './form.module.css';
import PersonalForm from '../../components/personalForm/personalForm';
import EducationalForm from '../../components/educationalForm/educationalForm';
import PracticalForm from '../../components/practicalForm/practicalForm';
import AppLabel from '../../components/AppLabel/AppLabel';
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={this.props.mobile.formIsOpen ? styles['form'] : styles['notDisplayed']}>
          <AppLabel 
            autoFill={this.props.autoFill}
            state={this.props.state}
            printDocument={this.props.printDocument} />
          <PersonalForm 
            handleInfoChange={this.props.handleInfoChange} 
            info={this.props.info} />
          <EducationalForm 
            handleInfoChange={this.props.handleInfoChange} 
            info={this.props.info} />
          <PracticalForm 
            experience={this.props.experience} 
            skills={this.props.skills} 
            hobbies={this.props.hobbies} 
            projects={this.props.projects} 


            addWork={this.props.addWork} 
            removeWork={this.props.removeWork} 
            handleMouse={this.props.handleMouse} 
            handleWorkChange={this.props.handleWorkChange}
            handleMouseSkills={this.props.handleMouseSkills}
            handleMouseHobbies={this.props.handleMouseHobbies}

            addSkill={this.props.addSkill}
            addHobby={this.props.addHobby}
            addProject={this.props.addProject}


            removeSkill={this.props.removeSkill}
            removeHobby={this.props.removeHobby}
            removeProject={this.props.removeProject}


            handleSkillChange={this.props.handleSkillChange} 
            handleHobbyChange={this.props.handleHobbyChange} 
            handleProjectChange={this.props.handleProjectChange} 


            />
      </div>
    )
  }
}

export default Form;