import React from 'react'

export const Description = ({ img, children, modal }) => {
  // const my = modal ? "my-1" : "my-5";
  return (
    // <div className={`container card ${my} px-0`} style={{ maxWidth: "960px", border: 0}}>
    <div className={`container card px-0 mt-5`} style={{ maxWidth: "960px", border: 0}}>
      <div className="row">
        <div className={modal? "col-md-6 py-0" : "col-md-4 py-5"}>
          <img src={`assets/content/${img}.jpg`} className="img-fluid shadow h-100 w-100" alt={img}
            style={{objectFit: 'cover',}}
          />
        </div>
        <div className={modal? "col-md-6 px-0" : "col-md-8 px-0"}>
          <div className="card-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
