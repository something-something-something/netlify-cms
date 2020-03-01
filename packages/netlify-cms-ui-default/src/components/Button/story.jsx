import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { Button, ButtonGroup, IconButton } from '.';
import { iconComponents } from '../Icon/Icon';

export default {
  title: 'Components/Buttons',
  decorators: [withKnobs],
};

export const _Button = () => {
  return (
    <ButtonGroup>
      <Button
        size={select('size', { sm: 'sm', 'md (default)': null, lg: 'lg' }, null)}
        type={select('type', { default: null, success: 'success', danger: 'danger' }, null)}
        primary={boolean('primary', false)}
        disabled={boolean('disabled', false)}
        onClick={action('onClick')}
      >
        Button
      </Button>
    </ButtonGroup>
  );
};

export const _ButtonGroup = () => {
  return (
    <ButtonGroup
      direction={select('direction', { 'horizontal (default)': null, vertical: 'vertical' }, null)}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button primary type="success">
        Primary Button
      </Button>
    </ButtonGroup>
  );
};

_ButtonGroup.story = {
  name: 'ButtonGroup',
};

export const _IconButton = () => {
  return (
    <ButtonGroup>
      <IconButton
        icon={select(
          'name',
          {
            default: null,
            ...Object.keys(iconComponents).reduce((acc, key) => ({ ...acc, [key]: key }), {}),
          },
          null
        )}
        size={select('size', { sm: 'sm', 'md (default)': null, lg: 'lg' }, null)}
        active={boolean('active', false)}
        onClick={action('onClick')}
      />
    </ButtonGroup>
  );
};

_IconButton.story = {
  name: 'IconButton',
};
