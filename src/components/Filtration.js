export const Filtration = ({ filter, items = [], title }) => {
    // console.log('from filtration',items);
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle bg-body text-dark border-1 border-light-subtle shadow"
                type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="light">
                {title}
            </button>
            <ul className="dropdown-menu">
                {items.map(item => {
                    return (
                        <li className=' dropdown-item' key={item}>
                            <input type="checkbox" className="form-check-input" name="btncheck" id={item} autoComplete="off"
                                onChange={(e) => { filter(title, e.target.id) }} aria-label={item}
                            />
                            <label className="form-check-label px-2" htmlFor={item}>{item}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
