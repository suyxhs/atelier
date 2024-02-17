import React from "react";
import S from "./Banner.module.scss";

const Banner = () => {
	return (
		<div id="banner" className={S.banner}>
			<p
				data-splitting=""
				className={`${S.textOne} split-text hidden-init`}
			>
				С <span className={S.and}>🪡</span> иголочки
			</p>
			<p
				data-splitting=""
				className={`${S.textTwo} split-text hidden-init`}
			>
				Ателье - Мастерская
			</p>
		</div>
	);
};

export default Banner;
