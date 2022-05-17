import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Keeley Gadke
        </SectionTitle>
        <SectionText>
        Software Engineering Student
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;