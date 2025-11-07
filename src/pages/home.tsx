import { useLoaderData } from "react-router";

const Home = () => {
  const { products } = useLoaderData(); 


  return (

  <>
    <ul>
      {products.map((p:any) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  </>
  )

 
  
}

export default Home
