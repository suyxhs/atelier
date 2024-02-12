import gsap from "gsap";
import { LongLine } from "../LongLine";
import React, { useEffect } from "react";
import S from "./SectionEight.module.scss";
import useRefArray from "../../hooks/useRefArray";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type SectionEightProps = {
	windowWidth: number;
};

const SectionEight: React.FC<SectionEightProps> = ({ windowWidth }) => {
	const refs = useRefArray<SVGSVGElement>(5);
	const linesVisibility: boolean[] = [
		useIntersectionObserver(refs[0], 1),
		useIntersectionObserver(refs[1], 1),
		useIntersectionObserver(refs[2], 1),
		useIntersectionObserver(refs[3], 1),
		useIntersectionObserver(refs[4], 1),
	];

	useEffect(() => {
		if (!refs) return;
		refs.forEach((ref, i) => {
			if (linesVisibility[i]) {
				gsap.to(ref.current?.firstChild, {
					delay: windowWidth > 1024 ? 0.5 : 0.2,
					duration: 2.5,
					ease: "expo.out",
					strokeDashoffset: 0,
				});
			}
		});
	}, [linesVisibility, refs]);

	return (
		<section id="section-eight" data-scroll-section>
			<div className={S.section}>
				<div className={S.box}>
					<LongLine
						ref={refs[0]}
						className={S.line}
						windowWidth={windowWidth}
					/>
					<p className={S.title}>Пиджак</p>
					<p className={S.text}>
					Внимание к деталям - это то, что отличает наш
					пиджак от массового производства. Мы обращаем 
					особое внимание на подбор фурнитуры, строчку и 
					фасон, чтобы создать пиджак, который выгодно 
					подчеркнет вашу силу и стиль.
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486753/it/7-1_y73bqk.png"
						alt="her"
					/>
				</div>
				<div className={S.box}>
					<LongLine
						ref={refs[1]}
						className={S.line}
						windowWidth={windowWidth}
					/>
					<p className={S.title}>Шарф</p>
					<p className={S.text}>
					Доверьтесь нашим мастерам и насладитесь уникальным
					качеством и дизайном, которые мы гарантируем в 
					каждом изделии. Почувствуйте удовольствие от обладания 
					ярким и стильным шарфом, который будет радовать вас долгие годы.
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486754/it/7-2_tk158a.png"
						alt="her"
					/>
				</div>
				<div className={S.box}>
					<LongLine
						ref={refs[2]}
						className={S.line}
						windowWidth={windowWidth}
					/>
					<p className={S.title}>Лонгслив</p>
					<p className={S.text}>
					Доверьтесь нашим опытным мастерам и насладитесь уникальным
					качеством и стилем, которые мы гарантируем в каждом изделии. 
					Носите неповторимый лонгслив, который подчеркнет вашу индивидуальность 
					и станет вашим любимым предметом гардероба.
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486754/it/7-3_b9syhi.png"
						alt="her"
					/>
				</div>
				<div className={S.box}>
					<LongLine
						ref={refs[3]}
						className={S.line}
						windowWidth={windowWidth}
					/>
					<p className={S.title}>Рубашка</p>
					<p className={S.text}>
					Мы предлагаем различные модели и стили теплых рубашек
					– от классических и строгих до более спортивных и практичных. 
					У нас вы можете найти рубашки с длинными рукавами, утепленными 
					воротниками и манжетами, чтобы обеспечить дополнительную защиту от холода и ветра.
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486754/it/7-4_lrjllb.png"
						alt="her"
					/>
					<LongLine
						ref={refs[4]}
						className={S.line}
						windowWidth={windowWidth}
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionEight;
