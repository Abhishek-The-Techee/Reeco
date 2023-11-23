import {
  NavContainer,
  LeftContainer,
  ReecoLogo,
  NavOptionsContainer,
  NavOption,
  RightContainer,
  CartImg,
  ProfileBtn,
} from "./style";

const Navbar = () => {
  return (
    <NavContainer>
      <LeftContainer>
        <ReecoLogo
          src="https://res.cloudinary.com/dnebrhaqh/image/upload/v1700743893/61d55f72e02791825a9a1232_reeco-logo-white_m6fyuw_g3tuhs.svg"
          alt="logo"
        />
        <NavOptionsContainer>
          <NavOption>Store</NavOption>
          <NavOption>Orders</NavOption>
          <NavOption>Analytics</NavOption>
        </NavOptionsContainer>
      </LeftContainer>
      <RightContainer>
        <CartImg
          src="https://res.cloudinary.com/dnebrhaqh/image/upload/v1700745275/cart_b8qr7w.png"
          alt="cart"
        />
        <NavOption>Hello, James</NavOption>
        <ProfileBtn
          src="https://res.cloudinary.com/dnebrhaqh/image/upload/v1700746228/down_arrow_crzn8j.png"
          alt="profileBtn"
        />
      </RightContainer>
    </NavContainer>
  );
};
export default Navbar;
