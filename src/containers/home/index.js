import React from 'react';
import { addSubmit, addToDo, editToDo, reduceSubmit, removeToDo } from '../../actions';
import { connect } from 'react-redux';

class Home extends React.Component {

    componentDidUpdate (prevProps) {
        const {taskData} = this.props;

        if (prevProps.taskData.isLoading && !taskData.isLoading) {
            console.log('data updated');
        }
    }

    addCount() {
        this.props.addSubmit(2);
    }

    addToDo () {
        const inputVal = this._inputEle.value;
        this._inputEle.value = '';
        if (inputVal!== '') {
            const data = {
                task: inputVal,
                key: Date.now(),
            }
            this.props.addToDo(data);
        }
    }

    removeToDo (key) {
        this.props.removeToDo(key);
    }

    editToDo (data) {
        this.props.editToDo(data);
    }

    render() {
        return (
            <div style={styles.main}>
                <h1>Home</h1>
                <h1>Count: {this.props.countData}</h1>

                <div>
                    <button onClick = {() => this.addCount()}>Add</button>
                    <button onClick = {() => this.props.reduceSubmit()}>Reduce</button>
                </div>

                <input type="text" placeholder = 'Task' ref = {(ele) => (this._inputEle = ele)}/>

                {this.props.taskData.isLoading ? (
                    <p>Loading...</p>
                ): (
                    <button onClick = {() => this.addToDo()}>Add Task</button>
                )}
               

                <ul>
                    {this.props.taskData.data.map((list) => {
                        return (
                            this.props.removeData.isLoading && list.key === this.props.taskData.identify ? (
                                <p>Deleting...</p>
                            ): (
                                <li>
                                    {list.task}
                                    <button onClick = {()=>{this.removeToDo(list.key)}}>
                                        Remove
                                    </button>
                                    <button onClick = {() => {this.editToDo(list)}}>
                                        Edit
                                    </button>
                                </li>
                            )
                        )
                    })}
                </ul>
                
            </div>
        )
    }
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const mapStateToProps = (state) => ({
    countData: state.count,
    taskData: state.task,
    removeData: state.remove,
});

const mapDispatchToProps = {
    addSubmit: addSubmit,
    reduceSubmit: reduceSubmit,
    addToDo: addToDo,
    removeToDo: removeToDo,
    editToDo: editToDo,
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
