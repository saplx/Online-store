import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar></Navbar>
    </>
  );
};

export default ProductPage;
