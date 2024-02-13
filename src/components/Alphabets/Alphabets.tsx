import React from "react";
import S from "./Alphabets.module.scss";

const alphabets = [
	"-",
	"О",
	"B",
	"C",
	"Л",
	"И",
	"F",
	"G",
	"H",
	"I",
	"J",
	"О",
	"L",
	"M",
	"Ч",
	"И",
	"P",
	"Q",
	"Г",
	"S",
	"К",
	"U",
	"V",
	"W",
	"X",
	"С",
	"Z",
];

type AlphabetProps = {
	dataIndex: number;
	letterIndex: number;
};

const Alphabets = React.forwardRef<HTMLDivElement, AlphabetProps>(
	({ dataIndex, letterIndex }, ref) => {
		return (
			<div
				ref={ref}
				data-index={dataIndex}
				className={S.alphabets}
				data-letter={letterIndex}
			>
				{alphabets.map((alphabet) => (
					<p className={S.alphabet} key={alphabet}>
						{alphabet}
					</p>
				))}
			</div>
		);
	}
);

export default Alphabets;
