import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    console.log(state.checkedA)
  };

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}
