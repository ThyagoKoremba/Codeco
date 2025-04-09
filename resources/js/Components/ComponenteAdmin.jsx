import { Children } from "react";
export default function ComponenteAdmin({ children, nombreExcp }) {
    // Corrige el operador de comparación y usa children en minúsculas
    if (nombreExcp === 'nuevoMenu') {
        return null;
    } else {
        return (
            <>
                {children}
            </>
        );
    }
}
