import ButtonPink from '../../shared/ButtonPink';
import Loading from '../../shared/Loading';
export default function ButtonsPerks({ objBuyPlanResponse }) {
  return (
    <>
      {objBuyPlanResponse.membership.perks === null ? (
        <Loading />
      ) : (
        <>
          {objBuyPlanResponse.membership.perks.map((perk, index) => (
            <ButtonPink
              key={index}
              id={perk.id}
              backgroundcolor={'#FF4791'}
              action={'changePlan'}
            >
              {perk.title}
            </ButtonPink>
          ))}
        </>
      )}
    </>
  );
}
