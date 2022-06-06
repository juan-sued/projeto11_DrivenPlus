import ButtonPink from '../../shared/ButtonPink';
import Loading from '../../shared/Loading';
export default function ButtonsPerks({
  objLoginResponse,
  objDescriptionPlan,
  fistLogin
}) {
  console.log('esse é o objlogin', objLoginResponse);
  console.log('esse é o objDescription', objDescriptionPlan);

  return (
    <>
      {(fistLogin ? objLoginResponse.membership.perks : objDescriptionPlan.perks) ===
      null ? (
        <Loading />
      ) : (
        <>
          {(fistLogin ? objLoginResponse.membership.perks : objDescriptionPlan.perks).map(
            (perk, index) => (
              <a key={index} href={perk.link}>
                <ButtonPink key={index} id={perk.id} backgroundcolor={'#FF4791'}>
                  {perk.title}
                </ButtonPink>
              </a>
            )
          )}
        </>
      )}
    </>
  );
}
