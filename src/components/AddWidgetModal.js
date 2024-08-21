import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/actions';
import '../styles/AddWidgetModal.css';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

const AddWidgetModal = ({ categoryId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [widgetName, setWidgetName] = useState('');
  const [widgetContent, setWidgetContent] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (widgetName && widgetContent) {
      dispatch(addWidget(categoryId, { id: Date.now().toString(), name: widgetName, content: widgetContent }));
      setWidgetName('');
      setWidgetContent('');
      setIsOpen(false);
    }
  };

  return (
    <>
      <button className="add-widget-btn" onClick={() => setIsOpen(true)}>+ Add Widget</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h4>Add New Widget</h4>
            <input
              type="text"
              placeholder="Widget Name"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
            />
            <textarea
              placeholder="Widget Content"
              value={widgetContent}
              onChange={(e) => setWidgetContent(e.target.value)}
            />
            <div className="modal-actions">
              <button onClick={handleAdd}>Add</button>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddWidgetModal;
