import React from "react";
import S from "./SectionTwo.module.scss";
import { ReactComponent as Signature } from "../../svgs/signature.svg";

const SectionTwo: React.FC = () => {
	return (
		<section id="section-two" data-scroll-section>
			<div className={S.section}>
				<div className={S.textWrapper}>
					<h2 className={S.title}>Описание</h2>
					<p className={S.text}>
					Ателье - это место, где творятся настоящие шедевры моды.
					У нас каждая деталь имеет значение, и мы уделяем особое 
					внимание качеству и совершенству. Наши опытные мастера 
					с любовью и профессионализмом создадут для вас неповторимые 
					модели одежды, которые подчеркнут вашу индивидуальность. 
					Мы умеем слушать и воплощать в жизнь ваши самые смелые идеи. 
					В нашем ателье вы найдете исключительный сервис, индивидуальный 
					подход и безупречное качество. Позвольте себе выделиться из толпы
					 и раскрыть свою уникальность вместе с нашим ателье. Доверьтесь 
					 нашим нитям и прикоснитесь к истинной элегантности и стилю!
					</p>
					{/* <Signature className={S.signature} /> */}
					<p className={S.person}>Главный дизайнер</p>
				</div>
				<div className={S.imageWrapper}>
					<div className={S.imageContainer}>
						<div
							data-scroll
							className={S.image}
							data-scroll-speed="-1"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionTwo;
