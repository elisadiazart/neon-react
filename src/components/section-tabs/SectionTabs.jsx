import { useState } from "react"
import { TABSINFO } from "../../constants/tabsInfo"
import Tab from "../tab/Tab"
import Title from "../titles/Titles"
import { StyledTabsSection, StyledTabsContainer, StyledResources, StyledSection } from "./styles"

const SectionTabs = () => {
    const [value, setValue] = useState(0)


    return <StyledTabsSection>
        <Title text='Resources to help you get the most out of Neon'/>
        <StyledTabsContainer>
            {TABSINFO.map((tab, index) => (
                <Tab setValue={setValue} key ={tab.id} index={index} text={tab.tab}/>
            ))}
        </StyledTabsContainer>
        <StyledResources>
                {TABSINFO[value].sections.map(section => (
                    <StyledSection  key={section.key}>{section.text}</StyledSection>
                ))}
        </StyledResources>
    </StyledTabsSection>
}

export default SectionTabs