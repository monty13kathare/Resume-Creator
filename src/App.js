import React from 'react';
import Form from './containers/form/form.js';
import Preview from './containers/preview/preview.js';
import styles from './App.module.css';
import uniqid from "uniqid";
import autofilledState from './utils/autofill.js';
import MobileToggle from './components/MobileToggle/MobileToggle.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      // State for all of the user's personal and educational information
      info: [
        {
          name: "firstName",
          value: "",
          id: uniqid()
        },
        {
          name: "lastName",
          value: "",
          id: uniqid()
        },
        {
          name: "address",
          value: "",
          id: uniqid()
        },
        {
          name: "website",
          value: "",
          id: uniqid()
        },
        {
          name: "email",
          value: "",
          id: uniqid()
        },
        {
          name: "phone",
          value: "",
          id: uniqid()
        },
        {
          name: "bio",
          value: "",
          id: uniqid()
        },
        {
          name: "universityName",
          value: "",
          id: uniqid()
        },
        {
          name: "universityDegree",
          value: "",
          id: uniqid()
        },
        {
          name: "universityDate",
          value: "",
          id: uniqid()
        },
        {
          name: "schoolName",
          value: "",
          id: uniqid()
        },
        {
          name: "schoolDegree",
          value: "",
          id: uniqid()
        },
        {
          name: "schoolDate",
          value: "",
          id: uniqid()
        },
        {
          name: "github",
          value: "",
          id: uniqid()
        },
      ],

      // State Array to hold Objects resembling work experience of the user
      experience: [
        { 
          isHovered: false,
          id: uniqid(),
          company: "",
          position: "",
          task: "",
          start: "",
          end: ""
        }
      ],

      // A new Object that's getting added towards the experience state array on every click of the "add" button
      newExperience: { 
        isHovered: false,
        id: uniqid(),
        company: "",
        position: "",
        task: "",
        start: "",
        end: ""
      },

      // State Array to hold Objects resembling skills of the user
      skills: [
        { 
          isHovered: false,
          id: uniqid(),
          skill: ""
        },
        { 
          isHovered: false,
          id: uniqid(),
          skill: ""
        },
        { 
          isHovered: false,
          id: uniqid(),
          skill: ""
        }
      ],

      // A new Object that's getting added towards the skills state array on every click of the "add" button
      newSkill: {
        isHovered: false,
        id: uniqid(),
        skill: ""
      },

       // State Array to hold Objects resembling hobbies of the user
      hobbies: [
        { 
          isHovered: false,
          id: uniqid(),
          hobby: ""
        },
        { 
          isHovered: false,
          id: uniqid(),
          hobby: ""
        },
        { 
          isHovered: false,
          id: uniqid(),
          hobby: ""
        }
      ],

      // A new Object that's getting added towards the hobbies state array on every click of the "add" button
      newHobby: {
        isHovered: false,
        id: uniqid(),
        hobby: ""
      },

      projects: [
        { 
          isHovered: false,
          id: uniqid(),
          name: "",
          link: ""
        },
        { 
          isHovered: false,
          id: uniqid(),
          name: "",
          link: ""
        },
       
       
       
      ],

      newProject: {
       isHovered: false,
      id: uniqid(),
      name: "",
      link: "",
      },


      // Object to hold a boolean value, determining if the form (or the preview, if formIsOpen: false) is supposed to be rendered in mobile view.
      mobile: {
        formIsOpen: true
      }
    }

    // Binding "this" to the 'App' Component for all of the component's functionality
    this.addWork = this.addWork.bind(this);
    this.removeWork = this.removeWork.bind(this);
    this.handleMouse = this.handleMouse.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleMouseSkills = this.handleMouseSkills.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.addHobby = this.addHobby.bind(this);
    this.addProject = this.addProject.bind(this);

    this.removeSkill = this.removeSkill.bind(this);
    this.removeHobby = this.removeHobby.bind(this);
    this.removeProject = this.removeProject.bind(this);

    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleHobbyChange = this.handleHobbyChange.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);


    this.handleInfoChange = this.handleInfoChange.bind(this);
    this.autoFill = this.autoFill.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.printDocument = this.printDocument.bind(this);
  }

  // Toggling between the "form" and "preview" in mobile view
  handleToggle(e) {
    let newMobileState = this.state.mobile;
    newMobileState.formIsOpen = !newMobileState.formIsOpen;

    this.setState({
      ...this.state,
      mobile: newMobileState
    })
  }

  // Adding a work object to the experience state array
  addWork(e) {
    e.preventDefault();

    this.setState({
      experience: [
        ...this.state.experience, this.state.newExperience
      ],
      newExperience: {
        ...this.state.newExperience, id: uniqid()
      }
    });
  }

    // Adding a skill object to the skills state array
  addSkill(e) {
    e.preventDefault();

    this.setState({
      skills: [
        ...this.state.skills, this.state.newSkill
      ],
      newSkill: {
        ...this.state.newSkill, id: uniqid()
      }
    });
  }

  // Adding a hobby object to the hobbies state array
  addHobby(e) {
    e.preventDefault();

    this.setState({
      hobbies: [
        ...this.state.hobbies, this.state.newHobby
      ],
      newHobby: {
        ...this.state.newHobby, id: uniqid()
      }
    });
  }

   // Adding a hobby object to the projects state array
   addProject(e) {
    e.preventDefault();

    this.setState({
      projects: [
        ...this.state.projects, this.state.newProject
      ],
      newProject: {
        ...this.state.newProject, id: uniqid()
      }
    });
  }

    // Removing a work object from the experience state array
  removeWork(index) {
    const list = [...this.state.experience];
    list.splice(index, 1);
    
    this.setState({
      ...this.state, experience: list
    });
  }

  // Removing a skill object from the skills state array
  removeSkill(index) {
    const list = [...this.state.skills];
    list.splice(index, 1);
    
    this.setState({
      ...this.state, skills: list
    });
  }

 // Removing a hobby object from the hobbies state array
  removeHobby(index) {
    const list = [...this.state.hobbies];
    list.splice(index, 1);
    
    this.setState({
      ...this.state, hobbies: list
    });
  }

  // Removing a project object from the projects state array
  removeProject(index) {
    const list = [...this.state.projects];
    list.splice(index, 1);
    
    this.setState({
      ...this.state, projects: list
    });
  }

  // Recolouring SVGs (with the "fill:" property) on hover
  handleMouse(e) {
    const index = this.state.experience.findIndex(work => work.id === e.target.id);
    const experience = this.state.experience.map((work, i) => {
      if (i === index) {
        work.isHovered = !work.isHovered;
        return work;
      } else {
        return work;
      }
    });

    this.setState({
      ...this.state, experience: experience
    });
  }

    // Recolouring SVGs (with the "fill:" property) on hover
  handleMouseSkills(e) {
    const index = this.state.skills.findIndex(skill => skill.id === e.target.id);
    const skills = this.state.skills.map((skill, i) => {
      if (i === index) {
        skill.isHovered = !skill.isHovered;
        return skill;
      } else {
        return skill;
      }
    });

    this.setState({
      ...this.state, skills: skills
    });
  }
// Recolouring SVGs (with the "fill:" property) on hover
  // handleMouseHobbies(e) {
  //   const index = this.state?.hobbies?.findIndex(hobby => hobby.id === e.target.id);
  //   const hobbies = this.state?.hobbies?.map((hobby, i) => {
  //     if (i === index) {
  //       hobby.isHovered = !hobby.isHovered;
  //       return hobby;
  //     } else {
  //       return hobby;
  //     }
  //   });

  //   this.setState({
  //     ...this.state, hobbies: hobbies
  //   });
  // }

  // Handling edits for input fields that control the experience state
  handleWorkChange(e) {
    const index = this.state.experience.findIndex(work => work.id === e.target.id);
    const experience = this.state.experience.map((work, i) => {
      if (i === index) {
        work[e.target.name] = e.target.value;
        return work
      } else {
        return work;
      }
    });

    this.setState({
      ...this.state, experience: experience
    });
  }

  // Handling edits for input fields that control the skills state
  handleSkillChange(e) {
    const index = this.state.skills.findIndex(skill => skill.id === e.target.id);
    const skills = this.state.skills.map((skill, i) => {
      if (i === index) {
        skill[e.target.name] = e.target.value;
        return skill;
      } else {
        return skill;
      }
    });

    this.setState({
      ...this.state, skills: skills
    });
  }

   // Handling edits for input fields that control the hobbies state
   handleHobbyChange(e) {
    const index = this.state.hobbies.findIndex(hobby => hobby.id === e.target.id);
    const hobbies = this.state.hobbies.map((hobby, i) => {
      if (i === index) {
        hobby[e.target.name] = e.target.value;
        return hobby;
      } else {
        return hobby;
      }
    });

    this.setState({
      ...this.state, hobbies: hobbies
    });
  }

    // Handling edits for input fields that control the hobbies state
    handleProjectChange(e) {
      const index = this.state.projects?.findIndex(project => project.id === e.target.id);
      const projects = this.state.projects?.map((project, i) => {
        if (i === index) {
          project[e.target.name] = e.target.value;
          project[e.target.link] = e.target.value;
          return project;
        } else {
          return project;
        }
      });
  
      this.setState({
        ...this.state, projects: projects
      });
    }

  // Handling edits for input fields that control info state
  handleInfoChange(e) {
    const newInfo = this.state.info.map((information, i) => {
      if (information.name === e.target.name) {
        information.value = e.target.value;
        return information;
      } else {
        return information;
      }
    });

    this.setState({
      ...this.state, info: newInfo
    });
  }

  // Changing values of all keys in the state that keep user data, automatically rendering an autofilled CV due to
  // the fact that the CV takes key-value pairs from the state as values.
  autoFill(e) {
    this.setState({
      ...this.state, 
      info: autofilledState.info,
      experience: autofilledState.experience,
      skills: autofilledState.skills,
      hobbies: autofilledState.hobbies,
      projects: autofilledState.projects,

    });
  }

  // Save Preview CV in a PDF file
  // printDocument() {
  //   const input = document.getElementById('preview');
  //   html2canvas(input)
  //     .then((canvas) => {
  //       const imgData = canvas.toDataURL('image/png');
  //       const pdf = new jsPDF();

  //       // Make img fit to PDF proportions
  //       const imgProps= pdf.getImageProperties(imgData);
  //       const pdfWidth = pdf.internal.pageSize.getWidth();
  //       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //       pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

  //       // Download PDF to user
  //       pdf.save("resume.pdf");
  //     })
  //   ;
  // }


    // Save Preview CV in a PDF file
    printDocument = async () => {
      const input = document.getElementById('preview');
      if (!input) return;
  
      try {
        // Convert the preview section into a canvas
        const canvas = await html2canvas(input, {
          scale: 2, // Increase the canvas scale for better image quality
          useCORS: true, // Allows cross-origin images to be included
          logging: false, // Disables logging for cleaner console output
          scrollX: 0,
          scrollY: 0,
        });
  
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: 'a4',
          compress: true, // Compresses the PDF to reduce size
        });
  
        // Calculate image size to fit the PDF proportions
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
        // Add the image to the PDF and ensure it fits the page size
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  
        // Trigger download of the PDF
        pdf.save('resume.pdf');
      } catch (error) {
        console.error('Failed to generate PDF:', error);
      }
    };
  


  // App's render function
  render() {
    return (
      <div className={styles['body']}>
        <div className={styles['App']}>
          <Form
            printDocument={this.printDocument}
            state={this.state}
            mobile={this.state.mobile}
            autoFill={this.autoFill}
            info={this.state.info}
            experience={this.state.experience} 
            skills={this.state.skills} 
            hobbies={this.state.hobbies}
            projects={this.state.projects}

            addWork={this.addWork} 
            removeWork={this.removeWork}
            handleMouse={this.handleMouse}
            handleWorkChange={this.handleWorkChange}
            handleMouseSkills={this.handleMouseSkills}
            handleMouseHobbies={this.handleMouseHobbies}
            addSkill={this.addSkill}
            addHobby={this.addHobby}
            addProject={this.addProject}

            removeSkill={this.removeSkill}
            removeHobby={this.removeHobby}
            removeProject={this.removeProject}

            handleSkillChange={this.handleSkillChange}
            handleHobbyChange={this.handleHobbyChange}
            handleProjectChange={this.handleProjectChange}


            handleInfoChange={this.handleInfoChange} />
          <Preview 
            mobile={this.state.mobile}
            info={this.state.info}
            experience={this.state.experience}
            skills={this.state.skills}
            hobbies={this.state.hobbies}
            projects={this.state.projects}


             />
            
        </div>
        <MobileToggle 
            handleToggle={this.handleToggle}
            printDocument={this.printDocument}
            mobile={this.state.mobile} />
      </div>
    )
  }
}

export default App;
