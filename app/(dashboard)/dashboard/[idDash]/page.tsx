import React from 'react'

const PageDash = ({ params }: { params: { idDash: string } }) => {
  console.log(params.idDash , "asdf")
  if (!params.idDash ) {
    return <div>Post not found</div>;
  }
  return (
    <div>page dash details</div>
  )
}

export default PageDash