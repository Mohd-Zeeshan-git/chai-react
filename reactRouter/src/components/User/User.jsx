import { useParams } from 'react-router-dom'

function User() {
   const {id} =useParams()// useParams is a hook that is used to get the parameters from the url it returns an object with the parameters as keys and their values as values
  return (
    <div className='text-3xl bg-gray-600 text-white  text-center px-4 mr-12 ml-12 m-2 '>
      User: {id}
    </div>
  )
}

export default User
