import { Badge } from "@nextui-org/react";
import {FC} from "react";

type props = {
    stock: number | null;
}
const StockBadge: FC<props> = ({stock}) => {
    return (
        <>
            {stock === 0 ? (
                <Badge color="error">Sin stock</Badge>
            ) : (
                <>
                    {(stock === null || stock > 10) ? (
                        <Badge className="stock-badge" color="success">Stock disponible</Badge>
                    ) : (
                        <Badge className="stock-badge" color="warning">
                            Última {stock === 1 ? "unidad" : `s ${stock} unidades`}!
                        </Badge>
                    )}
                </>
            )}
        </>
    );
};

export default StockBadge;
