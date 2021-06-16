import React from 'react'

function User(props) {
    const componentDidMount = e => {
        console.log(props.location.state.employee);
    }
    return (

        <div>
            {
                props.records.map((data) => {

                    
                        <div>
                            {data.username}

                        </div>
                    
                })
            }

            {/* {props.records.map((item,id) => (
               <h1 key={id}>
               { item}

               </h1>
            ))} */}
            {/* <h1>
                {props.cods}</h1> */}
        </div>
    )
}

export default User
