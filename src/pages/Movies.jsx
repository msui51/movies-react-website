import React from 'react'
import { useParams } from 'react-router-dom'
function Movies() {
  const params = useParams();
  console.log(params);
  return (
    <div>Movies</div>
  )
}

export default Movies