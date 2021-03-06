import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'cloud-react';
import { noop } from '@utils';

export default function Spacing(props) {
	const { value, onChange } = props;
	const [top, setTop] = useState('0px');
	const [right, setRight] = useState('0px');
	const [bottom, setBottom] = useState('0px');
	const [left, setLeft] = useState('0px');

	useEffect(() => {
		if (value) {
			const values = value.split(' ');
			if (values.length > 1) {
				setTop(values[0]);
				setRight(values[1]);
				setBottom(values[2]);
				setLeft(values[3]);
			} else {
				setTop(props.value);
				setRight(props.value);
				setBottom(props.value);
				setLeft(props.value);
			}
		}
	}, [props.value]);

	const handleTopChange = event => {
		const topValue = event.target.value;
		setTop(topValue);
		onChange([topValue, right, bottom, left].join(' '));
	};

	const handleRightChange = event => {
		const rightValue = event.target.value;
		setRight(rightValue);
		onChange([top, rightValue, bottom, left].join(' '));
	};

	const handleBottomChange = event => {
		const bottomValue = event.target.value;
		setBottom(bottomValue);
		onChange([top, right, bottomValue, left].join(' '));
	};

	const handleLeftChange = event => {
		const leftValue = event.target.value;
		setLeft(leftValue);
		onChange([top, right, bottom, leftValue].join(' '));
	};

	const handleResetZero = () => {
		setTop('0px');
		setRight('0px');
		setBottom('0px');
		setLeft('0px');
		onChange('0px');
	};

	return (
		<>
			上：
			<Input className="spcing" value={top} onChange={handleTopChange} />
			右：
			<Input className="spcing" value={right} onChange={handleRightChange} />
			下：
			<Input className="spcing" value={bottom} onChange={handleBottomChange} />
			左：
			<Input className="spcing" value={left} onChange={handleLeftChange} />
			<Button size="small" onClick={handleResetZero}>
				清零
			</Button>
		</>
	);
}

Spacing.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func
};

Spacing.defaultProps = {
	value: '',
	onChange: noop
};
