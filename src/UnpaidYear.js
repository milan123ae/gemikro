import React, {useState, useEffect, Fragment} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios'; 
const UnpaidYear = () => {
  
    const [data, setdata] = useState([]);

    useEffect(() => {
        getData();
    },[])

    const getData = () =>{
        axios.get('https://localhost:44326/api/Contracts/unpaid-current-year')
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
            <th>ContractID</th>
            <th>PartnerID</th>
            <th>Description</th>
            <th>Value</th>
            <th>Status Aktivan</th>
            <th>Datum Aktivan</th>
          </tr>
        </thead>
        <tbody>
        {
            data && data.length > 0 ?
                data.map((item, index) => {
                    return(
                        <tr key={index}>
                        <td>{item.contractId}</td>
                        <td>{item.partnerId}</td>
                        <td>{item.description}</td>
                        <td>{item.value}</td>
                        <td>{item.status_akt}</td>
                        <td>{item.dat_akt}</td>
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

export default UnpaidYear;