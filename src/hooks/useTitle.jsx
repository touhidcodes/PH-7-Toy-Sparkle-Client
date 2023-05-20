import { useEffect } from "react";

const useTitle = (title) => {
	useEffect(() => {
		document.title = `Toy Sparkle | ${title}`;
	}, [title]);
};

export default useTitle;
