import { Badge } from "@nextui-org/react";
import {FC} from "react";

type props = {
    stock: number | null;
    getStockBadgeText?: (stock: number | null) => string;
}
const StockBadge: FC<props> = ({stock, getStockBadgeText}) => {
    const getDefaultStockBadgeText = (stock: number | null) => {
        if (stock === 0) return 'Sin stock';
        if (stock === null || stock > 10) return 'Stock disponible';
        return `Última${stock === 1 ? ' unidad' : `s ${stock} unidades`}!`;
    }

    const getStockBadgeColor = (stock: number | null) => {
        if (stock === 0) return 'error';
        if (stock === null || stock > 10) return 'success';
        return 'warning';
    }
    return (
        <Badge color={getStockBadgeColor(stock)} className="info-badge">
            {getStockBadgeText ? getStockBadgeText(stock) : getDefaultStockBadgeText(stock)}
        </Badge>
    )
};

export default StockBadge;
