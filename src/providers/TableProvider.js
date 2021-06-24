import React, {useState, useEffect} from 'react'
import TableContext from '../context/tablecontext'
import getplanets from '../services/data';


const TableProvider = ({children}) => {
    const [data, setData] = useState([])
     
    useEffect(() => {
        const dataSet = async () => {
            const res = await getplanets();
            setData(res)
        }
        dataSet()
     }, [])
    const contextOfTable = {
        setData,
        data,
    }
    return (
        <TableContext.Provider value={contextOfTable}>
            {children}
        </TableContext.Provider>
    )
}

export default TableProvider
