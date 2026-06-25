import styled from "styled-components";

import { useUser } from "../features/Authentication/useUser";

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 7rem 0.3rem 0.8rem 0.1rem;

  > img {
    width: 3rem;
    height: 3rem;
    border-radius: 1000px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    > p {
      font-weight: 700;
    }

    > span {
      font-weight: 400;
      font-size: 0.8rem;
      color: var(--color-grey-600);
    }
  }
`;

function Profile() {
  const { user, isLoading } = useUser();

  if (isLoading) return null;

  const { email } = user;
  const { avatar, fullname } = user.user_metadata;

  return (
    <StyledProfile>
      <img src={avatar ? avatar : "/profile.webp"} alt="profile image" />
      <div>
        <p>{fullname}</p>
        <span>{email}</span>
      </div>
    </StyledProfile>
  );
}

export default Profile;
