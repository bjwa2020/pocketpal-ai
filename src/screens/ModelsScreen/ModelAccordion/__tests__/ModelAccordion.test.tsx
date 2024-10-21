import React from 'react';

import {List} from 'react-native-paper';
import {render, fireEvent} from '@testing-library/react-native';

import {themeFixtures} from '../../../../../jest/fixtures/theme';

import {ModelAccordion} from '../ModelAccordion';

import {modelStore} from '../../../../store';

describe('ModelAccordion', () => {
  beforeEach(() => {
    Object.defineProperty(modelStore, 'activeModel', {
      get: jest.fn(() => undefined),
    });
  });

  it('renders the accordion with correct title and children', () => {
    const group = {type: 'Test Group'};
    const {getByText} = render(
      <ModelAccordion group={group} expanded={true} onPress={jest.fn()}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </ModelAccordion>,
    );

    expect(getByText('Test Group')).toBeTruthy();
    expect(getByText('First item')).toBeTruthy();
    expect(getByText('Second item')).toBeTruthy();
  });

  it('renders the accordion with correct title and children when expanded is false', () => {
    const group = {type: 'Test Group'};
    const {getByText, queryByText} = render(
      <ModelAccordion group={group} expanded={false} onPress={jest.fn()}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </ModelAccordion>,
    );

    expect(getByText('Test Group')).toBeTruthy();
    expect(queryByText('First item')).toBeNull();
    expect(queryByText('Second item')).toBeNull();
  });

  it('calls onPress when the accordion is pressed', () => {
    const mockOnPress = jest.fn();
    const group = {type: 'Test Group'};

    const {getByText} = render(
      <ModelAccordion group={group} expanded={false} onPress={mockOnPress}>
        <List.Item title="Child Item" />
      </ModelAccordion>,
    );

    fireEvent.press(getByText('Test Group'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('displays the expanded state correctly', async () => {
    const group = {type: 'Test Group'};

    const {getByText, queryByText, rerender} = render(
      <ModelAccordion group={group} expanded={false} onPress={jest.fn()}>
        <List.Item title="Child Item" />
      </ModelAccordion>,
    );

    expect(queryByText('Child Item')).toBeNull();

    rerender(
      <ModelAccordion group={group} expanded={true} onPress={jest.fn()}>
        <List.Item title="Child Item" />
      </ModelAccordion>,
    );

    expect(getByText('Child Item')).toBeTruthy();
  });

  it('applies active group styles when activeModel matches group type', () => {
    const group = {type: 'Model Group1'};
    Object.defineProperty(modelStore, 'activeModel', {
      get: jest.fn(() => ({type: 'Model Group1'})),
    });

    const {getByTestId} = render(
      <ModelAccordion group={group} expanded={false} onPress={jest.fn()}>
        <List.Item title="Child Item" />
      </ModelAccordion>,
    );

    const accordion = getByTestId('model-accordion-Model Group1').parent;

    expect(accordion?.props.style).toEqual(
      // Wow, this is a mess.
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            backgroundColor: themeFixtures.lightTheme.colors.tertiaryContainer,
            borderColor: themeFixtures.lightTheme.colors.primary,
          }),
        ]),
      ]),
    );
  });

  it('applies default theme styles when activeModel does not match group type', () => {
    const group = {type: 'Model Group'};
    Object.defineProperty(modelStore, 'activeModel', {
      get: jest.fn(() => ({type: 'Different Group'})),
    });
    const {getByTestId} = render(
      <ModelAccordion group={group} expanded={false} onPress={jest.fn()}>
        <List.Item title="Child Item" />
      </ModelAccordion>,
    );

    const accordion = getByTestId('model-accordion-Model Group').parent;

    expect(accordion?.props.style).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            backgroundColor: themeFixtures.lightTheme.colors.surface,
            borderColor: themeFixtures.lightTheme.colors.surfaceVariant,
          }),
        ]),
      ]),
    );
  });
});