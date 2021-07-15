import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'
import Logo from '../../assets/logo-white.png'

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`

const UniIcon = styled(Link)`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

export default function Title() {
  const history = useHistory()

  return (
    // <TitleWrapper onClick={() => history.push('/')}>
    <TitleWrapper >
      <Flex alignItems="center">
        <RowFixed>
          {/* <UniIcon id="link" onClick={() => history.push('/')}> */}
          <UniIcon id="link" >
            {/* <img width={'150px'} src={Logo} alt="logo" /> */}
            <img width={'150px'} src="/Cashcow1.png" alt="logo" />
          </UniIcon>
        </RowFixed>
      </Flex>
    </TitleWrapper>
  )
}
