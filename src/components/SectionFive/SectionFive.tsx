import gsap from "gsap";
import Marquee from "react-fast-marquee";
import S from "./SectionFive.module.scss";
import React, { useEffect, useRef } from "react";
import { ReactComponent as Line } from "../../svgs/line.svg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type SectionFiveProps = {
	windowWidth: number;
};

const SectionFive: React.FC<SectionFiveProps> = ({ windowWidth }) => {
	const title1ScrollSpeed = windowWidth <= 1024 ? -7.5 : 1.2;
	const title2ScrollSpeed = windowWidth <= 1024 ? 6 : -1.2;

	const ref = useRef<HTMLParagraphElement>(null);
	const isOnScreen = useIntersectionObserver(ref, 1);

	useEffect(() => {
		if (isOnScreen) {
			gsap.to("#lineRef > line", {
				duration: 2,
				ease: "expo.out",
				strokeDashoffset: 0,
			});
		}
	}, [isOnScreen]);

	return (
		<section id="section-five" data-scroll-section>
			<div id="target-element" className={S.section}>
				<Marquee
					pauseOnHover
					gradient={false}
					className={S.marquee}
					speed={windowWidth > 1024 ? 15 : 80}
				>
					<p className={S.marqueeText}>Collections</p>
					<p className={S.marqueeText}>Collections</p>
					<p className={S.marqueeText}>Collections</p>
					<p className={S.marqueeText}>Collections</p>
				</Marquee>
				<div className={S.main}>
					<h2
						data-scroll
						className={S.title1}
						data-scroll-direction="horizontal"
						data-scroll-speed={title1ScrollSpeed}
					>
						Наши
					</h2>
					<img
						className={S.image}
						src="https://i.ibb.co/vxwp1X5/2.jpg"
						alt=""
					/>
					<h2
						data-scroll
						className={S.title2}
						data-scroll-direction="horizontal"
						data-scroll-target="#target-element"
						data-scroll-speed={title2ScrollSpeed}
					>
						Работы
					</h2>
				</div>
				<div className={S.sub}>
					<p className={S.subText}>Ответственность</p>
					<div className={S.subRow}>
						<Line
							id={"lineRef"}
							width="11.22vh"
							height="0.33vh"
							className={S.line1}
						/>
						<p ref={ref} className={S.subText}>
							Радость
						</p>
					</div>
					<div className={S.subRow}>
						<p className={S.subText}>Минимализм</p>
						<Line
							id={"lineRef"}
							width="11.22vh"
							height="0.33vh"
							className={S.line2}
						/>
					</div>
				</div>
				<div className={S.textWrapper}>
					<p className={S.text}>
					В нашем ателье мы относимся к работе с 
					каждым изделием с особой ответственностью и 
					преданностью. Мы понимаем, что одежда имеет большое 
					значение для наших клиентов и представляет их 
					индивидуальность и стиль.
					<br />
					Мы уделяем максимальное внимание деталям в 
					каждом этапе создания одежды. Начиная с 
					консультации и изучения ваших пожеланий, 
					мы стараемся полностью понять ваши предпочтения 
					и потребности. Наши опытные мастера обладают 
					уникальным мастерством и профессионализмом, 
					чтобы создать для вас идеальное изделие.
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionFive;
