import { Checkbox as CheckboxAntd, CheckboxProps } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import React from 'react';

export interface Props extends CheckboxProps {
	label?: string | React.ReactNode;
	id: string;
	name?: string;
	onChange?: ((e: CheckboxChangeEvent) => void) | undefined;
	classnamefield?: string;
	classnamediv?: string;
}

const Checkbox: React.FC<Props> = (props) => {

	const { label, id, name, classnamefield, classnamediv, onChange, style, ...checkboxProps } = props

	return (
		<div className={`${classnamediv ? classnamediv : ''}`}>
			<CheckboxAntd
				className={`${classnamefield ? classnamefield : ''}`}
				id={id} 
				name={name || id}
				onChange={onChange}
				style={{
					display: "flex",
					alignItems: "center",
					width: "fit-content",
					...style
				}}
				{...checkboxProps}
			>
				{label}
			</CheckboxAntd>
		</div>
	)
}

// Checkbox.defaultProps = {
// }

export default React.memo(Checkbox)