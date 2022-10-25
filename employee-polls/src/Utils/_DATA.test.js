import { _saveQuestion, _saveQuestionAnswer } from './_DATA' 

describe('_saveQuestion', () => {
    it('will return saved question with populated fields', async() => {
        var question = {
            optionOneText: 'One',
            optionTwoText: 'Two',
            author: 'mtsamis'
        };
        var result = await _saveQuestion(question);
        expect(result.id).not.toBeNull();
        expect(result.optionOne.text).toEqual('One');
        expect(result.optionTwo.text).toEqual('Two');
        expect(result.author).toEqual('mtsamis');
        expect(result.timestamp).not.toBeNull();
        expect(result.optionOne.text.votes).toEqual(undefined);
        expect(result.optionTwo.text.votes).toEqual(undefined);
    });

    it('will throw an error if incorrect data is passed', async() => {
        var question = {
            optionOneText: 'One',
            optionTwoText: 'Two',
            author: null
        };
        await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });
});

describe('_saveQuestionAnswer', () => {
    it('will return true when data is correctly formatted when passed to the function', async() => {
        const answer = {
            authedUser: 'sarahedo',
            qid: '6ni6ok3ym7mf1p33lnez',
            answer: 'optionOne'
        }
        var result = await _saveQuestionAnswer(answer);
        expect(result).toEqual(true);
    });

    it('will throw an error if incorrect data is passed', async() => {
        const answer = {
            authedUser: 'sarahedo',
            qid: '6ni6ok3ym7mf1p33lnez'
        }
        await expect(_saveQuestionAnswer(answer)).rejects.toEqual("Please provide authedUser, qid, and answer");
    });
});