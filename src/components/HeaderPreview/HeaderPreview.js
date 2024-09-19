import React from 'react';
import styles from './HeaderPreview.module.css';

class HeaderPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const firstName = this.props.info[0].value;
    const capitalizedFirstName = firstName.toUpperCase();

    const lastName = this.props.info[1].value;
    const capitalizedLastName = lastName.toUpperCase();

    return (
      <div>
        <div className={styles['header']}>
          <h1 className={styles['userName']}>
          {capitalizedFirstName} {capitalizedLastName}
          </h1>
          <h3 className={styles['currentPos']}>{this.props.experience[0].position}</h3>
          <div className={styles['otherInfo']}>
            <p>
            <i class="material-symbols-outlined">call</i> {this.props.info[5].value}</p>
            <p>
            <i class="material-symbols-outlined">alternate_email</i> {this.props.info[4].value}
            </p>
           <p>
           <i class="material-symbols-outlined">link</i>
           <a href={this.props.info[3].value} target='_blank' >{this.props.info[3].value}</a>
           </p>
          </div>
          <p>
            <i class="material-symbols-outlined">location_on</i> {this.props.info[2].value}
            </p>
        </div>
       
      </div>
    )
  }
}

export default HeaderPreview;