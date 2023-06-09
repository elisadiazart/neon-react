import { v4 } from "uuid";

export const PRICES = [
    {
        key: v4(),
        title: 'Starter',
        number: '49',
        include:'Features include:',
        color: 'transparent',
        checklist: ['Unlimited placeholder texts','Consectetur adipiscing elit', 'Excepteur sint occaecat cupidatat', 'Officia deserunt mollit anim'],
        display:'none'
    },
    {
        key: v4(),
        title: 'Business',
        number: '79',
        color: '#1F2937',
        include:'Everything in Starter, plus:',
        checklist: ['Consectetur adipiscing elit','Consectetur adipiscing elit', 'Excepteur sint occaecat cupidatat', 'Officia deserunt mollit anim','Excepteur sint occaecat cupidatat','Officia deserunt mollit anim'],
        display:'flex'
    },
    {
        key: v4(),
        title: 'Enterprise',
        number: '129',
        include:'Features include:',
        color: 'transparent',
        checklist: ['Unlimited placeholder texts','Consectetur adipiscing elit', 'Excepteur sint occaecat cupidatat', 'Officia deserunt mollit anim'],
        display:'none'
    }

]