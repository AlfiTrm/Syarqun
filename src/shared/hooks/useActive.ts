import { useState, useEffect } from "react";

export const useActive = () => {
    const [active, setActive] = useState(() => "#");

    useEffect(() => {
        const onHashChange = () => {
            setActive(window.location.hash || "#");
        };

        window.addEventListener("hashchange", onHashChange);

        return () => {
            window.removeEventListener("hashchange", onHashChange);
        };
    }, []);

    return active;
};
