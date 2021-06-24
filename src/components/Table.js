import React, { useContext } from 'react'
import TableContext from '../context/tablecontext';

// estrutura da tabela
// tr é linha table row
// td é coluna table division

 function Table() {
   const {data} = useContext(TableContext)
    return (
        <div>{console.log(data)}</div>
    )
}
export default Table;
