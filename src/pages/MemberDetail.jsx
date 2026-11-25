import { useParams } from 'react-router'

function MemberDetail() {
  const { id } = useParams()
  return <h1>Учасник: {id}</h1>
}

export default MemberDetail
