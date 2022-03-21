import {Dropdown, ButtonGroup} from 'react-bootstrap'

function Drop(){
    return (
        <Dropdown as={ButtonGroup}> 
        <Dropdown.Toggle className="" style={{color : 'black'}} align="start" split variant="outline-light"/>
      
        <Dropdown.Menu>
          <Dropdown.Item style={{color : 'green', fontWeight: 'bold'}}>Approved <hr/></Dropdown.Item>      
          <Dropdown.Item style={{color : 'red', fontWeight: 'bold'}}>Cancel</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      )
}

export default Drop