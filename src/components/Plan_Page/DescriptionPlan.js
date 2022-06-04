import styled from 'styled-components';
import peaksIcon from '../../assets/peakIcon.svg';
import dolarIcon from '../../assets/dolarIcon.svg';

export default function DescriptionPlan() {
  return (
    <>
      <Container>
        <div className="containerTitle">
          <img src={peaksIcon} alt="" />
          <h4>Benefícios:</h4>
        </div>
        <ol className="peaks" style={{ listStyleType: 'decimal' }}>
          <li>Brindes exclusivos</li>
          <li>Materiais bônus de web</li>
        </ol>
      </Container>

      <Container>
        <div className="containerTitle">
          <img src={dolarIcon} alt="" />
          <h4>Preço:</h4>
        </div>
        <p>R$ 39,99 cobrados mensalmente</p>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 90%;
  margin-top: 12px;
  color: white;
  padding: 0 22px 0 22px;
  p {
    margin-top: 4px;
    font-size: 14px;
  }
  .containerTitle {
    display: flex;
    font-size: 16px;
    h4 {
      margin-left: 4px;
    }
  }
  .peaks {
    margin: 10px 0 0 17px;
    font-size: 14px;
    height: 33px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
  }
`;
