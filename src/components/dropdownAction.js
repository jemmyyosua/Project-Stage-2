import {Dropdown, ButtonGroup} from 'react-bootstrap'

function Drop(){
    return (
        <Dropdown as={ButtonGroup}> 
        <Dropdown.Toggle className="ms-4" split variant="white" id="dropdown-split-basic" />
      
        <Dropdown.Menu>
          <Dropdown.Item style={{color : 'green', fontWeight: 'bold'}}>Approved</Dropdown.Item>      
          <Dropdown.Item style={{color : 'red', fontWeight: 'bold'}}>Cancel</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      )
}

export default Drop