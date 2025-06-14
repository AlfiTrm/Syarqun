export interface ILesson {
    icon: React.ElementType;
    title: string;
    description: string;
    index: number;
    active: boolean;
    onClick: () => void;
}