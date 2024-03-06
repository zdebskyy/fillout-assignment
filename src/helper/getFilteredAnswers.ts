import { ResultResponseType, FilterClauseType, ResponsesType } from '../types'



export const filterResponses = (res: ResultResponseType, filters: FilterClauseType[]) => {
   return res.responses.filter((response: { questions: any[]; }) => filters.every((filter) => {
        const question = response.questions.find((q: { id: string; }) => q.id === filter.id);
        if (!question) return false;

        switch (filter.condition) {
            case 'equals':
                return question.value === filter.value;
            case 'does_not_equal':
                return question.value !== filter.value;
            case 'greater_than':
                return parseFloat(question.value) > Number(filter.value);
            case 'less_than':
                return parseFloat(question.value) < Number(filter.value);
            default:
                return false;
        }
    }))
}