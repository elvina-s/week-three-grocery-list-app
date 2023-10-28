import {Component} from 'react';

export class GroceryList extends Component {
    state = {
        userInput: "",
        groceryList: []
    }
}

onChangeEvent(e) {
    this.setState({userInput: e});
}

addItem(input) {if(input==="") {alert("Please enter an item")}
else {let listArray = this.state.groceryList;
listArray.push(input);
this.setState({groceryList: listArray, userInput: ""})}
}

crossedWord(e) {
    const li = e.target;
    li.classList.toggle("crossedWord");
}

deleteItem() {
    let listArray = this.state.groceryList;
    listArray.length = 0;
    this.setState({groceryList: listArray})
}

render () {
    return (
        <div>
            <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input type="text" 
                    placeholder="What do you want to do today?" 
                    onChange = {(e) => {this.onChangeEvent(e.target.value)}} 
                    value = {this.state.userInput} />
                </div>
                <div className="container">
                    <button onClick = {() => this.addItem(this.state.userInput)} className="btn">Add</button>
                </div>
                <ul>
                    {this.state.groceryList.map((item, index) => (
                    <li onClick = {this.crossedWord} key={index}>
                        {item}
                    </li>
                    ))}
                </ul>
                <div className="container">
                    <button onClick = {() => this.deleteItem()} className="btn delete">Delete</button>
                </div>
            </form>
        </div>
    );
}