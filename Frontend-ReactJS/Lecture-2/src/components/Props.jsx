// import React from 'react'

// const Props = ({name,age}) => {
//   return (
//     <div>
//         <h1>My name is {name} and I am {age} years old</h1>
//     </div>
//   )
// }

// export default Props
import React from 'react'

const Props = (obj) => {
  return (
    <div>
        <h1>My name is {obj.name} and I am {obj.age} years old</h1>
    </div>
  )
}

export default Props