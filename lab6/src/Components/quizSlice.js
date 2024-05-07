import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  answers: {},
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addQuestion(state, action) {
      state.questions.push(action.payload);
    },
    selectAnswer(state, action) {
      const { questionId, answerId } = action.payload;
      state.answers[questionId] = answerId;
    },
    resetQuiz(state) {
      state.answers = {};
    },
  },
});

export const { addQuestion, selectAnswer, resetQuiz } = quizSlice.actions;

export default quizSlice.reducer;