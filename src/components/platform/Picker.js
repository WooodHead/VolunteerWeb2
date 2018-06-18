import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { ChipStyle, pickerCont } from '../../styles/platform/PlatformStyles.js';

class Picker extends React.Component {
  state = {
    selected: [],
  };

  handleChange = async event => {
    await this.setState({ selected: event.target.value });
    this.props.updateSelected(this.state.selected);
  };

  handleDelete = item => async () => {
    const selected = [...this.state.selected];
    const itemToDelete = selected.indexOf(item);
    selected.splice(itemToDelete, 1);
    await this.setState({ selected });
    this.props.updateSelected(this.state.selected);
  };


  render() {
    return (
      <div>
        <FormControl fullWidth margin='dense'>
          <InputLabel htmlFor="select-multiple-chip">{this.props.label}</InputLabel>
          <Select
            multiple
            autoWidth
            value={this.state.selected}
            onChange={this.handleChange}
            input={<Input error={this.props.meta.error && this.props.meta.touched} id="select-multiple-chip" margin='dense'/>}
            renderValue={selected => (
              <div className={pickerCont}>
                {selected.map(value => <Chip className={ChipStyle} key={value} label={value} onDelete={this.handleDelete(value)} />)}
              </div>
            )}
          >
            {this.props.data.map(piece => (
              <MenuItem key={piece} value={piece}>
                {piece}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

    );
  }
}

export default Picker;
