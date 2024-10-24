import React, {useState, useEffect, Fragment} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios'; 
const TotalPaidInvoices = () => {
  
    const [data, setdata] = useState([]);

    useEffect(() => {
        getData();
    },[])

    const getData = () =>{
        axios.get('https://localhost:44326/api/Contracts/total-paid-invoices-by-adviser')
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
            <th>Id Savetnik</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
        {
            data && data.length > 0 ?
                data.map((item, index) => {
                    return(
                        <tr key={index}>
                        <td>{item.id_svet}</td>
                        <td>{item.totalAmount}</td>
                      </tr>
                    )
                })
                :
                'Loading...'

        }
        </tbody>
      </Table>
    )

}

export default TotalPaidInvoices;