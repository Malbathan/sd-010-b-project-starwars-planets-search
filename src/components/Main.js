import React, { useEffect , userState} from 'react';
import Table from './Table';
import getplanets from '../services/data';

 function Main() {
     const [data, setData] = useState([])
     
    useEffect(() => {
        const dataSet = async () => {
            const res = await getplanets();
            setData(res)
        }
     }, [])
  
    return (
        <Table />
    )

 }

export default Main;
