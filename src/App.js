
import { useState } from 'react';
import './App.css';

function App() {

  //const [firstName, setFirstName] = useState("");
  //const [lastName, setLastname] = useState("");


  // function changeFirstnameHandler(event){
  //   //console.log("First Name");
  //   //console.log(event.target.value);//input value
  //   //onsole.log(event.target);//element show
  //   setFirstName(event.target.value);
  // }
  
  // function changeLastnameHandler(event){
  //   //console.log("Last Name");
  //   //console.log(event.target.value);//input value
  //   setLastname(event.target.value);
  // }

  const [formData, setFormData] = useState({firstName: "", lastName:"", email:"",comments:"", isVisible:false, mode:"", favCar:""});


 // console.log(formData);

  function changeHandler(event){
     const {name,value,checked,type}= event.target

      setFormData(prevFormData => {
        return{
          ...prevFormData,
          //[event.target.name ]: event.target.value //property access form from we use [] (syntex )//update from data
          [name]: type === "checkbox" ? checked : value//handle checkbox and other values
        }
        
      });
  }

  function submitHandler(event) {
      event.preventDefault();
      //print
      console.log("Printing All Data");
      console.log(formData);
  }


  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div className="header">
        <h1>Form Structure</h1>
        </div>
        
        <input 
        type="text" 
        placeholder="Enter your First Name" 
        name="firstName"
        onChange={changeHandler}
        value = {formData.firstName}
        />

        <br/>
        <br/>

        <input 
        type="text" 
        placeholder="Enter your Last Name" 
        name="lastName"
        onChange={changeHandler}
        value = {formData.lastName}
        />
 
        <br/>
        <br/>

        <input 
        type="email" 
        placeholder="Enter your Email" 
        name="email"
        onChange={changeHandler}
        value = {formData.email}
        />

        <br/>
        <br/>

        <textarea 
        placeholder="Enter your comments here" 
        name="comments"
        onChange={changeHandler}
        value = {formData.comments}
        />

         <br/>
        <br/>

        <input 
        type="checkbox" 
        name="isVisible"
        id="isVisible"
        onChange={changeHandler}
        checked={formData.isVisible}//initial value 
        />
        <label htmlFor='isVisible'>Am I Visible?</label>

        <br/>
        <br/>
      <fieldset>
        <legend>MODE</legend>
        <input 
              type="radio"
              onChange={changeHandler}
              name="mode"
              value="Online-Mode"
              id="Online-Mode"
              checked={formData.mode === "Online-Mode"}
              />
            <label htmlFor='Online-Mode'>Online Mode</label>

            <input 
              type="radio"
              onChange={changeHandler}
              name="mode"
              value="Offline-Mode" 
              id="Offline-Mode"
              checked={formData.mode === "Offline-Mode"}
              />
            <label htmlFor='Offline-Mode'>Offline Mode</label>
      </fieldset>

      <label htmlFor='favCar'>Select your fav car </label>
      <select
      onChange={changeHandler}
      name= "favCar"
      id="favCar"
      value={formData.favCar}
      >
         <option value="">Select One</option>
        <option value="MG Hactor">MG Hactor</option>
        <option value="Jeep Compass">Jeep Compass</option>
        <option value="Thar">Thar</option>
        <option value="Scoda">Scoda</option>
        <option value="Taigun">Taigun</option>
      </select>

      <br/>
      <br/>

    <button>Submit</button>

      </form>
    </div>
  );
} 

export default App;
