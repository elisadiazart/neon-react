import { BRANDS } from "../../constants/brands"
import Brand from "../brand/Brand"
import {StyledBrandsContainer, } from "./styles"

const SectionLogos = () => {
    return <StyledBrandsContainer >
        {BRANDS.map(brand => (
				<Brand key={brand.id} src={brand.src} alt={brand.alt}/>
			))}
    </StyledBrandsContainer>
}


export default SectionLogos