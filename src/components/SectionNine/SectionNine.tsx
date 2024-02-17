import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import S from "./SectionNine.module.scss";

type SectionEightProps = {
	windowWidth: number;
};

const SectionEight: React.FC<SectionEightProps> = ({ windowWidth }) => {
	const textScrollSpeed = windowWidth <= 1024 ? -5 : 3;

	return (
		<section id="section-nine" data-scroll-section>
			<div className={S.section}>
				<div className={S.left}>
					<p className={S.text}>
						Посмотрите больше фотографий наших работ
					</p>
					<Link to="/gallery">
						<div className={S.button}>
							<Button use="section-nine" text="галерея" />
						</div>
					</Link>
				</div>
				<div className={S.right}>
					<img
						className={S.image1}
						src="https://i.ibb.co/wWnD5VC/6.jpg"
						alt=""
					/>
					{/* <img
						className={S.image2}
						src="https://i.ibb.co/KVYnHTX/10.jpg"
						alt=""
					/> */}
					{/* <img
						className={S.image3}
						src="https://i.ibb.co/swB1rGV/grafik.jpg"
						alt=""
					/> */}
					<p
						data-scroll
						className={S.title}
						data-scroll-direction="horizontal"
						data-scroll-speed={textScrollSpeed}
					>
						С   иголочки
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionEight;
