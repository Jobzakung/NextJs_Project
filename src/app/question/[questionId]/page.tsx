import React from 'react';
import { Question1, Question2, Question3 } from "./question";

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
            questionComponent = <div>Error 404 page not found</div>;
            break;
    }

    return (
        <div className="">
            {questionComponent}
        </div>
    );
}

export function generateStaticParams() {
    return [
        { questionId: '1' },
        { questionId: '2' },
        { questionId: '3' },
        // Add more dynamic parameters as needed
    ];

}
