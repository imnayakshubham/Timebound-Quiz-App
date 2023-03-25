export const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_QUIZZ_STARTED":
            return {
                ...state,
                isQuizStarted: action.data
            }
        case "UPDATE_QUIZZ_DATA":
            return {
                ...state,
                questions: action.data
            }
    }
}