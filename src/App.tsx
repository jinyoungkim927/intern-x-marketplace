import React,{useState} from 'react'
import Select, { Option } from 'react-button-navbar';
 


    function App(){
        const [current, setCurrent] = useState("opt1")
        const [current2, setCurrent2] = useState("opt1")
        return (
          <React.Fragment>
          <Select currentValue={current} onSelect={(value)=>{setCurrent(value)}} >
            <Option value="opt1">Search</Option>
            <Option value="opt2">Option 2</Option>
            
          </Select>
          <Select currentValue={current2} onSelect={(value)=>{setCurrent2(value)}} >
          <Option value="opt1">Search</Option>
          <Option value="opt2">Option 2</Option>
          
        </Select>
        </React.Fragment>
)

      }
       
      export default App
 
 
