'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { FunctionComponent } from 'react';

interface UserAvatarProps {
    src?: string;
    className?: string;
}

export const UserAvatar: FunctionComponent<UserAvatarProps> = ({ className, src }) => {
    return (
        <Avatar className={cn('h-7 w-7 md:h-10 md:w-10 ', className)}>
            <AvatarImage src={src} className="object-cover" />
        </Avatar>
    );
};
