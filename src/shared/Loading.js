import styled from 'styled-components';

import { ThreeDots } from 'react-loader-spinner';

export default function Loading() {
  return (
    <ContainerLoading>
      <ThreeDots color="#FF4791" height={50} width={50} />
    </ContainerLoading>
  );
}
const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20px;
`;
