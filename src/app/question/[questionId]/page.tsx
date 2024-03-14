import React from 'react';
import { Question1, Question2, Question3 } from "./question";
import Error404 from '@/components/404error';
import { Navbar } from '@/components';

export default function Page({ params }: { params: { questionId: string } }) {
    let questionComponent;

    switch (params.questionId) {
        case '1':
            questionComponent = <Question1 />;
            break;
        case '2':
            questionComponent = <Question2 />;
            break;
        case '3':
            questionComponent = <Question3 />;
            break;
        default:
            questionComponent = <Error404 />;
            break;
    }

    return (
        <main className=' bg-beige_bg w-screen h-screen'>
            {['1', '2', '3'].includes(params.questionId) && <Navbar />}
            {questionComponent}
        </main>

    );
}

export function generateStaticParams() {
    return [
        { questionId: '1' },
        { questionId: '2' },
        { questionId: '3' },
    ];
}
