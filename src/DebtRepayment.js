import React, {useState, useEffect, Fragment} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios'; 
const DebtRepayment = () => {
  
    const [data, setdata] = useState([]);

    useEffect(() => {
        getData();
    },[])

    const getData = () =>{
        axios.get('https://localhost:44326/api/Contracts/debt-repayment-rata')
        .then((result)=>{
            setdata(result.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return(
        <Table >
        <thead>
          <tr>
            <th>Total Debt</th>
            <th>Debt Repayment</th>
          </tr>
        </thead>
        <tbody>
        

             <td>{data.totalDebt}</td>
             <td>{data.repaymentPercentage}</td>


        </tbody>
      </Table>
    )

}

export default DebtRepayment;