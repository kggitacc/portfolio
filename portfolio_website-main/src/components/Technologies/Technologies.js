import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies and Skills</SectionTitle>
    <SectionText>
      Programming Languages, Technologies, Skills and Frameworks
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
           - C# <br />
           - Python<br/>
           - Javascript<br/>
           - Java<br/>
           - Solidity<br/>
           - PHP<br/>
           - HTML<br/>
           - CSS<br/>
           - Various Javascript Frameworks
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tech and Other stuff </ListTitle>
          <ListParagraph>
            - Git <br />
           - Figma<br/>
           - AGILE<br/>
           - SCRUM<br/>
           - DSDM<br/>
           - I also might be able to fix your printer

            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
           - User research<br/>
           - UI design<br/>
           - Report Writing<br/>
           - Diagramming<br/>
           - Translating User Needs into Technical Specs

          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
