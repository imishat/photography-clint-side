import React from 'react';
import useTitle from '../../hooks/useTitle';

const EmailReview = ({r,handleDelete}) => {
    useTitle('Review')
    const{review,_id,}=r
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
               
                className="btn btn-ghost btn-xs">E</button>
            </th>
      </tr>
        </div>
    );
};

export default EmailReview;