import { useAppSelector } from '@/app/store';
import { useParams } from 'react-router';
import { useProduct } from '@/utils/hooks/useProduct';
import Details from './components/Details';
import ProductInfo from './components/ProductInfo';
import { ProductShowcase } from './components/ProductShowcase';
import ProductSpecs from './components/ProductSpecs';
import ReviewList from './components/ReviewList';
import ShareProduct from './components/ShareProduct';
import ProductList from '@/components/product/ProductList';
import DetailsSkeleton from '@/components/loaders/DetailsSkeleton';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '@/app/slices/wishlistSlice';
import { formCartItem, isEmptyObj } from '@/utils/helpers';
import SearchError from '@/components/UI/SearchError';
import useScrollTop from '@/utils/hooks/useScrollTop';

const ProductDetails = () => {
  useScrollTop();
  const { slug } = useParams();
  const { isError, isLoading, product } = useProduct(slug);
  const { products, auth } = useAppSelector((state) => ({ products: state.products, auth: state.auth }));
  const dispatch = useDispatch();

  const onWish = () => {
    const wishItem = formCartItem(product);
    dispatch(addToWishlist(wishItem));
  };

  const isEmptySpecs = isEmptyObj(product?.specs);

  return (
    <section className="py-10">
      {isLoading && <DetailsSkeleton />}
      {!isLoading && isError && <SearchError />}
      {!isError && !isLoading && product && (
        <>
          <div className="lg:grid grid-cols-9 gap-2 bg-white shadow-md p-4 mb-8">
            <div className="lg:col-span-4">
              <ProductShowcase images={product.subImages} image={product.image} />
            </div>
            <div className="h-full lg:block hidden bg-gray-200 justify-self-center" style={{ width: 1 }}></div>
            <div className="lg:col-span-4">
              <ProductInfo onWish={onWish} product={product} />
            </div>
          </div>
          <div className={`${!isEmptySpecs && 'grid md:grid-cols-2 gap-6'} mb-8`}>
            <div className="bg-white shadow-md p-4">
              <ReviewList
                reviews={product.reviews}
                rating={product.rating}
                numReviews={product.numReviews}
                userId={auth.id}
                token={auth.token}
              />
            </div>
            {!isEmptySpecs && (
              <div className=" bg-white shadow-md p-4">{product.specs && <ProductSpecs specs={product.specs} />}</div>
            )}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md p-4">
              <Details details={product.details} />
            </div>
            <div className="bg-white shadow-md p-4">
              <ShareProduct />
            </div>
          </div>
          <div className="mt-8">
            {products.length > 0 && (
              <>
                <h2 className="font-main mb-4 font-bold text-xl">Related products</h2>
                <div className="flex xl:grid xl:grid-cols-5 gap-2 xl:overflow-x-hidden overflow-x-scroll">
                  <ProductList products={products.slice(0, 5)} />
                </div>
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default ProductDetails;
