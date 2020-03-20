

export default function Dropdown () {
  return (
    <div>Dropdown</div>
  )
}

// import React, { useState } from 'react';


//           function Dropdown(props) {
              
//                   // Sets menu to hidden by default
//                   const [showMenu, setShowMenu] = useState(false)
          
//                   //Set Food Object to State
//                   const [foodObj, setFoodObj] = useState({...props.foodObj})
          
//                   // Load Menu from Config Object
//                   const [filterDropdown, setFilterDropdown] = useState({...props.filterDropdown})
          
//                   const dropdownMenu = document.getElementsByClassName('dropdownMenu')
          
//                   const field = props.filterDropdown.field
          
          
//                   // Displays menu and adds event listener to close
//               function toggleMenu(event) {
//                   event.preventDefault();
//                   setShowMenu(true);
//                   document.addEventListener('click', closeMenu);
//                   };
//                   // Hides menu and removes event listener
//               function closeMenu(event) {
//                   // Check to make sure click does not originate inside the menu
//                     if (!dropdownMenu.contains(event.target))
//                   {
//                   setShowMenu(false), () => {
//                     document.removeEventListener('click', closeMenu);
//                   };
//                 }
//               }
          
//               const handleSelect = (e) => {
                  
//               setFoodObj({...props.foodObj, measureURI : e.value })
//               }
            
          
//                 /* Expects a JSON object structured like
//                  const filterDropdown = 
//                  {dropName: 'somestringtoshowbeforehtemenudropsdown'
//                  field: 'somefieldfortheapicall'
//                     options: [
//                       {
//                         id: 1
//                         label: 'sometexttodisplaytotheuser',
//                         value: 'somevaluetopasstotheapp'
//                       }
//                   ]} */          
          
//               return (
//                 <div>
//                   <button onClick={toggleMenu}>
                      
//                     {filterDropdown.dropName}
//                   </button>
//                   { showMenu
//                   ? (
//                   // Adds ref to element so clicking a menu item doesn't close it
//                   <div className="dropDownMenu" ref={(element) => {
//                       dropdownMenu = element;
//                     }}>
//                        {filterDropdown.options.map(cv => {
//                     return <button foodObj = {foodObj} data={cv} key={cv.id} value = {cv.value} onClick={e => handleSelect(e)}> {cv.label} </button>;
                    
//                   },
//                   console.log(foodObj),
//                   )}
          
//                   </div>
//                   )
//                   : (
//                       null
//                   )
//                   }
//                 </div>
//               );
//             }
          
//           export default Dropdown;