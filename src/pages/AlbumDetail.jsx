import { useParams } from 'react-router'

function AlbumDetail() {
  const { id } = useParams()
  return <h1>Альбом: {id}</h1>
}

export default AlbumDetail
