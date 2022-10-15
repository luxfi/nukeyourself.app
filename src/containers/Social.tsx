import React from "react"
import styled from "styled-components"
import { rem } from "polished"

import SvgIcon from "../components/SvgIcon"
import Dropdown from "../components/Dropdown"

/**
 * Types
 */
interface Props {}
interface LinkProps {
  href?: string
  target?: string
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.gray};

  span {
    margin: 0 ${rem(5)};
  }

  a {
    color: inherit;

    &:hover {
      color: ${(props) => props.theme.colors.white};
    }
  }

  @media all and (max-width: 915px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`

const SocialLink = styled.a<LinkProps>`
  margin: 0 ${rem(5)};
`

const Social: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Dropdown title={<SvgIcon iconKey="twitter" />} data={[{ name: "Lux", url: "https://twitter.com/luxdefi" }]} />
      <SocialLink href="https://www.instagram.com/luxdefi/" target="_blank" rel="noreferrer">
        <SvgIcon iconKey="instagram" />
      </SocialLink>
      {/* <SocialLink href="https://github.com/stakefish/crypto-laser-eyes" target="_blank" rel="noreferrer">
        <SvgIcon iconKey="github" />
      </SocialLink> */}
    </Wrapper>
  )
}

export default Social
