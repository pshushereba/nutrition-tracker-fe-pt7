import React, { Component } from 'react';
import MenuButton from './MenuButton';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        // Sets menu to hidden by default
        this.state = {
            showMenu: false
        }
        // Set up clickhandler for display
        this.showMenu = this.showMenu.bind(this);
        // Set up clickhandler for hide
        this.closeMenu = this.closeMenu.bind(this);

        this.foodObj={ measureURI: null }

        this.filterDropdown = props.filterDropdown
        }
    
    handleSelect(e) {
      this.props.setFoodObj({...this.props.foodObj, measureURI: e.target.value })
    }
        // Displays menu and adds event listener to close
    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
        // Hides menu and removes event listener
      closeMenu(event) {
        // Check to make sure click does not originate inside the menu
          if (!this.dropdownMenu.contains(event.target))
        {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }
    }
  

      /* Expects a JSON object structured like
       const filterDropdown = 
       {dropName: 'somestringtoshowbeforehtemenudropsdown'
          options: [
            {
              id: 1
              label: 'sometexttodisplaytotheuser',
              value: 'somevaluetopasstotheapp'
            }
        ]} */          

    render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          {this.filterDropdown.dropName}
        </button>
        { this.state.showMenu
        ? (
        // Adds ref to element so clicking a menu item doesn't close it
        <div className="menu" ref={(element) => {
            this.dropdownMenu = element;
          }}>
             {this.filterDropdown.options.map(cv => {
          return <button foodObj = {this.foodObj} data={cv} key={cv.id} value = {cv.value} onClick={e => this.handleSelect(e)}> {cv.label} </button>;
        })}

        </div>
        )
        : (
            null
        )
        }
      </div>
    );
  }
}
export default Dropdown;