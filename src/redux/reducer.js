const initialState = {
    dashboard: {
      categories: [
        {
          id: 'cspm',
          name: 'CSPM Executive Dashboard',
          widgets: [
            { id: 'cloudAccounts', name: 'Cloud Accounts', content: '2 Total' },
            { id: 'cloudAccountRisk', name: 'Cloud Account Risk Assessment', content: '9659 Total' }
          ]
        },
        {
          id: 'cwpp',
          name: 'CWPP Dashboard',
          widgets: []
        },
        {
          id: 'registry',
          name: 'Registry Scan',
          widgets: [
            { id: 'imageRisk', name: 'Image Risk Assessment', content: '1470 Total Vulnerabilities' },
            { id: 'imageSecurity', name: 'Image Security Issues', content: '2 Total Images' }
          ]
        }
      ]
    }
  };
  
  const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_WIDGET':
        return {
          ...state,
          dashboard: {
            ...state.dashboard,
            categories: state.dashboard.categories.map(category =>
              category.id === action.payload.categoryId
                ? { ...category, widgets: [...category.widgets, action.payload.widget] }
                : category
            )
          }
        };
      case 'REMOVE_WIDGET':
        return {
          ...state,
          dashboard: {
            ...state.dashboard,
            categories: state.dashboard.categories.map(category =>
              category.id === action.payload.categoryId
                ? {
                    ...category,
                    widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId)
                  }
                : category
            )
          }
        };
      default:
        return state;
    }
  };
  
  export default dashboardReducer;
  