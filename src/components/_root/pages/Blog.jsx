import { useParams } from "react-router-dom"

export default function Blog() {
    const { id } = useParams()

    console.log(id);
    

  return (
    <div>Blog</div>
  )
}
