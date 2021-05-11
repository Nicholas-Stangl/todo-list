import React from 'react';

const Task = (props) => {
    let style = {
        textDecoration: "none"
    };

    const { task, index, list, setList } = props;
    const deleteTask = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index);
        });
    };

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };
    return (
        <div className="container bg-secondary my-4">
            <div className="container">
                <h4 style={task.isComplete?{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}:
                {textDecoration: 'none'}}>{task.name}</h4>
                <label htmlFor="checkbox">Completed?</label> &nbsp;
            <input onChange={onChange} type="checkbox" name="" checked={task.isComplete} /> &nbsp; &nbsp;
            <button className="btn btn-sm btn-danger" onClick={deleteTask}> Delete</button>
            </div>
        </div >
    );
};
export default Task;