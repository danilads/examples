import React from 'react';

import { Picker } from './picker.component';

export default {
  title: 'Components/Picker',
  component: Picker,
};

const Template = (args) => (
  <Picker {...args}/>
);

export const PickerExample = Template.bind({});
PickerExample.args = {
  title: 'AvatarExample',
};
