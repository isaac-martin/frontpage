/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ComponentList from './ComponentList';

const onSelectIndex = action('onSelectIndex');
storiesOf('screens/UseCasesScreen/ComponentList', module).add('full', () => (
  <ComponentList selectedIndex={0} onSelectIndex={onSelectIndex} />
));
