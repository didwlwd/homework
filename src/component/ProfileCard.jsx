import React from 'react'
import styled from 'styled-components'

const Inner = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
`

const Info = styled.p`
    text-align: left;
    font-size: 16px;
    font-weight: 700;
`

const Status = (s) =>{
    if(s === true){
        return "🟢 온라인 상태입니다.";
    }else{
        return "🔴 오프라인 상태입니다.";
    }
}

const ProfileCard = ({use}) => {

  return (
    <>
        <Inner>
            <Info>이름 : {use.name}</Info>
            <Info>나이 : {use.age}</Info>
            <Info>현재 상태 : {Status(use.isOnline)}</Info>
        </Inner>    
    </>
  )
}

export default ProfileCard