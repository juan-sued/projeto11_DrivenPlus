import ButtonPink from '../../shared/ButtonPink';
import Loading from '../../shared/Loading';
export default function ButtonsPerks({ objLoginResponse }) {
  return (
    <>
      {objLoginResponse.membership.perks === null ? (
        <Loading />
      ) : (
        <>
          {objLoginResponse.membership.perks.map((perk, index) => (
            <a key={index} href={perk.link}>
              <ButtonPink key={index} id={perk.id} backgroundcolor={'#FF4791'}>
                {perk.title}
              </ButtonPink>
            </a>
          ))}
        </>
      )}
    </>
  );
}
