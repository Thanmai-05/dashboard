import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/actions';
import '../styles/Widget.css';

const Widget = ({ categoryId, widget }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget(categoryId, widget.id));
  };

  return (
    <div className="widget">
      <div className="widget-header">
        <h5>{widget.name}</h5>
        <button className="remove-btn" onClick={handleRemove}>✖</button>
      </div>
      <p>{widget.content}</p>
    </div>
  );
};

export default Widget;
