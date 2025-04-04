import React from 'react';

class MyComponent extends React.Component {
    // object => state: key: value
    state = {
        name: 'DUNG',
        facebook: 'Dungpham'
    }
    //JSX => return block of code
    //fragment => <></> => <React.Fragment></React.Fragment>

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            <>
                <div className="MyName">
                    {console.log('My name is: ', this.state.name)}
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} /> My name is {this.state.name}
                </div>
                <div>
                    My facebook usernam is {this.state['facebook']}
                </div>
            </>
        )
    }
}

export default MyComponent;