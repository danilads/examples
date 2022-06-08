import React from 'react';

import { Button } from './button.component';

export default {
  title: 'Primitives/Button',
  component: Button
};

const Template = (args) => (
  <Button {...args}/>
);

export const ButtonExample = Template.bind({});

ButtonExample.args = {
  title: 'ButtonExample'
};
