import { useSelector, useDispatch } from "react-redux";
import { selectedLanguage } from "../redux-toolkit/modules/languageSlice";

const Language = () => {
  	const languages = useSelector((state) => state.language.language);
  	const dispatch = useDispatch();

	const onChangeLanguage = (lan) => {
		dispatch(selectedLanguage(lan));
	};

	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
		}}>
			<div>
				{languages === "kr" && <div>안녕하세요, 반가워요!</div>}
				{languages === "en" && <div>Hello, nice to meet you!</div>}
				{languages === "jp" && <div>こんにちは、嬉しいです!</div>}
			</div>
			<div>
				<button onClick={() => onChangeLanguage("kr")}>한국어</button>
				<button onClick={() => onChangeLanguage("en")}>영어</button>
				<button onClick={() => onChangeLanguage("jp")}>일본어</button>
			</div>
		</div>
	);
};

export default Language;
