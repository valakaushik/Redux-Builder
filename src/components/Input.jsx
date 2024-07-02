import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Add, Delete, Edit } from './action';

function Input() {
    const [input, setInput] = useState("");
    let dispatch = useDispatch();

    const myData = useSelector(state => state)

    const handleForm = (e) => {
        e.preventDefault();
        dispatch(Add(input));
        e.target.reset();
    }

    const handleDelete = (i) => {
        dispatch(Delete(i));
    }

    const handleEdit = (index, newValue) => {
        dispatch(Edit(index, newValue));
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <div className='d-flex justify-content-center mt-4 '>
                    <input type="text" className='me-5' placeholder='Enter task name' onChange={(e) => { setInput(e.target.value) }} />
                    <button className='btn btn-primary'>Add Todo</button>
                </div>
            </form>

            {myData.map((item, index) => (
                <>
                    <ul key={index} >
                        <li>{item}</li>
                        <button onClick={handleEdit} >Edit</button>
                        <button onClick={handleDelete} >Delete</button>
                    </ul>
                </>
            ))}
        </>
    )
}

export default Input    