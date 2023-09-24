import { ID } from '@datorama/akita';

export interface Search {
    id?: ID;
    name: string;
    avatar_url?: string;
    blog?: string;
    followers?: Number;
    following?: Number;
    location?: string;
    public_repos?: Number;
    isSuccessful: boolean;
    isFaviourite: boolean;
}