
import { ReactComponent as BagIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react';
import { BagContext } from '../../context/bag-context';
import './card-icon.style.scss'
const CardIcon = () => {
  const { bagItem, setBagItem,items } = useContext(BagContext);

const taggleHandler=()=>setBagItem(! bagItem)
  return (
    <div className='cart-icon-container'>
<BagIcon className='shopping-icon' onClick={taggleHandler}/>
<span className='item-count '>{items}</span>
    </div>
  )
}

export default CardIcon