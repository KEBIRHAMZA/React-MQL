export default function DataGrid({title , data}){

    let keys = [];
    if(data.length > 0){
        keys = Object.keys(data[0]);
    }

    let tHead = keys.map((k) => <th key={k}>{k.toUpperCase()}</th>);
    let tBody = data.map((obj, index) => <tr key={index}>
        {keys.map((k) => <td key={k}>{obj[k]}</td>)}
    </tr>)

    return (
        <div className="data-grid">
            <h1>{title}</h1>
            <table>
                <thead>
                    <tr>
                        {tHead}
                    </tr>
                </thead>
                <tbody>
                    {tBody}
                </tbody>
            </table>
        </div>
    )
}