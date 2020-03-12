import React, { Component } from 'react';

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
    }
    
    handleSelect(e) {
      this.props.setFoodObj({...this.props.foodObj, measureURI: e.value })
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
  
    render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Serving Size
        </button>
        { this.state.showMenu
        ? (
        // Adds ref to element so clicking a menu item doesn't close it
        <div className="menu" ref={(element) => {
            this.dropdownMenu = element;
          }}>
          <button value="http://www.edamam.com/ontologies/edamam.owl#Measure_ounce" onClick={e => this.handleSelect(e)}> Ounce </button>
          <button value="http://www.edamam.com/ontologies/edamam.owl#Measure_gram" onClick={e => this.handleSelect(e)}> Gram </button>
          <button value="http://www.edamam.com/ontologies/edamam.owl#Measure_pound" onClick={e => this.handleSelect(e)}> Pound </button>
          <button value="http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram" onClick={e => this.handleSelect(e)}> Kilo </button>
          <button value="http://www.edamam.com/ontologies/edamam.owl#Measure_fluid_ounce" onClick={e => this.handleSelect(e)}> Fluid Ounce </button>
          <button value="http://www.edamam.com/ontologies/edamam.owl#Measure_pint" onClick={e => this.handleSelect(e)}> Pint </button>
          <button value="http://www.edamam.com/ontologies/edamam.owl#Measure_liter" onClick={e => this.handleSelect(e)}> Liter </button>
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