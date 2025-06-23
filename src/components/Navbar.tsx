import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img
        className="logo"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATsAAACgCAMAAABE1DvBAAAAsVBMVEX///8AAACrq6v/uBympqbu7u77+/vHx8fp6enDw8OGhoaXl5fy8vL/tAD19fVMTEw2Nja0tLQlJSW7u7vPz8/f39+hoaH/tgDW1taxsbH/4azc3NxiYmL/9+X/+u7/x1hsbGwyMjKMjIz/0n//6sT/vzr/3JtFRUUfHx96enr/w07/7s3/uyf/4Kn/57z/8tj/znL/1I4SEhJaWlr/wkL/1of/0Hn/x2D/25dnZ2cZGRnZc4PsAAAJqUlEQVR4nO2caWOqOhCGERHRinVBkVqX2no8Vdva2uX0/v8fdsGNzJCEQINazPtNGEbyNNtMxmqakpKSkpKSkpKSkpKSkpKSkpKSkpKS0gk1eP5YrVb3NwO2ycP9aD4f3T8c76V+hRYj13YD2e78mW5ys/QtisWiay+fjvtyZ63hyA6o7GS/U/recG6TFsPjv+R56qVIkAvkRrrecApM3KKCt9HCLmLZGN47pvt+klc9Nw2j6Hw2L8DmNWJj/zvR656VRi6FXRH0qyGNrhq12gOt2/n9ilxLnyg2tlpstREVXbG4jLOZn+yVz0UDerfz+9UiNKIbnO6lz0Q3THavoRHVxr74Ce+eulIEGoVGdHac6O0yxJruwIRHZ3e6lz6yhoMBdYy9i7CbxtzPsQZPX9Ol39j3VTTMF2JHG9ju/RFbcCq9fNn7SN+13Q/U+1bM+Y7YHVOiNrAO51TDexvQsd0bcP8Pa50F/WoeJZz/7d1gGo1EV6TBC3OP8sy1sl+0nGtAG5H2iDShrgNFvIziqCz/ERkthsfwaLFqYPMBXUEz+89R23EK0VMkqOmMjod3NItw9NtTvE68PH18POVqFDPjraJLxAS0RbRo31DcTe2Npvje87u/krv+DcZJx28Ui5yP5pMwo4xaPGJ3Gi4eHhaRLfYq7JAr2lO/Uc/Mbocyl5F9CgMdXV/kIVBe4LFDVbxOPrgkPdelDFim0CKS5NEzFqfbgSxJoI/ibgvthx6fSZJLwyX0u8xFZoq6BoQdBFkPn1fz5XI5X90kazyeGCInbL9SvOmOnrkcDpN3mk98+JhkqjxbMSPVLTtJu7EvzO5Ljt/TKoadpDTIHPnNBztGsLVnJyljjnNYbi52KYyD1z07Sd/yD68VuYh0mdmljWRlzHGmxs3HCRAPnbyMORy0eQks2MeHfhulFW+iUqBcbI35g3Yq8WvC6j3XzU0eCu+9iG4nM+wc7KpGXfsrH5NdIGrGfdNKyQc1i8+p604/c3VyxtriqXIIAd3TqyFyEa9nLho8hU5Q0Zywm6tpKVMN5uC3ExdRRiJPi1UxOMdygyOuV7VKJNTw5en19fUf77diSuei4UtOYrOja3MIPldLUozqlXYoc3vtw95GaCnivg7hzZH7puensqEfZJQ3lw5nTCmiF8Kb3i3JftkzU4VorL5ld6gNcj9jHo7IJNkZlvS3PS9F2RF1a4lz05fOjkjeJD4TuXR2RKo/8W9sL57dIeOa/Mjs4tntf93nJj+Ku3h22iKoqXLtafLQQrHThv9G8680JyKKXXopduml2KWXYpdeil16nYxdvd6veN3uVSCjbZkx1o63Me3yLev1zsEpzTQlO9Pq9BzH6XVKwOMJ2JX6zeq4UUC67TK/vFedEYZvY68WtakFTmdxTqPsnGao3ubLws+VrWenbRykVzqhNw47wkuz6UnK7VWqs/9wCw8t7dGe0COYC29VSK9cvf4r5DTCrkQ2X6/7PZfE4XOyfHCkiW40D5DY7PrgGaMig1yf1cKdxnX8hNOiW3ZDk06M09sQdISdBRrpG9YAO7MCwW0v7/8aTHZ19EDMhCSmakwzCwU0CU2YhusDkStxp8nY6RWdgi6Ex2TXhubEMM+UXaFN2t9yDBt7ePHsCl46diztOLHYoRH74/VcmF2BmBx46AqFlinMbv8XkcRO93js6rCzNuWgE2JX6IhaX4uzK/SlstsOQwY7NGIjU3iW7Bo740qsZVec3UwqO73NZodGbF8SOjF2+9lJwNISZlcwpLILTOnsTGAmZ3uSgN2bKYpkLM6u8AN2RmS53XQnKjs4Yj0aBRnsZt/jcXUyeVzjZgbTa/0NXmtMnF6v+Y0sSxF2s9ut08g646VjZxjNitMrtxG+MoMdGrESD7wBu9lhy1hC27i1f82Dl4ydaf8OXO5idg2N5XSWhp2hO7utUK0JbrTp7OCu2KAGSjLYXRM3ECn/zwU7YzhtmCCku2Oz07QmdGqlYEc0Hk5kukllB+IQiZMdj50GB2NFK4HPVcKyB+70Oey0MTBtJ2YH43sHcKGy6wB3npRYLJ4dJDLRyrjLhAI9ss1jZwEnjz9kB2yNGoWdabCfzpCdBrIl3xAItDQQEDY7bYa8/IgdvFWisAPuDclVZRx2YHy14EcDWIK8yZrLDnzfnfkzdnV8C7ODaywIzLNlp5O3CrAbwjkXjMSGyWMHnL6VsmWHFhNZsZgAOxiBwaACLvV1Ms/pA+Gwg06tTNmV4BorJ/Ekxg4uDpBdtQsEcsQWjx1Mi3ayZKeXATr5JbQp2fF0NuyAZCWeLpEd5TRKsRNiJy/xdHnsshiyF8Mug6XiYthtQrbzZ8fd352MXQajNiW7vy2WGgY3JjsmOwcmAqSP2pRxhaOZDAVPctg5x2PnxxWg40kftRx2bQ47fg6Rww5mP7ONySxUSSHxqGIjDjt4lAGzRzrXKYcduNWqZZxH6WU6ajnsQEZzpj2SH2+5TjnsxtBpxuw0D/Y8uaOWzQ7m2B/R4Rf3uInNzgRObjNnB71JzuCx2YFkcKGLZvkqy2EgNjsdOc2aHTzqkXtMxmZXgqexHa0GPhd4f0Imuzr04WTPDhfeyRy1LHbWHWjlnRmpgbpKzs5CBaNa9uzQciF1hwzYtbpNxyr5cnCpxUSjVPJMKlagUq/seF73alK9bdytI+z+Mp1Wj8FOgyfgMketWD3KtoqMWUFMysHs+E6zZ1dCcZq8USvG7ntjq8cbbqthxdhtumj27MC/c9BlrrVi7HY7kmh9+0/YdY7EDp2WyRu1Quz2Jexx9euJ2G3XmiOwQ3UV8tZaEXZhENGONxZlt9aOxg5V4EkbtQLs1oS5F2styG6mHZFdDXU8SaM2nh0MXWNLjsXYrfcFSUdhBwumpI3aWHZd9IB1zbe3RNiFTo/DDucE5OyQY9iNKVVXbcaPojbaxLkx7L4Jp2S8aUTZ1dGAgyWv4uzwciHlyJHHrjFh1KuVb2m/3mus9wkyHru7CagL6RiEgq8zPeJCZYs3FJrmyVtNE18Ar0x+j9GVMuPBmq6rx/F1q/W31ZqNq01e7Uutd/XoW/4XnFDMrsePE69PcIYJzu7B6XfVizitlw7azkJmeGHXyYgLuG4zcotpWyuRSsyJpmgu4HDqECvihAIqmgsQd/qLxMkbpxcnb5wnKXbppdill2KXXopdeil26aXYpZdil16KXXopduml2KWXYpde8HfbkpwCdneSnJ6fQGEszhGnFSj7mUhyeoaynIPk/X6DcCq18khJSUlJSUlJSUlJSUlJSUlJSSkn+h85c9jlZ9DPngAAAABJRU5ErkJggg=="
        alt="logo"
      />
      <ul>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jokes"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Jokes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
