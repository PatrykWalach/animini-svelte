import type { Meta, StoryObj } from '@storybook/svelte';

import TextFieldOutlined from './TextFieldOutlined.svelte';

const meta: Meta<TextFieldOutlined> = {
	title: 'Text Field Outlined',
	component: TextFieldOutlined,
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<TextFieldOutlined>;

export const Enabled: Story = {
	args: {
		children: 'Label text',
		supporting: 'Supporting text',
		leading: 'MagnifyingGlassIcon'
	}
};

export const Focused = {
	args: {
		...Enabled.args,
		trailing: 'XCircleIcon' as const
	},
	parameters: {
		pseudo: { focusWithin: true, hover: true }
	}
};

export const Hovered: Story = {
	args: Enabled.args,
	parameters: {
		pseudo: { hover: true }
	}
};

export const Disabled: Story = {
	args: { ...Enabled.args, disabled: true },
	parameters: Focused.parameters
};

// Populated
export const EnabledPopulated = {
	args: {
		...Enabled.args,
		value: 'Input text',
		trailing: Focused.args.trailing
	}
};

export const FocusedPopulated: Story = {
	args: EnabledPopulated.args,
	parameters: Focused.parameters
};

export const HoveredPopulated: Story = {
	args: EnabledPopulated.args,
	parameters: Hovered.parameters
};

export const DisabledPopulated: Story = {
	args: { ...EnabledPopulated.args, disabled: true },
	parameters: Disabled.parameters
};

// Error
export const EnabledError: Story = {
	args: {
		...Enabled.args,
		error: true,
		trailing: 'ExclamationCircleIcon'
	}
};
export const FocusedError: Story = {
	args: EnabledError.args,
	parameters: Focused.parameters
};

export const HoveredError: Story = {
	args: EnabledError.args,
	parameters: Hovered.parameters
};

// ErrorPopulated
export const EnabledErrorPopulated: Story = {
	args: {
		...EnabledError.args,
		value: EnabledPopulated.args.value
	}
};

export const FocusedErrorPopulated: Story = {
	args: EnabledErrorPopulated.args,
	parameters: Focused.parameters
};

export const HoveredErrorPopulated: Story = {
	args: EnabledErrorPopulated.args,
	parameters: Hovered.parameters
};
