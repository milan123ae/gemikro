import React, {useState, useEffect, Fragment} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios'; 
const ActivePartners = () => {
  
    const [data, setdata] = useState([]);

    useEffect(() => {
        getData();
    },[])

    const getData = () =>{
        axios.get('https://localhost:44326/api/Contracts/active-partners')
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
            <th>PartnerID</th>
            <th>Name</th>
            <th>Adrress</th>
            <th>Status Saradnje</th>
          </tr>
        </thead>
        <tbody>
        {
            data && data.length > 0 ?
                data.map((item, index) => {
                    return(
                        <tr key={index}>
                        <td>{item.partnerId}</td>
                        <td>{item.name}</td>
                        <td>{item.adress}</td>
                        <td>{item.statusSaradnje}</td>
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

export default ActivePartners;