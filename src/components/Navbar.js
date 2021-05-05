import React from 'react';
import {} from "./NavbarElements";
import {
    NavbarContainer,
    NavbarWrapper,
    Logo,
    Nav,
    NavLink,
    Search,
    SearchWrap,
    Input,
    ButtonContainer,
    Button,
} from "./NavbarElements";

function Navbar(props) {
    return (
        <NavbarContainer>
            <NavbarWrapper>
                <Logo/>
                <Nav>
                    <NavLink to={"/"}>HOME</NavLink>
                    <NavLink to={"/"}>MARKET</NavLink>
                    <NavLink to={"/"}>TRADE</NavLink>
                    <NavLink to={"/"}>PRICING</NavLink>
                    <NavLink to={"/"}>DOWNLOAD</NavLink>
                    <NavLink to={"/"}>HELP</NavLink>
                </Nav>
                <Search>
                    <SearchWrap>
                        <Input type="text" placeholder="Symbol/Name"/>
                    </SearchWrap>
                </Search>
                <ButtonContainer>
                    <Button css={`color: #037cff; background: #fff;`}>SIGN UP</Button>
                    <Button>LOG IN</Button>
                </ButtonContainer>
            </NavbarWrapper>
        </NavbarContainer>
    );
}

export default Navbar;