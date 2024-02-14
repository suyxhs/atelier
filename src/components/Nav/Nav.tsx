import React from "react";
import S from "./Nav.module.scss";

type NavProps = {
	onClick: () => void;
};

const Nav = React.forwardRef<HTMLElement, NavProps>(({ onClick }, ref) => {
	return (
		<nav ref={ref} className={S.nav}>
			<div className={S.upper} onClick={onClick}>
				<p>Me</p>
				<p>Nu</p>
			</div>
			<div className={S.lower}>
				<p className={S.lowerText}>
					С <span className={S.and}>--</span> иголочки
				</p>
			</div>
			<div className={S.div} />
		</nav>
	);
});

export default Nav;
