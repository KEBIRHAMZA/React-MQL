export default function TextField({label, size}){ // Destructuring
    return (
        <div className="text-field">
            <label htmlFor={label}>{label} : </label>
            <input type="text" size={size} id={label}/>
        </div>
    )
}