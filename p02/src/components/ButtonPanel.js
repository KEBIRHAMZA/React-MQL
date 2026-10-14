export default function ButtonPanel({labels}){

    let list = labels.map((label,i) => <button key={i}>{label}</button>)

    return (
        <div className="button-panel">
            {list}
        </div>
    )
}