import { useDispatch } from 'react-redux';
import Cards from '../UI/Cards'
import { basketActions } from '../../store/basket-slice';


const ProductItem = ({ id, price, title, description, ...props }) => {
    const dispatch = useDispatch();

    const addItemToBasketHandler = () => {
        dispatch(basketActions.addToBasket({
            id,
            price,
            title,
            description
        }))
    }

    return (
      <li>
        <Cards>
          <header className="flex justify-between">
            <h2 className='font-bold uppercase'>{title}</h2>
            <p className="bg-[#393939] px-8 py-1 text-lg font-bold tracking-wider  rounded-2xl text-white">
              £{price}
            </p>
          </header>
          <p className='my-4'>{description}</p>
          <p className='text-right'>
            <button onClick={addItemToBasketHandler} className="border-2 border-[#eee075] py-2 px-6 rounded-2xl font-bold tracking-wider hover:bg-[#eee075]">Add to Basket</button>
          </p>
        </Cards>
      </li>
    );
}

export default ProductItem;