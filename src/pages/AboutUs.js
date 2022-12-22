import React from "react";
import {Row,Container} from 'react-bootstrap';

function AboutUs() {
    return(
        <Container style={{justifyContent: 'left', textAlign: 'left', fontFamily: 'boldRa',height:'750px', color: 'white'}}>
            <Row style={{marginTop:'50px'}}>
                <p>
                Welcome to our AI image generator! We are a team of developers and designers who are passionate about creating innovative solutions using artificial intelligence.

<br/><br/>Our AI image generator uses state-of-the-art machine learning algorithms to generate unique and creative images based on prompts provided by users. Whether you're a designer looking for inspiration or a business owner seeking to add visual appeal to your marketing materials, our image generator has something to offer.

<br/><br/>In addition to being user-friendly and easy to use, our image generator is also fast and efficient. You can generate images in just a few seconds, and with a variety of sizes to choose from, you can find the perfect fit for your needs.

<br/><br/>We are always striving to improve and evolve our AI image generator, and we welcome feedback from our users. If you have any suggestions or comments, please don't hesitate to reach out to us.

<br/><br/>Thank you for choosing our AI image generator, and we hope you have a great experience using it!


                </p>
            </Row>
        </Container>
    );
}
export default AboutUs;