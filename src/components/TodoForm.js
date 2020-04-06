import React from "react";

class ListForm extends React.Component {
    constructor() {
        super();
        this.state = {
            itemName: ""
        };
    }

    handleChanges = event => {
        event.preventDefault();
        this.setState({itemName: event.target.value})
    }

    handleClick = event => {
        event.preventDefault();
        
    }

    render() {
        return (
            <form>
                <input 
                    type="text"
                    name="task"
                    onChange={this.handleChanges}
                />
            </form>
        )
    }
}

export default ListForm;