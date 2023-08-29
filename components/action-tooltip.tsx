'use client';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { FunctionComponent } from 'react';

interface ActionTooltipProps {
    label: string;
    children: React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
}

const ActionTooltip: FunctionComponent<ActionTooltipProps> = ({ children, label, align, side }) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent side={side} align={align}>
                    <p className="font-semibold text-sm capitalize">{label.toLowerCase()}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default ActionTooltip;
