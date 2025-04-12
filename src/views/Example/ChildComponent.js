import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showJob: false
    }

    handleShowJob = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    //re-render
    render() {
        console.log('check props:', this.props)
        // let name = this.props.name;
        // let age = this.props.age;

        let { job } = this.props;
        let { showJob } = this.state;
        let a = '';
        let check = showJob === true ? 'showJob = true' : 'showJob = false';
        console.log('check state showJob: ', check)
        return (
            <>
                {showJob === false ?
                    <div><button onClick={() => this.handleShowJob()}>Show</button></div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                a = job.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                        </div>
                                    )
                                })
                            }
                            {console.log('check map: ', a)}
                        </div>
                        <div><button onClick={() => this.handleShowJob()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}


// const ChildComponent = (props) => {
//     console.log('check props: ', props)
//     let { job } = props;
//     let a = '';
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     a = job.map((item, index) => {
//                         if (item.salary >= 600) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//                 {console.log('check map: ', a)}
//             </div>
//         </>
//     )
// }
export default ChildComponent;