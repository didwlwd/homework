import React from 'react'
import ProfileCard from './ProfileCard'
import styled from 'styled-components'

const Wrapsd = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
` 

const ProfileList = ({users}) => {
  return (
    <>
    <h2>현재 유저들의 상태를 알려드립니다.</h2>
    <Wrapsd>
        {users.map((u, index) => <ProfileCard key={index} use={u}/>)}
    </Wrapsd>
    </>

  )
}

export default ProfileList