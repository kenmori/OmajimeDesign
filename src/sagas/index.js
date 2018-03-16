import interviewFrame from './interviewFrame';
import formSaga from './formSaga';

export default function*(){
    yield [
        interviewFrame(),
        formSaga()
    ]
}
