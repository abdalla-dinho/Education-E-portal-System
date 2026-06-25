import styled from "styled-components";
import { useUpdatePassword } from "./useUpdatePassword";
import UpdatePassword from "./UpdatePassword";
import UpdateUsername from "./UpdateUsername";
import SpinnerFull from "../../UI/SpinnerFull";
import { useUpdateAccount } from "./useUpdateAccount";

const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;

const SettingHeader = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  padding: 3rem 0.8rem 0.6rem 0.8rem;
`;

function SettingsRow() {
  const { isUpdating: isUpdating1 } = useUpdatePassword();
  const { isUpdating: isUpdating2 } = useUpdateAccount();

  if (isUpdating1 || isUpdating2) return <SpinnerFull />;

  return (
    <StyledSettings>
      <SettingHeader>Update You account</SettingHeader>
      <UpdatePassword />
      <UpdateUsername />
    </StyledSettings>
  );
}

export default SettingsRow;
