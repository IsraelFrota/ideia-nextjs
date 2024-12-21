import style from "../style/style.module.css";

function Sidebar(props) {
	return (
		<div className={style.side_container}>
			{props.children}
		</div>
	);
};

export default Sidebar;