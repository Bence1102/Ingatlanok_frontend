import Ingatlanok from "../Components/public/Ingatlanok";
import KategoriaSzuro from "../Components/public/KategoriaSzuro";

function Public() {
  return (
    <div>
      <h1>Ingatlanok</h1>
      <KategoriaSzuro />
      <Ingatlanok />
    </div>
  );
}

export default Public;
