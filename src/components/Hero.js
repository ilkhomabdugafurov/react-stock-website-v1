import React from 'react';
import {Section, Content, Left, Title, Desc, Button} from "./HeroElements";

function Hero(props) {
    return (
        <Section>
            <Content>
                <Left>
                    <Title>
                        Get 2 FREE Stocks <br/> valued up to $1850!
                    </Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam deleniti id ipsum
                        necessitatibus ratione repellat sint!
                    </Desc>
                    <Button href="#">
                        <span>Claim your free stocks now</span>
                    </Button>
                </Left>
            </Content>
        </Section>
    );
}

export default Hero;