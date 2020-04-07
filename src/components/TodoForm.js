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


    submitItem = event => {
        event.preventDefault();
        this.setState({itemName: ''});
        this.props.addItem(event, this.state.itemName);
    }

    render() {
        console.log("rendering...")
        return (
            <form onSubmit={this.submitItem}>
                <input 
                    type="text"
                    name="task"
                    value={this.state.itemName}
                    onChange={this.handleChanges}
                />
                <button type="submit">Add Task</button>
            </form>
            
        )
    }
}

export default ListForm;