import React, { useReducer, useState } from 'react'
import './App.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }



//Function Component___
function App() 
{
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const[darkMode, setDarkMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
    
  const handleSubmit = event => {
     event.preventDefault();
     alert('Confirm to save the form ?')

      setSubmitting(true);
      setTimeout(() => {
      setSubmitting(false);
      }, 20000)
  }

  // handleChange
   const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }
   
  
  return (

     //class wrapper
    <div className="wrapper">
      
      {/* title */}
      <h1 ><strong><u>PLEASE SUBMIT THE FORM</u></strong></h1>
      {
        submitting && 
        <div>
            Your form has been submitted
            <br></br>
            <u>Details:</u>
            <ul>
              {Object.entries(formData).map(([name, value]) => (
                <li key={name}><strong>{name}</strong>: {value.toString()}</li>
              ))}
            </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>

        <fieldset>

            {/* Switch to light/dark mode */}
            <div className={darkMode ? "dark-mode" : "light-mode"}>
                <div className="container">
                  <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                  <div className="switch-checkbox">
                    <label className="switch">
                      <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                      <span className="slider round"> </span>
                    </label>
                  </div>
                  <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
                </div>
            </div>

              {/* label for title ------------------------*/}
              <label>
                
                <h3>Title - </h3>
                <input name = "Title" type="text" required
                className="input-text"
                placeholder="Write TITLE here" 
                style={{width: "370px"}}
                onChange={handleChange} value={formData.Title || ''}/>
              </label><br/>

              {/* label for Description------------------------- */}
              <label>
              
                <h3>Description - </h3> 
                <textarea  name = "Description" required placeholder="Write DESCRIPTION here"  
                onChange={handleChange} value={formData.Description || ''}/>
                
              </label><br/>

              {/* label for Due State ---------------------------*/}
              <label>
              <h3>Due Date</h3>
              <DatePicker name="Date" 
                selected={selectedDate}
                onChange={Date => setSelectedDate(Date)}
              />
              </label>
            

              {/* label for Status --------------------------------*/}
              <label>
              <h3>Status -</h3>
              <select name="Status" onChange={handleChange} value={formData.Status|| ''}>
                  <option value="">--Please choose an option--</option>
                  <option value="ToDo">ToDo</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Stalled">Stalled</option>
                  <option value="Done">Done</option>
              </select>
            </label>
        
        </fieldset>
      
        <button type="submit">Submit</button>
         
        <br></br>

      

      </form>
    </div>
  );
}

export default App;
