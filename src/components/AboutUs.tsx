import React from "react";
import { Container } from "./styles/Container.styled";
import {
  StyledAboutUs,
  TeamMember,
  Image,
  Description,
  MemberInfo,
  MemberDetail,
  Thumbnail,
} from "./styles/Main.styled";

function AboutUs() {
  return (
    <StyledAboutUs>
      <Container>
        <div className="about-us__wrapper">
          <TeamMember>
            <Image src="media/img_lisa_circle.png" alt="lisa gtd" />
            <Image src="media/img_danielle_circle.png" alt="danielle gtd" />
            <Image src="media/img_brian_circle.png" alt="brian gtd" />
          </TeamMember>
          <h2>How it started</h2>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris n isi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in c
            ulpa qui officia deserunt mollit anim id est laborum.
          </Description>
          <MemberInfo>
            <MemberDetail>
              <Thumbnail src="media/img_lisa_circle.png" alt="lisa gtd" />
              <div className="about-us__team-member__info">
                <h4>Lisa</h4>
                <p>lisa@gtd.co</p>
              </div>
            </MemberDetail>
            <MemberDetail>
              <Thumbnail
                src="media/img_danielle_circle.png"
                alt="danielle gtd"
              />
              <div className="about-us__team-member__info">
                <h4>Danielle</h4>
                <p>danielle@gtd.co</p>
                <p>(123) 456-7890</p>
              </div>
            </MemberDetail>
          </MemberInfo>
        </div>
      </Container>
    </StyledAboutUs>
  );
}

export default AboutUs;
