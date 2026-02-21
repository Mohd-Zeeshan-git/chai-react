import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data ,setData]=useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Mohd-Zeeshan-git')
    //         .then((res) => res.json())
    //         .then((res) => setData(res))
    // } ,[])

  const data=  useLoaderData()
    
  return (
    <div className='text-center m-4'>
          GitHub Follwers:{data.followers}
          <img className='w-full' src={data.avatar_url} alt="Github Picture" height={ 50} width={50} />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response =await fetch('https://api.github.com/users/Mohd-Zeeshan-git')
        // .then((res) => res.json())
    // .then((res) => res)
    return response.json()
}