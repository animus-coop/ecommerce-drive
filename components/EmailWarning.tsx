import {FC} from "react";

const EmailWarning: FC = () => {
    return (
        <div className="email-warning">
            <p><b>¡Importante!</b> Cada vez que guardes un pedido, te enviaremos un mail de confirmación.</p>
            <p>Si no recibís el mail de confirmación en tu bandeja de entrada, revisá la carpeta de spam.</p>
        </div>
    )
};

export default EmailWarning;
