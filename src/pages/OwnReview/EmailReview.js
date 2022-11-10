import React from 'react';
import useTitle from '../../hooks/useTitle';

const EmailReview = ({r,handleDelete,handleStatusUpdate }) => {
    useTitle('Review')
    const{review,_id,status}=r
    return (
        <div>
            <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
        <td>{review}</td>
       
        <th>
                <button 
               onClick={() => handleStatusUpdate(_id)}
               
               className="btn btn-outline btn-error">{status ? status : 'Update'}</button>
            </th>
      </tr>
        </div>
    );
};

export default EmailReview;