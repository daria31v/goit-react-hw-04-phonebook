import PropTypes from 'prop-types';
import { DeleteBtn, Item } from './ContactItems.styled';


export const ContactItems = ({ item: { id, name, number}, onDelete }) => {
  return (
    <>
      <Item>
        {name}: {number}
      </Item>
      <DeleteBtn onClick={() => onDelete(id)}>Delete</DeleteBtn>
    </>
  );
};



ContactItems.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number.isRequired,
}.isRequired
