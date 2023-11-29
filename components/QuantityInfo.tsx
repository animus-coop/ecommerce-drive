import {Badge} from '@nextui-org/react';
import React, { FC } from 'react';

type props = {
    unsavedQty: number;
    remainingStock: number | null;
    stockExceededBy: number;
};

const QuantityInfo: FC<props> = ({unsavedQty, remainingStock, stockExceededBy}) => {
    return (
        <div className="quantity-info">
            {unsavedQty ? (
                <Badge className="info-badge">
                    {unsavedQty} {unsavedQty === 1 || unsavedQty === -1 ? 'unidad' : 'unidades'} sin guardar
                </Badge>
            ) : ""}
            {remainingStock !== null && remainingStock <= 0 && stockExceededBy === 0 && (
                <Badge color="error" className="info-badge">
                    Sin stock disponible para agregar más
                </Badge>
            )}
            {remainingStock !== null && stockExceededBy > 0 && (
                <Badge color="error" className="info-badge">
                    Excede el stock por {stockExceededBy} {stockExceededBy === 1 ? 'unidad' : 'unidades'}
                </Badge>
            )}
        </div>
    );
};

export default QuantityInfo;
