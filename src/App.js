import * as React from 'react';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/')
      .then(employees => employees.json())
      .then(employees => {
        console.log(employees)
        this.setState({
          employees: employees
        })

      })
      .catch(err => console.log(err))
  }
  render() {
    return (

      <div className="App container">
        <div  class="media col-10 mb-5 p-3 directory-entry">
        <h1>Sogeti! Employee Directory</h1></div>
        <div className="row">

          {this.state.employees.map((employee, index) => {
            return (

              <div class="media col-14 mb-5 p-5 directory-entry">
                <img src={employee.image} class="mr-3" alt="..." />
                
                <div class="media-body">
                  <h5 class="mt-0">{employee.name}</h5>
                  <h6 class="mt-0">{employee.Unit}</h6>
                 

                </div>
              </div>
              
            )
          })
          }
        </div>
      </div>
      
    );
  }

}
export default App;
