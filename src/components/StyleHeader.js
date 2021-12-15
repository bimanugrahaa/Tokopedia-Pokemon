import styled from "@emotion/styled"

export const Logo = styled.img`
    height: 100px;
    width: 100%;
`
export const Nav = styled.nav`
    overflow: hidden;
    background-color: #FFDE00;
    height: 100%;
    width: 100%
    text-align: center;

    div {
        text-align: center;
    }
    
    a {
        @media (min-width: 600px) {
            float: none;
            display: inline-block;
        }

        @media (max-width: 600px) {
            float: none;
            display: block;
      }
    }
`

export const NavItem = styled.a`
    padding: 12px 12px 12px 12px;
    margin: 0px 5px;
    color: black;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    border-bottom: 1px solid #3B4CCA;

    &:hover {
        background-color: rgba(59, 76, 202, 0.9);
        color: white;
    }
`