import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const PrimaryButton = () => <Button>Me button</Button>;
export const LoadingButton = () => <Button className="loading">Loading...</Button>;
