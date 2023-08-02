
export const RangeFiltration = ({ title, cb, rangValue }) => {
    return (
        <div className="dropdown px-2">
            <button className="btn btn-secondary dropdown-toggle bg-body text-dark border-1 border-light-subtle shadow"
                type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="light">
                {title}
            </button>
            <ul className="dropdown-menu">
                <div className="pt-2 px-3">
                    <label htmlFor="customRange2" className="form-label">{rangValue}</label>
                    <input type="range" className="" min="1" max="5" step="1" value={rangValue} id={title}
                        onChange={(e) => {
                            cb(e.target.id, e.target.value)
                        }} />
                </div>
            </ul>
        </div>

    )
}
