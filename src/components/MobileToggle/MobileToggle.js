import React from 'react';
import styles from './MobileToggle.module.css';

class MobileToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    console.log('this.props.printDocument', this.props)
    return (
      <div className={styles['toggleBox']}>
         <button type="button" className={styles['toggle']} onClick={this.props.handleToggle}>
        <img src={this.props.mobile.formIsOpen ? require("../../icons/preview.png") : require("../../icons/editor.png")} alt="Mobile View Toggle"></img>
        {this.props.mobile.formIsOpen ? "Preview" : "Editor"}
      </button>
      {
        !this.props.mobile.formIsOpen && (
<button className={styles['toggle']} type="button" onClick={this.props.printDocument}>
        <img src={require("../../icons/save.png")} className={styles['download']} alt="Download"></img>
        <span className={styles['buttonText']}>Save</span>
    </button>
        )
      }
        
      </div>
     
    )
  }
}

export default MobileToggle;