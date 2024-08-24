import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/actions';
import '../styles/AddWidgetBar.css';

function AddWidgetBar({ closeModal }) {
    const dispatch = useDispatch();
    const categories = [
        { id: 'cspm', name: 'CSPM Executive Dashboard' },
        { id: 'cwpp', name: 'CWPP Dashboard' },
        { id: 'registry', name: 'Registry Scan' }
      ];
  const [selectedCategory, setSelectedCategory] = useState(
    categories.length > 0 ? categories[0].id : null
  );
  const [widgetName, setWidgetName] = useState('');
  const [widgetDescription, setWidgetDescription] = useState('');

  const handleAddWidget = () => {
    if (!selectedCategory) return;

    const newWidget = {
      id: Date.now().toString(),
      name: widgetName,
      content: widgetDescription,
    };

    dispatch(addWidget(selectedCategory, newWidget));
    closeModal();
  };

  return (
    <div className="Barmodal">
      <div className="Barmodal-content">
        <h2>Add Widget</h2>
        <select
          value={selectedCategory || ''}
          onChange={(e) => setSelectedCategory((e.target.value))}
          disabled={categories.length === 0}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Description"
          value={widgetDescription}
          onChange={(e) => setWidgetDescription(e.target.value)}
        />
        <div className="Barmodal-actions">
          <button onClick={handleAddWidget} disabled={!selectedCategory}>
            Add Widget
          </button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddWidgetBar;
