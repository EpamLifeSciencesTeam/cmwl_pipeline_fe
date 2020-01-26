import { ChangeEvent } from 'react';

export interface Mutable<T> {
    value: T,
    update: (event: ChangeEvent<HTMLInputElement>) => void
}
