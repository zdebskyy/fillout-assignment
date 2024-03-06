export interface QuestionType {
    id: string;
    name: string;
    type: 'ShortAnswer' | 'Number' | 'DatePicker';
    value: number | string | Date;
}

interface CalculationType {
    id: string;
    name: string;
    type: 'number' | 'string';
    value: number | string;
}

interface UrlParameterType {
    id: string;
    name: string;
    value: string;
}

interface QuizType {
    score: number;
    maxScore: number;
}

export type FilterClauseType = {
	id: string;
	condition: 'equals' | 'does_not_equal' | 'greater_than' | 'less_than';
	value: number | string;
}

export interface ResponsesType {
    questions: QuestionType[];
    calculations?: CalculationType[]; 
    urlParameters: UrlParameterType[];
    quiz?: QuizType;
    submissionId: string;
    submissionTime: string;
}

export interface ResultResponseType {
    responses: ResponsesType[];
    totalResponses: number;
    pageCount: number;
}
