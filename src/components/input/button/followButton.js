import React from 'react'
import Button from '@material-ui/core/Button'

export default function FollowButton() {
  return(
    <div>
      <Button variant="contained" style={{color:"white", backgroundColor:"rgb(118, 86, 242)", borderColor:"rgb(118, 86, 242)", height:30, fontSize:10, fontWeight:600}}>
        Follow
      </Button>
    </div>
  )
}