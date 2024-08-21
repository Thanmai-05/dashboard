import React from 'react';
import { useSelector } from 'react-redux';
import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';
import '../styles/Dashboard.css'

const Dashboard = () => {
  const categories = useSelector(state => state.dashboard.categories);

  return (
    <div className="dashboard">
      {categories.map(category => (
        <div key={category.id} className="category">
          <h3>{category.name}</h3>
          <div className="widgets">
            {category.widgets.map(widget => (
              <Widget key={widget.id} categoryId={category.id} widget={widget} />
            ))}
            <AddWidgetModal categoryId={category.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
